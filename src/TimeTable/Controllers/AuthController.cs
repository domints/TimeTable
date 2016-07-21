using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using TimeTablePublicModels;
using TimeTable.Models;
using TimeTable.Helpers;
using Microsoft.Extensions.Configuration;
using System.Text.RegularExpressions;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TimeTable.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        TTContext _ctx;
        AuthHelper authHelper;
        IConfigurationRoot _cfg;

        public AuthController(TTContext context, IConfigurationRoot config)
        {
            _ctx = context;
            authHelper = new AuthHelper(config);
            _cfg = config;
        }

        // POST /api/auth/login
        [HttpPost("login")]
        [AllowAnonymous]
        public AuthResult Login([FromBody] AuthLoginModel input)
        {
            AuthResult ret = new AuthResult
            {
                Type = AuthResultType.InternalError
            };

            try
            {
                User usr = _ctx.Users.FirstOrDefault(u => u.Email.ToLower() == input.Login.ToLower() || u.UserName.ToLower() == input.Login.ToLower());
                if (usr == null || usr.Password != authHelper.HashPassword(input.Password))
                {
                    ret.Type = AuthResultType.InvalidPassOrLogin;
                }
                else
                {
                    int deadline = _cfg.GetValue<int>("Security:SessionLifetime");
                    Session sess = _ctx.Sessions.FirstOrDefault(s => s.UserId == usr.Id && s.SessionDeadLine >= DateTime.Now.ToUniversalTime());
                    if (sess == null)
                    {
                        sess = new Session()
                        {
                            SessionDeadLine = deadline == -1 || input.RememberMe ? DateTime.MaxValue : DateTime.Now.AddMinutes(deadline).ToUniversalTime(),
                            User = usr
                        };

                        string token = usr.Id.ToString() + "|" + authHelper.HashPassword(usr.UserName + sess.SessionDeadLine.Ticks.ToString());
                        sess.Token = token;
                    }

                    _ctx.Sessions.Add(sess);

                    _ctx.RemoveRange(_ctx.Sessions.Where(s => s.SessionDeadLine < DateTime.Now.ToUniversalTime()));

                    _ctx.SaveChanges();
                    ret.ExpirationDate = sess.SessionDeadLine;
                    ret.Token = sess.Token;
                    return ret;
                }
            }
            catch(Exception ex)
            {
                ret.Type = AuthResultType.InternalError;
                ret.ExtraMessage = ex.Message;
                return ret;
            }

            return ret;
        }

        // GET /api/auth/logout
        [HttpGet("logout")]
        [Authorize]
        public bool Logout()
        {
            try
            {
                TimeTableUser ttu = ControllerContext.HttpContext.User.Identities.FirstOrDefault(i => i is TimeTableUser) as TimeTableUser;
                if(ttu != null)
                {
                    Session sess = _ctx.Sessions.FirstOrDefault(s => s.UserId == ttu.User.Id && s.Token == ttu.Token);
                    if(sess != null)
                    {
                        _ctx.Remove(sess);
                        _ctx.SaveChanges();
                    }
                }
                else
                {
                    return false;
                }

                return true;
            }
            catch
            {
                return false;
            }
        }
        
        // POST /api/auth/register
        [HttpPost("register")]
        [AllowAnonymous]
        public AuthRegisterResultModel Register([FromBody] AuthRegisterPostModel input)
        {
            AuthRegisterResultModel arrm = new AuthRegisterResultModel
            {
                Result = AuthRegisterResultType.InternalError
            };

            string pattern = @"^([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$";

            if(Regex.IsMatch(input.Email, pattern))
            {
                if (_ctx.Users.Any(u => u.Email.ToLower() == input.Email.ToLower()))
                {
                    arrm.Result = AuthRegisterResultType.EmailExists;
                }
                else if (_ctx.Users.Any(u => u.UserName.ToLower() == input.UserName.ToLower()))
                {
                    arrm.Result = AuthRegisterResultType.NameExists;
                }
                else
                {
                    ResourceTable resTable = input.ResourceTable == null ? null : _ctx.ResourceTables.FirstOrDefault(rt => rt.Id == input.ResourceTable);
                    if (resTable != null || input.ResourceTable == null)
                    {
                        User usr = new Models.User
                        {
                            Email = input.Email,
                            FullName = input.FullName,
                            Password = authHelper.HashPassword(input.Password),
                            UserName = input.UserName
                        };
                        _ctx.Users.Add(usr);
                        if (resTable != null)
                        {
                            _ctx.RtToUsers.Add(new RtToUser { ResourceTable = resTable, User = usr });
                        }

                        _ctx.SaveChanges();
                    }
                    else
                    {
                        arrm.Result = AuthRegisterResultType.ValidationError;
                    }
                }
            }
            else
            {
                arrm.Result = AuthRegisterResultType.ValidationError;
            }

            return arrm;
        }
    }
}

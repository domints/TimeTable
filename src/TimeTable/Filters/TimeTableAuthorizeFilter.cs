using Microsoft.AspNetCore.Mvc.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using TimeTable.Models;
using TimeTable.Helpers;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Primitives;
using Microsoft.Extensions.Configuration;

namespace TimeTable.Filters
{
    public class TimeTableAuthorizeFilter : AuthorizeFilter
    {
        TTContext _dbctx;
        IConfigurationRoot Config;
        public TimeTableAuthorizeFilter(IServiceProvider serviceProvider) : this(new AuthorizationPolicyBuilder("Basic").RequireAuthenticatedUser().Build())
        {
            _dbctx = (TTContext)serviceProvider.GetService(typeof(TTContext));
            Config = (IConfigurationRoot)serviceProvider.GetService(typeof(IConfigurationRoot));
        }

        public TimeTableAuthorizeFilter(AuthorizationPolicy policy) : base(policy)
        {
        }

        public override Task OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            return Task.Run(() => TryAuthorize(context));
        }

        private void TryAuthorize(AuthorizationFilterContext context)
        {
            if(context.HttpContext.Request.Headers.ContainsKey("Authorization"))
            {
                StringValues sv = context.HttpContext.Request.Headers["Authorization"];
                if (sv.Count > 0)
                {
                    string[] vals = sv[0].Split(' ');
                    if (vals[0] == "Basic")
                    {
                        int id = int.Parse(vals[1].Split('|')[0]);
                        string hash = vals[1].Split('|')[1];
                        Session sess = _dbctx.Sessions.FirstOrDefault(s => s.UserId == id && s.Token == vals[1] && s.SessionDeadLine >= DateTime.Now.ToUniversalTime());
                        if (sess != null)
                        {
                            /*int deadline = Config.GetValue<int>("Security:SessionLifetime");
                            if (sess.SessionDeadLine != DateTime.MaxValue)
                            {
                                sess.SessionDeadLine = deadline == -1 ? DateTime.MaxValue : DateTime.Now.AddMinutes(deadline).ToUniversalTime();
                                _dbctx.SaveChanges();
                            }*/
                            sess.User = _dbctx.Users.First(usr => usr.Id == sess.UserId);
                            context.HttpContext.User.AddIdentity(new TimeTableUser() { User = sess.User, Token = vals[1], Label = sess.User.FullName });
                        }
                    }
                }
            }

            //if(_dbctx.Sessions.Any(s => s.UserId))
        }
    }
}

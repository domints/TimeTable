using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using TimeTable.Models;
using TimeTablePublicModels;
using TimeTable.Helpers;
using System;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TimeTable.Controllers
{
    [Route("api/rtable")]
    //[Authorize]
    public class ResourceTableController : Controller
    {
        TTContext _ctx;
        public ResourceTableController(TTContext context)
        {
            _ctx = context;
        }
        
        [HttpGet]
        public List<ResourceTableListModel> Get()
        {
            TimeTableUser ttu = User.Identities.FirstOrDefault(ci => ci is TimeTableUser) as TimeTableUser;
            if(ttu == null)
            {
#if DEBUG
                return _ctx.ResourceTables.Select(rt => new ResourceTableListModel { Id = rt.Id, Name = rt.Name, Owned = false }).ToList();
#else
                return null;
#endif
            }

            return _ctx.RtToUsers.Where(rttu => rttu.UserId == ttu.User.Id).Select(rttu => _ctx.ResourceTables.First(rt => rt.Id == rttu.ResourceTableId)).Select(rt => new ResourceTableListModel { Id = rt.Id, Name = rt.Name, Owned = rt.OwnerId == ttu.User.Id }).ToList();
        }

        [HttpPost]
        public bool Post([FromBody]ResourceTableAddModel input)
        {
            try
            {
                TimeTableUser ttu = User.Identities.FirstOrDefault(ci => ci is TimeTableUser) as TimeTableUser;
                User usr = ttu.User ?? _ctx.Users.First();
                ResourceTable rt = new ResourceTable { Name = input.Name, Owner = usr };
                _ctx.Add(rt);
                _ctx.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                _ctx.Add(new Log { Message = ex.Message, StackTrace = ex.StackTrace });
                return false;
            }
        }
    }
}

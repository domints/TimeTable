using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Threading.Tasks;

namespace TimeTable.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }
        public string Color { get; set; }

        public virtual ICollection<Booking> Bookings { get; set; }
        public virtual ICollection<ResourceTable> OwnedTables { get; set; }
        public virtual ICollection<Session> Sessions { get; set; }

        public virtual ICollection<RtToUser> AccessableTables { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTable.Models
{
    public class Session
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime SessionDeadLine { get; set; }
        public string Token { get; set; }

        public virtual User User { get; set; }
    }
}

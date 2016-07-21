using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTable.Models
{
    public class RtToUser
    {
        public int UserId { get; set; }
        public virtual User User { get; set; }

        public Guid ResourceTableId { get; set; }
        public virtual ResourceTable ResourceTable { get; set; }
    }
}

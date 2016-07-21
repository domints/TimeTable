using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTable.Models
{
    public class ResourceTable
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int OwnerId { get; set; }

        public virtual User Owner { get; set; }
        public virtual ICollection<Resource> Resources { get; set; }

        public virtual ICollection<RtToUser> AccessingUsers { get; set; }
    }
}

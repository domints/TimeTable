using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTable.Models
{
    public class Resource
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid ResourceTableId { get; set; }

        public virtual ResourceTable ResourceTable { get; set; }
        public virtual ICollection<Booking> Bookings { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTable.Models
{
    public class Booking
    {
        public Guid Id { get; set; }
        public int UserId { get; set; }
        public DateTime Start { get; set; }
        public DateTime Stop { get; set; }
        public Guid ResourceId { get; set; }

        public virtual User User { get; set; }
        public virtual Resource Resource { get; set; }
    }
}

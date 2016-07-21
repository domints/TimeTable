using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTable.Models
{
    public class Log
    {
        public int Id { get; set; }
        public DateTime Time { get; set; }
        public string Message { get; set; }
        public string StackTrace { get; set; }
    }
}

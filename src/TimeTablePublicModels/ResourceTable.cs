using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTablePublicModels
{
    public class ResourceTableListModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public bool Owned { get; set; }
    }

    public class ResourceTableAddModel
    {
        public string Name { get; set; }
    }
}

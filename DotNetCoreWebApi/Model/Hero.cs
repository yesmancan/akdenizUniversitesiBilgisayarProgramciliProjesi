using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Model
{
    public class Hero
    {
        public int id { get; set; }
        public string name { get; set; }
        public string imglink { get; set; }
        public string realName { get; set; }
        public string power { get; set; }
        public string abilities { get; set; }
        public string citizenship { get; set; }

    }
}

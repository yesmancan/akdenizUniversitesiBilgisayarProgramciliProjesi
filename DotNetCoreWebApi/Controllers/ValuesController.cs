using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        [EnableCors("MyPolicy")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        [EnableCors("MyPolicy")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        [EnableCors("MyPolicy")]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        [EnableCors("MyPolicy")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        [EnableCors("MyPolicy")]
        public void Delete(int id)
        {
        }
    }
}

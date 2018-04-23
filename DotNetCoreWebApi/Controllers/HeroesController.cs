using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApi.Model;
using System.Linq;
using System;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace todo.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class HeroesController : Controller
    {
        private readonly HeroesContext context = new HeroesContext();

        public List<Hero> GetAll()
        {
            return context.HEROES.ToList();
        }
        [Route("{id:int}")]
        public Hero GetById(int id)
        {
            return context.HEROES.FirstOrDefault(u => u.id == id);
        }
        [Route("{name}")]
        public List<Hero> GetByName(string name)
        {
            return context.HEROES.Where(u => u.name.Contains(name)).ToList();
        }

        [HttpPost]
        [Authorize]
        public Hero Create([FromBody]Hero hero)
        {
            if (hero.name == null)
                return new Hero();

            Hero hr = hero;
            context.HEROES.Add(hr);
            context.SaveChanges();
            return hr;
        }

        [HttpPut]
        [Authorize]
        public Hero Put([FromBody]Hero hero)
        {
            Response.StatusCode = 200;
            try
            {
                Hero H = context.HEROES.FirstOrDefault(h => h.id == hero.id);
                H.abilities = hero.abilities;
                H.citizenship = hero.citizenship;
                H.imglink = hero.imglink;
                H.name = hero.name;
                H.power = hero.power;
                H.realName = hero.realName;
                context.SaveChanges();
                return hero;
            }
            catch (Exception)
            {
                Response.StatusCode = 400;
                return new Hero();
            }
        }

        [HttpDelete("{id}", Name = "DeleteHero")]
        [Authorize]
        public string Delete(int id)
        {
            var hero = context.HEROES.FirstOrDefault(h => h.id == id);
            if (hero == null)
                return "bad";

            context.HEROES.Remove(hero);
            context.SaveChanges();

            return "ok";
        }
    }
}

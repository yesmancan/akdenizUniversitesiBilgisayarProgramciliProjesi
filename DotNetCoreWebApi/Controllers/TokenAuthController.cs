using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Auth;
using System.IdentityModel.Tokens.Jwt;
using Newtonsoft.Json;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.IdentityModel.Tokens;
using WebApi.Model;
using Microsoft.AspNetCore.Authorization;
using System.Text;

namespace Todo.Controllers
{
    [Route("api/[controller]")]
    public class TokenAuthController : Controller
    {
        HeroesContext context = new HeroesContext();
        USER existUser = new USER();

        [HttpPost]
        public IActionResult Create([FromBody]USER User)
        {
            if (IsValidUserAndPasswordCombination(User.EMAIL, User.PASSWORD))
                return new ObjectResult(("{\"token\":\"" + GenerateToken(User.EMAIL) + "\",\"userID\":" + JsonConvert.SerializeObject(existUser.ID) + "}"));

            return NotFound();
        }
        private bool IsValidUserAndPasswordCombination(string Email, string Password)
        {

            existUser = context.USER.FirstOrDefault(u => u.EMAIL == Email && u.PASSWORD == Password);

            return existUser != null;
        }
        private string GenerateToken(string Email)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.Name, Email),
                new Claim(JwtRegisteredClaimNames.Nbf, new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString()),
                new Claim(JwtRegisteredClaimNames.Exp, new DateTimeOffset(DateTime.Now.AddDays(1)).ToUnixTimeSeconds().ToString())
            };

            var token = new JwtSecurityToken(
                new JwtHeader(new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Benim Adým Yesmancan Ve Bu Bir Þifreli Mesaj Ýçin Kriptodur")),
                                             SecurityAlgorithms.HmacSha256)),
                new JwtPayload(claims));

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

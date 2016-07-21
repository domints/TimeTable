using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Claims;
using TimeTable.Models;

namespace TimeTable.Helpers
{
    public class AuthHelper
    {
        public IConfigurationRoot Configuration { get; }

        public AuthHelper(IConfigurationRoot config)
        {
            Configuration = config;
        }

        public string HashPassword(string password)
        {
            byte[] salt = Convert.FromBase64String(Configuration.GetValue<string>("Security:Salt"));
            int iCount = Configuration.GetValue<int>("Security:IterationCount");
            int hashLength = Configuration.GetValue<int>("Security:HashLength");

            string hash = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: iCount,
                numBytesRequested: hashLength));
            return hash;
        }
    }

    public class TimeTableUser : ClaimsIdentity
    {
        public TimeTableUser()
            : base("TimeTableApiAuth")
        {

        }

        public string Token { get; set; }
        public User User { get; set; }
    }
}

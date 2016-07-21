using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeTablePublicModels
{
    public enum AuthResultType
    {
        Success = 0,
        InvalidPassOrLogin = 1,
        InternalError = 2
    }

    public enum AuthRegisterResultType
    {
        Success = 0,
        ValidationError = 1,
        NameExists = 2,
        EmailExists = 3,
        InternalError = 4
    }

    public class AuthLoginModel
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string Version { get; set; }
        public bool RememberMe { get; set; }
    }

    public class AuthResult
    {
        public AuthResultType Type { get; set; }
        public string ExtraMessage { get; set; }
        public string Token { get; set; }
        public DateTime ExpirationDate { get; set; }
    }

    public class AuthRegisterPostModel
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Guid ResourceTable { get; set; }
    }

    public class AuthRegisterResultModel
    {
        public AuthRegisterResultType Result { get; set; }
    }
}

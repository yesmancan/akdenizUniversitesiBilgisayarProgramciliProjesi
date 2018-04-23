using Newtonsoft.Json;

namespace WebApi.Model
{
    public class USER
    {
        public int ID { get; set; }
        public string NAME { get; set; }
        public string SURNAME { get; set; }
        [JsonProperty("email")]
        public string EMAIL { get; set; }
        [JsonProperty("password")]
        public string PASSWORD { get; set; }
    }
}

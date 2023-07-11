using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FullStack.API.Model
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }

        //Navigation Properties
        [JsonIgnore]
        public ICollection<Employee>? Employee { get; set; }
    }
}

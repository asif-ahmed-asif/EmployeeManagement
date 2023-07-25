using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FullStack.API.Model
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Status { get; set; }

        //Navigation Properties
        [JsonIgnore]
        public ICollection<Employee>? Employee { get; set; }
    }
}

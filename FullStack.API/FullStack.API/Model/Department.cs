using System.ComponentModel.DataAnnotations;

namespace FullStack.API.Model
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
    }
}

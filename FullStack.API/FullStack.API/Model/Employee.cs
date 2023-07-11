using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FullStack.API.Model
{
    public class Employee
    {
        [Key]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public long Salary { get; set; }
        public int DepartmentId { get; set; }


        //Navigation Properties
        public Department? Department { get; set; }

    }
}

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace FullStack.API.Model
{
    public class Employee
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [MaxLength(11, ErrorMessage = "Phone number must be less than 11 digits!")]
        public string Phone { get; set; }
        [Required]
        public long Salary { get; set; }
        [Required]
        public int DepartmentId { get; set; }


        //Navigation Properties
        public Department? Department { get; set; }

    }
}

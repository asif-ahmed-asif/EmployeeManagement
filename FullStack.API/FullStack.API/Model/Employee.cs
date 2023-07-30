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
        [MaxLength(11, ErrorMessage = "Phone number must not exceed 11 digits!")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Only numbers are allowed!")]
        public string Phone { get; set; }
        [Required]
        [RegularExpression("^[0-9]*\\.?[0-9]+$", ErrorMessage = "Only positive numbers are allowed!")]
        public string Salary { get; set; }
        [Required]
        public int DepartmentId { get; set; }


        //Navigation Properties
        public Department? Department { get; set; }

    }
}

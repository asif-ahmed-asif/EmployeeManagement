using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FullStack.API.Model
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [EmailAddress(ErrorMessage = "Enter a valid Email address!")]
        public string Email { get; set; }
        [Required]
        [RegularExpression("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$%^&*_\\-]).{8,}$",
            ErrorMessage = "Your password must be at least 8 characters long," +
            "contain at least one number and have a mixture of uppercase and lowercase letters " +
            "and one special character. e.g: #?!@$%^&*-_")]
        public string Password { get; set; }
        [Required]
        [NotMapped]
        [Compare("Password", ErrorMessage = "Passwords not matched!")]
        public string ConfirmPassword { get; set; }
        public string? Token { get; set; }
        public string? Role { get; set; }
        public string? Status { get; set; }
    }
}

# EmployeeManagement 🧑‍💼

This is a full-stack web application for Employee Management, built with Angular on the front-end and ASP.NET Core Web API on the back-end, utilizing Entity Framework Core and MSSQL for data persistence.

[![GitHub stars](https://img.shields.io/github/stars/asif-ahmed-asif/EmployeeManagement?style=social)](https://github.com/asif-ahmed-asif/EmployeeManagement) [![GitHub forks](https://img.shields.io/github/forks/asif-ahmed-asif/EmployeeManagement?style=social)](https://github.com/asif-ahmed-asif/EmployeeManagement)

## Table of Contents 📑

- [About The Project](#about-the-project)
- [Features](#features) ✨
- [Tech Stack](#tech-stack) 💻
- [Installation](#installation) 🛠️
- [Usage](#usage) 🚀
- [How to Use](#how-to-use) 📚
- [Project Structure](#project-structure) 📁
- [API Reference](#api-reference) 🌐
- [Contributing](#contributing) 🤝
- [License](#license) 📄
- [Important Links](#important-links) 🔗
- [Footer](#footer) 👣

## About The Project 🌟

The Employee Management system is designed to streamline the process of managing employee data within an organization. It provides a centralized platform for handling employee information, department management, and user authentication. The application is built with a modern technology stack, offering a responsive user interface and a robust backend API.

## Features ✨

- **Employee Management:** Add, view, edit, and delete employee records.
- **Department Management:** Create, update, and manage departments, including their status (Active/Inactive).
- **User Authentication:** Secure login and signup functionality for users.
- **Role-Based Access (Potential):** Although the `hasRoleGuard` is a placeholder, the structure suggests potential for role-based access control.
- **Search and Filter:** Functionality to search employees by name and filter employees by department.
- **Form Validations:** Client-side validation for user inputs to ensure data integrity.
- **Responsive Design:** Utilizes Bootstrap for a consistent and responsive user experience across devices.

## Tech Stack 💻

- **Frontend:**
  - Angular (v16.1.x)
  - TypeScript
  - HTML
  - CSS
  - Bootstrap 5
  - Angular CLI

- **Backend:**
  - ASP.NET Core Web API
  - C#
  - Entity Framework Core
  - MSSQL

- **Dependencies:**
  - `@angular/animations`, `@angular/common`, `@angular/compiler`, `@angular/core`, `@angular/forms`, `@angular/platform-browser`, `@angular/platform-browser-dynamic`, `@angular/router`
  - `ng-angular-popup` (for notifications)
  - `ng-confirm-box` (for confirmation dialogs)
  - `rxjs`, `tslib`, `zone.js`
  - `@angular-devkit/build-angular`, `@angular/cli`, `@angular/compiler-cli`
  - `typescript`, `jasmine-core`, `karma`

## Installation 🛠️

This project consists of an Angular frontend and an ASP.NET Core Web API backend. Both need to be set up for the application to run.

### Prerequisites

- **Node.js and npm:** Ensure you have Node.js (which includes npm) installed. [Download Node.js](https://nodejs.org/)
- **.NET SDK:** Ensure you have the .NET SDK installed. [Download .NET SDK](https://dotnet.microsoft.com/download)
- **SQL Server:** Ensure you have SQL Server installed and running.

### Frontend Setup (Angular)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asif-ahmed-asif/EmployeeManagement.git
   cd EmployeeManagement/FullStack.UI
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Open `src/environments/environment.development.ts` and ensure the `baseApiUrl` points to your running ASP.NET Core API (e.g., `https://localhost:44333/`).
   ```typescript
   export const environment = {
     baseApiUrl : 'https://localhost:44333/'
   };
   ```

### Backend Setup (ASP.NET Core Web API)

1. **Navigate to the API directory:**
   ```bash
   cd ../FullStack.API
   ```

2. **Restore .NET dependencies:**
   ```bash
   dotnet restore
   ```

3. **Database Migration:**
   Apply the database migrations to set up your MSSQL database.
   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```
   *Note: Ensure your `appsettings.json` and `appsettings.Development.json` files in the `FullStack.API` directory are configured with your correct SQL Server connection string.*

### Running the Application

1. **Start the backend API:**
   Navigate to the `FullStack.API` directory in your terminal and run:
   ```bash
   dotnet run
   ```
   *Ensure the API is running, typically on `https://localhost:44333/`*

2. **Start the Angular development server:**
   Navigate to the `FullStack.UI` directory in a *separate terminal* and run:
   ```bash
   ng serve
   ```

   The application will be available at `http://localhost:4200/`.

## Usage 🚀

This application provides core functionalities for managing employees and departments within an organization.

- **Authentication:** Users must log in to access certain features. New users can sign up.
- **Employee Management:** View a list of all employees, add new employees, edit existing ones, and delete employees. Employees can be searched by name and filtered by department.
- **Department Management:** View a list of departments, add new departments, edit existing ones, and change their status (Activate/Deactivate).

## How to Use 📚

1. **Access the application:** Open your browser and navigate to `http://localhost:4200/`.
2. **Login/Signup:** Use existing credentials or sign up to access the system.
3. **Navigate:** Use the navigation bar to access 'Employee' and 'Department' modules.
4. **Employee Module:**
   - Click 'Add Employee' to create a new employee record.
   - View the list of employees, use the search bar to find specific employees by name, or use the department filter.
   - Click 'Edit' to modify an employee's details.
   - Click 'Delete' to remove an employee record (a confirmation prompt will appear).
5. **Department Module:**
   - Click 'Add Department' to create a new department.
   - View the list of departments, search for departments by name.
   - Click 'Edit' to modify department details.
   - Use 'Deactivate' or 'Activate' buttons to change the department's status.
6. **Logout:** Click the 'Log Out' button to end your session.

## Project Structure 📁

```
EmployeeManagement/
├── FullStack.API/
│   ├── Controllers/
│   ├── Data/
│   ├── Helpers/
│   ├── Migrations/
│   ├── Model/
│   ├── Services/
│   ├── appsettings.Development.json
│   ├── appsettings.json
│   ├── FullStack.API.csproj
│   ├── Program.cs
│   └── ...
│
└── FullStack.UI/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── auth/
    │   │   │   ├── dashboard/
    │   │   │   ├── department/
    │   │   │   ├── employees/
    │   │   │   ├── home/
    │   │   │   └── search/
    │   │   ├── guards/
    │   │   ├── helper/
    │   │   ├── model/
    │   │   ├── services/
    │   │   ├── app-routing.module.ts
    │   │   ├── app.component.css
    │   │   ├── app.component.html
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.module.ts
    │   │   └── ...
    │   ├── environments/
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    │
    ├── .editorconfig
    ├── angular.json
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```

## API Reference 🌐

The backend API is built using ASP.NET Core Web API. Key controllers and their functionalities include:

- **`AuthController`:** Handles user registration and login.
  - `POST /api/auth`: Register a new user.
  - `POST /api/auth/login`: Log in a user and return a JWT.

- **`EmployeeController`:** Manages employee data.
  - `GET /api/employee`: Get all employees.
  - `POST /api/employee`: Add a new employee.
  - `GET /api/employee/{id}`: Get a specific employee by ID.
  - `PUT /api/employee`: Update an existing employee.
  - `DELETE /api/employee/{id}`: Delete an employee.
  - `GET /api/employee/search/{key}`: Search employees by name.

- **`DepartmentController`:** Manages department data.
  - `GET /api/department`: Get all departments.
  - `POST /api/department`: Add a new department.
  - `GET /api/department/{id}`: Get a specific department by ID.
  - `PUT /api/department`: Update an existing department.
  - `DELETE /api/department/{id}`: Change department status (deactivate/activate).
  - `GET /api/department/search/{key}`: Search departments by name.

*Note: The `WeatherForecastController` is a default ASP.NET Core controller and likely not core to the application's functionality.* 

## Contributing 🤝

Contributions are welcome! If you have suggestions for how to improve this project, or if you have a feature you'd like to add, please open an issue or a pull request. 

To contribute, please:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is not currently under any specified license. Please check the repository for the most up-to-date licensing information.

## Important Links 🔗

- **Repository:** [EmployeeManagement on GitHub](https://github.com/asif-ahmed-asif/EmployeeManagement)

## Footer 👣

**© 2023 EmployeeManagement | Repository:** [asif-ahmed-asif/EmployeeManagement](https://github.com/asif-ahmed-asif/EmployeeManagement)

Made with ❤️ and ☕.

Feel free to **Fork**, **Star ⭐**, and **Contribute** to this project!
If you encounter any issues, please open an [issue](https://github.com/asif-ahmed-asif/EmployeeManagement/issues).

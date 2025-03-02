# Deskify Admin

Deskify Admin is a web-based administration panel for managing laptops and packages in the Deskify system. It provides functionalities for administrators to manage users, handle authentication, and perform CRUD operations on laptops and packages.

## Features

- **User Authentication**: Secure login and logout functionality.
- **Dashboard**: Provides an overview of system status and user details.
- **Laptop Management**: Create, update, delete, and list laptops with pagination.
- **Package Management**: Create, update, delete, and list packages with pagination.
- **Protected Routes**: Ensures only authenticated users can access certain routes.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js (API integration)
- **State Management**: React Context API
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/deskify-admin.git
   cd deskify-admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to see the app.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Previews the production build.

## License

This project is licensed under the MIT License.

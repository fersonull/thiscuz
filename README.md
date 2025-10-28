# Laravel + React + Inertia Boilerplate

This is a minimal boilerplate for a modern, full-stack application. It provides a clean starting point, pre-configured with a productive workflow to help you start building your project faster.

This template is built with:

  * **Backend:** Laravel
  * **Frontend:** React
  * **Connector:** Inertia.js
  * **Tooling:** Vite
  * **Styling:** Tailwind CSS

## 📋 Requirements

Before you begin, make sure you have the following tools installed on your system:

  * PHP (\>= 8.1)
  * Composer
  * Node.js (LTS recommended)
  * A database (e.g., MySQL, PostgreSQL, or SQLite)

## 🚀 Getting Started

Follow these steps to clone the repository and set up the development environment.

### 1\. Clone the Repository

Clone this project to your local machine:

```bash
# Replace with your project's URL
git clone https://github.com/fersonull/laravel-template.git

# Navigate into the new directory
cd laravel-template
```

### 2\. Install Dependencies

You'll need to install both PHP and Node.js dependencies.

```bash
# Install PHP packages
composer install

# Install Node.js packages
npm install
```

### 3\. Set Up Your Environment

Copy the example environment file and generate your application key.

```bash
# Create your .env file
cp .env.example .env

# Generate a unique application key
php artisan key:generate
```

### 4\. Configure Your Database

By default, the template is set up for SQLite for quick testing, but you can use any database Laravel supports.

1.  Open the `.env` file in your code editor.
2.  Update the `DB_` variables to match your local database configuration.

**If using the SQLite default:**
No need to change the `DB_` variables, just create the database file:

```bash
touch database/database.sqlite
```

**If using MySQL/PostgreSQL:**
Update your `.env` file with the correct credentials:

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_db_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
```

### 5\. Run Migrations

Run the database migrations to create the necessary tables (like the `users` and `sessions` tables).

```bash
php artisan migrate
```

## 💻 Running the Development Server

To run the app, you must start **two** processes in separate terminal windows.

**Terminal 1: Start the Vite Server**
(This compiles your React/CSS assets and provides Hot Module Replacement)

```bash
npm run dev
```

**Terminal 2: Start the Laravel Server**
(This serves your backend application)

```bash
php artisan serve
```

Your application is now running\! You can view it in your browser at **`http://127.0.0.1:8000`**.
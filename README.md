# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 📚 Online Library System
📖 Project Overview

This project is a simple Online Library System built using React with Vite. The application allows users to browse books by category, search for books, view detailed information, and add new books to the collection. The main goal of this project is to demonstrate routing, state management using Redux, and form handling in React.

## ⚙️ Technologies Used

1.React (created using Vite)
2.React Router DOM (for navigation and dynamic routing)
3.Redux Toolkit (for state management)
4.CSS for styling

## ✨ Features Implemented

=>  Home Page: Displays a welcome message.
    Shows available book categories.
    Displays a few popular books as cards.
    Includes a navigation bar with links to Home, Browse Books, and Add Book.

=> Browse Books Page: Displays all books.
     Filters books by category using dynamic routes (/books/:category).
     Includes a search bar to filter books by title or author.
     Each book has a “View Details” button.

=>  Book Details Page: Displays complete information about a selected book.
    Shows title, author, description, and rating.
    Includes a button to navigate back to the Browse page.

=>  Add Book Page:Form to add a new book.
    All fields are required with validation.
    Uses Redux to update the books list.
    After submission, the user is redirected to Browse Books.
    Newly added book appears at the top of the list.

=> 404 Page:Displays when an invalid route is entered.
    Shows the incorrect URL.
    Includes a link back to the Home page.
    Does not display the Header component.

How to Run the Project?

Clone the repository: 1.git clone <your-repository-link>
                        2.Navigate into the project folder: cd online-library
                        3.Install dependencies: npm install
                        4.Start the development server:npm run dev
                        5.Open the browser and visit:(http://localhost:5173/)


📂 Folder Structure
src/
 ├── components/
 ├── pages/
 ├── redux/
 ├── App.jsx
 ├── main.jsx


## 📌 Additional Notes:
->The project was created using Vite as required.
->Redux is used to manage the books state globally.
->Form validation ensures that incomplete data cannot be submitted.
->Code is structured and commented for readability.


##  Author

Vandhana Dharavath

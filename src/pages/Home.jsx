import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"];

  return (
    <div className="container">
      <h1>Welcome to the Online Library</h1>

      <h2>Categories</h2>
      <div className="categories">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`} className="category-link">
            {cat}
          </Link>
        ))}
      </div>

      <h2>Popular Books</h2>
      <div className="grid">
        {books.slice(0, 3).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;

/* for BookCard in Online Library*/
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">

      {/* .//Book Image //*/}
      <img 
        src={book.image} 
        alt={book.title} 
        className="book-image"
      />

      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>

      <Link to={`/book/${book.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default BookCard;

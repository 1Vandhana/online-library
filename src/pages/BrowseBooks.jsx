import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = category
    ? books.filter((book) => book.category === category)
    : books;

  const searchedBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Browse Books</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        className="search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {searchedBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;

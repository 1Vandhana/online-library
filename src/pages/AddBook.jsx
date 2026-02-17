/* Using Redux react for adding the new data into the online library */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image:"",
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { image,title, author, category, description, rating } = formData;

    if (!image || !title || !author || !category || !description || !rating) {
      alert("All fields are required!");
      return;
    }

    const newBook = {
      id: Date.now(),
      ...formData,
      rating: Number(rating)
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div className="container">
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit} className="form">
        <input name="image" placeholder="Image" onChange={handleChange}/>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="author" placeholder="Author" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <textarea name="description" placeholder="Description" onChange={handleChange} />
        <input name="rating" type="number" placeholder="Rating" onChange={handleChange} />

        <button type="submit" className="btn">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;

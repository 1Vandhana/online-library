import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
/* Router Path for Navbar,Home,Broser,Details ,adding the books and not found Paths*/
function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /><Home /></>} />
      <Route path="/books" element={<><Navbar /><BrowseBooks /></>} />
      <Route path="/books/:category" element={<><Navbar /><BrowseBooks /></>} />
      <Route path="/book/:id" element={<><Navbar /><BookDetails /></>} />
      <Route path="/add-book" element={<><Navbar /><AddBook /></>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

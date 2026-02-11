import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowserBooks from "./pages/BrowseBooks";
import BookDetails from "./Pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Routes With Navbar */}
                <Route path="/" element ={<><Navbar/><Home/></>}/>
                <Route path="/books" element={<><Navbar/><BrowseBooks/></>}/>
                <Route path="/books/:category" element={<><Navbar /><BrowseBooks /></>} />
                <Route path="/book/:id" element={<><Navbar /><BookDetails /></>} />
                <Route path="/add-book" element={<><Navbar /><AddBook /></>} />
                {/* 404 Without Navbar */}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
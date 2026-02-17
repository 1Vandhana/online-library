import { createSlice } from "@reduxjs/toolkit";
import { dummyBooks } from "../data/dummyBooks";
// load books from localStorage if available
const storedBooks=localStorage.getItem("books")
? JSON.parse(localStorage.getItem("bools"))
:dummyBooks;

const booksSlice = createSlice({
  name: "books",
  initialState: dummyBooks,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload);

      ///Save updated books to the LocalStorage
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

import axios from "axios";

export default {
    // Get books from Google API
    getBooks: function(result) {
        return axios.get("/api/google", { params: { result: "title:" + result } });
    },
    // Get saved books
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    // Delete saved book with the given ID
    deleteBook: function(id) {
        return axios.delete("api/books/" + id);
    },
    // Saves a book to db
    saveBook: function(bookRes) {
        return axios.post("/api/books", bookRes);
    }
}
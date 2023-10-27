import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore("books", {
    state: () => ({
        books: [],
    }),
    getters: {
        getBooks(state) {
            return state.books;
        },
    },
    actions: {
        async fetchBooks() {
            try {
                const data = await axios.get(
                    `${import.meta.env.VITE_API_BASE_URL}/books/all`,
                );
                this.books = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
});

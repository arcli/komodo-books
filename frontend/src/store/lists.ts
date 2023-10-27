import { defineStore } from "pinia";
import axios from "axios";

export const useListStore = defineStore("lists", {
    state: () => ({
        lists: [],
    }),
    getters: {
        getLists(state) {
            return state.lists;
        },
    },
    actions: {
        async fetchLists() {
            try {
                const data = await axios.get(
                    `${import.meta.env.VITE_API_BASE_URL}/lists/all`,
                );
                this.lists = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async addBookToList(bookId, listName) {
            // if we succeed, get info from response and add to the store
            console.log(`ADD ${bookId} TO LIST NAMED ${listName}`);
        },
    },
});

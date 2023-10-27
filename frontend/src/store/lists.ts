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
            const postData = {
                bookId: bookId,
                listName: listName,
            };

            try {
                const { status, data } = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/lists/addto`,
                    postData,
                );
                if (status === 200) {
                    // console.log("UPDATE LIST HERE");
                } else {
                    console.log(`Unexpected status: ${status}`);
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
});

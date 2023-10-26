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
                const data = await axios.get("http://docker.mk:8000/lists/all");
                this.lists = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
});

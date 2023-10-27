<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>My Books</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <BookList :books="books" showAddToList @popAddToList="popAddToList" />
      </v-col>
    </v-row>
  </v-container>
  <AddToListDialog
    v-model="addToListVisible"
    :listNames="listNames"
    :bookName="bookName"
    @addToListDone="addBookToList"
  />
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useBookStore } from "../store/books";
import { useListStore } from "../store/lists";

import BookList from "@/components/BookList.vue";
import AddToListDialog from "@/components/AddToListDialog.vue";

const bookId = ref(0);
const bookName = ref("");

const bookStore = useBookStore();
const listStore = useListStore();

const listNames = computed(() => {
  return listStore.lists.map((l) => l.name);
});

const books = computed(() => {
  return bookStore.books;
});

onMounted(() => {
  bookStore.fetchBooks();
  listStore.fetchLists();
});

const addToListVisible = ref(false);

function popAddToList(id, name) {
  addToListVisible.value = true;
  bookId.value = id;
  bookName.value = name;
}

async function addBookToList(listName) {
  addToListVisible.value = false;
  await listStore.addBookToList(bookId.value, listName);
}
</script>

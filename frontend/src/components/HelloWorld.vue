<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
    <div v-for="book in getBooks" :key="book.id">
      {{ book.id }} {{ book.title }}
    </div>
    <h1>Made By Actions</h1>
    <div v-for="book in books" :key="book.id">
      {{ book.id }} {{ book.title }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useBookStore } from "../store/books";

const store = useBookStore();
const msg = ref("Welcome to my Vuex Store");

const getBooks = computed(() => {
  return store.getBooks;
});

const books = computed(() => {
  return store.books;
});

onMounted(() => {
  store.fetchBooks();
});
</script>

<template>
  <v-container class="pl-0">
    <v-row>
      <v-col cols="12">
        <h1>My Books</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <BookList :books="books" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useBookStore } from "../store/books";
import BookList from "@/components/BookList.vue";

const store = useBookStore();

const books = computed(() => {
  return store.books;
});

onMounted(() => {
  store.fetchBooks();
});
</script>

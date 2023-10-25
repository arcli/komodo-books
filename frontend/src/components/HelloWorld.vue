<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>
      <v-app-bar-title>
        <img
          width="150"
          src="komodoLogoBlue.svg"
        />
        <span class="pl-5 text-h5">Books</span>
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer
      expand-on-hover
      rail
      color="#172e44"
      theme="dark"
      permanent
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-bookshelf" title="My Books" value="books"></v-list-item>
        <v-list-item prepend-icon="mdi-playlist-star" title="My Lists" value="lists"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <v-container>
        <v-row>
          <v-col
            class="mt-2"
            cols="12"
          >
            <h2>My Books</h2>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col
            class="mt-2"
            cols="12"
          >
            <v-virtual-scroll
              :height="300"
              :items="books"
              class="overflow-y-auto"
            >
              <template v-slot:default="{ book }">
                
              <!-- <v-list
                   item-props
                   lines="two"
                   class="overflow-y-auto"
                   > -->

              
              <v-list-item
                v-for="book in books"
                :key="book.id"
              >
                <template v-slot:prepend>
                  <img class="pr-4" height="75" :src="book.imageUrl" />
                </template>
                
                <v-list-item-title class="font-weight-bold">{{ book.title }}</v-list-item-title>
                <v-list-item-subtitle class="font-weight-bold">
                  {{ language(book) }} - {{ book.pages }} pages
                  <br/>
                  <v-rating
                    length="5"
                    v-model="book.ratingAverage"
                    active-color="primary"
                    color="primary"
                    density="compact"
                    size="small"
                    readonly
                    half-increments
                    item-aria-label="`Book rating: ${book.ratingAverage} out of 5`"
                  />
                </v-list-item-subtitle>
                
                <template v-slot:append>
                  <v-btn size="small">
                    Add to list
                  </v-btn>
                </template>
              </v-list-item>
              </template>
              </v-virtual-scroll>
              <!-- </v-list> -->
      
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useBookStore } from "../store/books";

const store = useBookStore();

const books = computed(() => {
  return store.books;
});

const languages = {"EN": "English", "SP": "Spanish"};
const language = (book) => {
  return languages[book?.language] || "(Unknown language)";
};

onMounted(() => {
  store.fetchBooks();
});
</script>

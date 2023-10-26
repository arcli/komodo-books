<template>
  <v-container class="pl-0">
    <v-row>
      <v-col cols="12">
        <h1>My Lists</h1>
      </v-col>
    </v-row>

    <v-row
      v-for="list in lists"
      :key="list.id"
    >
      <v-col cols="12">
        <h3>{{list.name}}</h3>
        <BookList :books="list.books" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useListStore } from "../store/lists";
import BookList from "@/components/BookList.vue";

const store = useListStore();

const lists = computed(() => {
  return store.lists;
});

onMounted(() => {
  store.fetchLists();
});
</script>

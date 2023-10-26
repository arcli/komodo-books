<template>
  MY LISTS
  <!-- <v-container>
       <v-row
       v-for="list in lists"
       :key="list.id"
       >
       <v-col
       class="mt-2"
       cols="12"
       >
       <h2>My Books</h2>
       </v-col>
       </v-row>

       <v-list-item
       v-for="list in lists"
       :key="list.id"
       >
       {{ list.name }}
       </v-list-item>
       </template>
       </v-virtual-scroll> -->
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useListStore } from "../store/lists";

const store = useListStore();

const lists = computed(() => {
  return store.lists;
});

onMounted(() => {
  store.fetchLists();
});
</script>

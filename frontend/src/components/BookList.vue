<template>
  <v-sheet class="d-flex flex-wrap justify-start align-content-start pb-4" :class="{ horizontal: horizontal }">
    <template v-for="book in books">
      <BookCard
        :book="book"
        :showAddToList="showAddToList"
        @popAddToList="(...args) => $emit('popAddToList', ...args)"/>
    </template>
  </v-sheet>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import BookCard from "@/components/BookCard.vue";
import type { Book } from "@prisma/client";

const props = defineProps<{books: Book[], showAddToList?: boolean, horizontal?: boolean}>();
const emit = defineEmits(['popAddToList']);
</script>

<style>
.horizontal {
  height: 300px;
  overflow-x: auto;
  flex-direction: column;
}
</style>

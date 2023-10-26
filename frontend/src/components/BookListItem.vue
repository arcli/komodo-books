<template>
      <v-list-item>
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

<script lang="ts" setup>
import type { Book } from "@prisma/client";

const props = defineProps<{book?: Book}>();

const languages = {"EN": "English", "SP": "Spanish"};
const language = (book:Book):string => {
  return languages[book?.language] || "(Unknown language)";
};
</script>

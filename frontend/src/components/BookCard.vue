<template>
  <v-card
    class="ml-4 mt-4"
    width="200"
    color="#eee"
  >
    <v-avatar
      class="ma-0 mt-4 pa-0"
      size="150"
      rounded="0"
    >
      <v-img :src="book.imageUrl"></v-img>
    </v-avatar>

    <div>
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <v-card-title
              class="text-h6"
              v-bind="props">
              {{ book.title }}
            </v-card-title>
          </template>
          <span>{{ book.title }}</span>
        </v-tooltip>

      <v-card-subtitle>
        {{ language(book) }}, {{ book.pages }} pages
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
      </v-card-subtitle>

      <v-card-actions
        v-if="showAddToList"
      >
        <v-btn
          class="ms-2"
          variant="outlined"
          size="small"
          @click="$emit('popAddToList', book.id, book.title)"
        >
          Add To List
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>

</template>

<script lang="ts" setup>
import type { Book } from "@prisma/client";

const props = defineProps<{book: Book, showAddToList?: boolean}>();
const emit = defineEmits(['popAddToList']);

const languages = {"EN": "English", "SP": "Spanish"};
const language = (book:Book):string => {
  return languages[book?.language] || "Unknown";
};
</script>

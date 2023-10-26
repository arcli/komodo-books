<template>
  <v-virtual-scroll
    :height="300"
    :items="books"
    class="overflow-y-auto"
  >
    <template v-slot:default="{ item }">
      <BookListItem :book="item"/>
    </template>
  </v-virtual-scroll>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import BookListItem from "@/components/BookListItem.vue";
import type { Book } from "@prisma/client";

// const props = defineProps(['books'])
const props = defineProps<{books?: Book[]}>();
</script>

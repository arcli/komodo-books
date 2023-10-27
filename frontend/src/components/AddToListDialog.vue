<template>
  <v-dialog
    scrollable
    width="auto"
  >
    <v-card>
      <v-card-title class="px-6 bg-primary">Add to list</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        Choose a list for<br/>
        <b>{{ bookName }}</b>
      </v-card-text>
      <v-card-text style="width: 400px;">
        <v-combobox
          v-model="select"
          :items="listNames"
          label="Select a list or type a new name"
          class="pb-0 mb-0"
          dense
        ></v-combobox>
      </v-card-text>
      <v-card-actions class="mx-4 mb-2 mt-0 pt-0">
        <v-spacer></v-spacer>
        <v-btn
          color="grey"
          @click="$emit('addToListDone')"
        >
          Cancel
        </v-btn>
        <v-btn
          color="primary"
          variant="tonal"
          @click="$emit('addToListDone', select)"
          :disabled="select == null"
        >
          Add
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Book, List } from "@prisma/client";

const props = defineProps(['listNames', 'bookName']);
const emit = defineEmits(['addToListDone']);

const select = ref(undefined);
</script>

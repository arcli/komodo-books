<template>
  <v-app>
    <v-layout full-height>
      <v-app-bar>
        <v-app-bar-title>
          <v-container class="px-0 ma-0">
            <v-row>
              <v-col class="mt-2" cols="2">
                <img width="150" src="komodoLogoBlue.svg" />
              </v-col>
              <v-col class="mt-2" cols="9">
                <span class="pl-5 text-h5">Books</span>
              </v-col>
            </v-row>
          </v-container>
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
          <router-link to="/" exact class="navlink">
            <v-list-item prepend-icon="mdi-bookshelf" title="My Books" value="books"></v-list-item>
          </router-link>
          <router-link to="/lists" class="navlink">
            <v-list-item prepend-icon="mdi-playlist-star" title="My Lists" value="lists"></v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style>
.navlink {
  color: white;
  text-decoration: none;
}
</style>

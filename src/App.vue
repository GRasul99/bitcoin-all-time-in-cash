<template>
  <v-app>
    <v-app-bar app color="#070326" dark>
      <v-toolbar-title class="title text-uppercase">
        <v-btn text class="title pointer align-center toolbar">All time in cash </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/" class="toolbar-btn">Home</v-btn>
      <v-btn text to="/purchase" class="toolbar-btn" >Purchase</v-btn>
      <v-btn text to="/settings" class="toolbar-btn">Settings</v-btn>
      <v-btn
        text
        to="/auth"
        class="toolbar-btn"
      >Auth</v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>

<style>
#app {
  font-family: sans-serif;
  background-color: #000050;
  color: #eceae4;
}
.pointer {
  color: #eceae4;
  cursor: pointer;
}
@font-face {
  font-display: fallback;
}
</style>

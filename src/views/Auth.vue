<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12" md="8" sm="10" xs="12">
        <v-card
          elevation="24"
          dark
          color="#000075"
        >
          <v-toolbar
            color="#070326"
            flat
          >
            <h2 class="headline mx-5 text-uppercase">Registration</h2>
          </v-toolbar>
          <v-form class="mx-5 px-5">
            <v-text-field
              class="mt-5"
              type="text"
              required
              label="First name"
              color="indigo lighten-2"
            >
            </v-text-field>
            <v-text-field
              type="text"
              required
              label="Last name"
              color="indigo lighten-2"
            >
            </v-text-field>
            <v-text-field
              type="email"
              required
              label="E-mail"
              color="indigo lighten-2"
            >
            </v-text-field>
            <v-text-field
              type="password"
              required
              label="Password"
              color="indigo lighten-2"
            >
            </v-text-field>
            <v-text-field
              type="password"
              required
              label="Confirm password"
              color="indigo lighten-2"
            >
            </v-text-field>
            <div class="my-2 text-center pb-5">
              <v-btn tile color="#070326" dark>Submit</v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.headline {
  color: #eceae4;
}
</style>

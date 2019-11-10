<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        xs="8"
        sm="9"
        md="3"
        cols="12"
      >
        <v-card
          color="#000075"
          dark
        >
          <v-toolbar
            color="#070326"
            flat
          >
            <p
              class="text-center headline"
            >Your Power (?)
            </p></v-toolbar>
            <p class="text-center mx-2 my-3 display-1">1.201 TH/s</p>
          <v-toolbar
            color="#070326"
            flat>
            <p class="text-center headline">Getted Profit (?)</p>
          </v-toolbar>
            <p class="text-center mx-2 my-1 display-1">1.201 BTC</p>
          <v-card-actions class="text-center">
            <v-btn text class="my-2">Invest</v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          color="#000075"
          dark
          class="mt-5"
        >
          <v-toolbar
            color="#070326"
            flat>
            <p class="text-center headline">Wallet Balance</p>
          </v-toolbar>
            <p class="text-center mx-2 my-1 display-1">1.201 TH/s</p>
          <v-card-actions class="text-center">
            <v-btn text class="my-2">Invest</v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          color="#000075"
          dark
          class="mt-5"
        >
          <v-toolbar
            color="#070326"
            flat
          >
            <p class="text-center headline">Course</p>
          </v-toolbar>
            <p class="text-center mx-2 my-1 display-1">1.201 TH/s</p>
          <v-card-actions class="text-center">
            <v-btn text class="my-2">Invest</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        xs="8"
        sm="9"
        md="9"
        cols="12"
      >
        <v-card
          color="#000075"
          dark
        >
          <v-toolbar
            color="#070326"
            flat
          >
            <p class="text-center headline">Bitcoin course chart</p>
          </v-toolbar>
          <BitcoinChart />
        </v-card>
        <v-card
          color="#000075"
          dark
          class="mt-5"
        >
          <v-toolbar
            color="#070326"
            flat
          >
            <p class="text-center headline">Schedule of project profitability</p>
          </v-toolbar>
          <ProjectProfit />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BitcoinChart from '../components/BitcoinChart/BitcoinChart.vue'
import ProjectProfit from '../components/ProjectProfit'
export default {
  components: {
    ProjectProfit,
    BitcoinChart
  }
}
</script>

<template>
  <section>
    <v-container class="mt-4">
      <div class="headline mb-2">Список кораблей</div>
      <v-sheet elevation="1">
        <v-container>
          <starships-search @search="fetchShips" />
          <starships-table :ships="starshipsData.results" :isLoading="isLoading" />
          <div class="d-flex justify-end mt-4">
            <v-btn
              color="primary"
              class="mx-2"
              @click="fetchShips(paginationInfo.prev)"
              :disabled="!paginationInfo.prev"
            >
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              class="mx-2"
              @click="fetchShips(paginationInfo.next)"
              :disabled="!paginationInfo.next"
            >
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </div>
        </v-container>
      </v-sheet>
    </v-container>
    <snackbar :snackbar="snackbar" @close="snackbar.vis = false" />
  </section>
</template>

<script>
import snackbarMixin from "@/mixins/snackbar";
export default {
  name: "main-starships",
  mixins: [snackbarMixin],
  created() {
    this.fetchShips();
  },
  data() {
    return {
      starshipsData: [],
      tablePage: 0,
      isLoading: false
    };
  },
  methods: {
    async fetchShips(page) {
      this.isLoading = true;
      try {
        let { data } = await this.$axios.get("starships", {
          params: {
            search: this.$route.query.search,
            page
          }
        });
        this.starshipsData = data;
      } catch (e) {
        this.snackbarError("во время загрузки произошла ошибка");
      }
      this.isLoading = false;
    }
  },
  computed: {
    paginationInfo() {
      return {
        prev: this.starshipsData.previous
          ? this.starshipsData.previous.split("page=")[1]
          : null,
        next: this.starshipsData.next
          ? this.starshipsData.next.split("page=")[1]
          : null
      };
    }
  },
  components: {
    starshipsTable: () => import("@/components/starshipsTable.vue"),
    starshipsSearch: () => import("@/components/starshipsSearch.vue"),
    snackbar: () => import("@/components/snackbar.vue")
  }
};
</script>

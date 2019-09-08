<template>
  <section>
    <v-container class="mt-4">
      <div class="headline mb-2">Информация о корабле "{{shipData.name}}"</div>
      <v-sheet elevation="1">
        <v-container>
          <v-row>
            <v-col md="4">Параметр</v-col>
            <v-col md="6">Значение</v-col>
          </v-row>
          <v-divider />
          <v-row v-for="(value, key) in shipData" :key="key">
            <v-col md="4">{{key}}</v-col>
            <v-col md="8">{{value}}</v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-container>
    <snackbar :snackbar="snackbar" @close="snackbar.vis = false" />
  </section>
</template>

<script>
import snackbarMixin from "@/mixins/snackbar";
export default {
  name: "ship-page",
  mixins: [snackbarMixin],
  async created() {
    try {
      let { data } = await this.$axios.get(
        `starships/${this.$route.params.id}/`
      );
      this.shipData = data;
    } catch (e) {
      this.snackbarError("во время загрузки произошла ошибка");
    }
  },
  data() {
    return {
      shipData: {}
    };
  },
  components: {
    snackbar: () => import("@/components/snackbar.vue")
  }
};
</script>
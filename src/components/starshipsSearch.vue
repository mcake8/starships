<template>
  <v-form @submit.prevent="handleSearch">
    <v-row align="center">
      <v-col md="4">
        <v-text-field label="Поиск" prepend-icon="search" v-model="searchQuery" />
      </v-col>
      <v-col md="2">
        <v-btn color="primary" type="submit">Найти</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "starships-search",
  data() {
    return {
      searchQuery: this.$route.query.search
    };
  },
  methods: {
    handleSearch() {
      if (this.$route.query.search !== this.searchQuery) {
        this.$router.push({
          path: "/",
          query: {
            search: this.searchQuery
          }
        });
      }
      this.$emit("search");
    }
  }
};
</script>
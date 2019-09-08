<template>
  <section>
    <v-data-table
      :headers="headers"
      :items="ships"
      hide-default-footer
      :items-per-page="-1"
      :loading="isLoading"
    >
      <template v-slot:body="{items}">
        <tbody>
          <tr v-for="(item,index) in items" :key="index" @click="redirectToItem(item.url)">
            <td>{{item.name}}</td>
            <td>{{item.model}}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </section>
</template>

<script>
export default {
  name: "starships-table",
  props: ["ships", "isLoading"],
  data() {
    return {
      headers: [
        {
          text: "Имя",
          value: "name"
        },
        {
          text: "Модель",
          value: "model"
        }
      ]
    };
  },
  methods: {
    redirectToItem(url) {
      this.$router.push(`/${url.split("/")[5]}`);
    }
  }
};
</script>
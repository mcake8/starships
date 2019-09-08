<template>
  <v-snackbar
    v-model="snackbar.vis"
    bottom
    right
    :color="snackbar.color"
    multi-line="multi-line"
    :timeout="3000"
  >
    {{ snackbar.text }}
    <v-btn dark text @click="$emit('close')">Закрыть</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "snackbar",
  props: ["snackbar"]
};
</script>
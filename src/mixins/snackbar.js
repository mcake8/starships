export default {
  data() {
    return {
      snackbar: {
        vis: false,
        color: "primary",
        text: ""
      }
    };
  },
  methods: {
    snackbarSucces(text) {
      this.snackbar = {
        vis: true,
        color: "primary",
        text: text
      };
    },
    snackbarError(text) {
      this.snackbar = {
        vis: true,
        color: "red",
        text: text
      };
    }
  }
};

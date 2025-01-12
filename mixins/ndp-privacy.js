export default {
  methods: {
    generateCatalog() {
      let titles = [];
      this.$nextTick(() => {
        const $heading = $("h3");
        for (let i = 0; i < $heading.length; i++) {
          titles.push({
            id: $heading[i].id,
            title: $heading[i].innerHTML,
          });
        }
        console.log(titles);
        this.$store.commit("SET_CATALOGS", titles);
      });
    },
  },
  mounted() {
    this.generateCatalog();
  },
};

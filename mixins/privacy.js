export default {
  methods: {
    generateCatalog() {
      let titles = [];
      this.$nextTick(() => {
        const $heading = $(".section-heading");
        const $children = $heading.children();
        for (let i = 0; i < $children.length; i++) {
          titles.push({
            id: i,
            title: $children[i].innerHTML,
          });
        }
        this.$store.commit("SET_CATALOGS", titles);
      });
    },
    attrDataIndex() {
      this.$nextTick(() => {
        const $sections = $(".section-container");
        $sections.each(function (i) {
          $(this).attr("data-index", i);
        });
      });
    },
  },
  mounted() {
    this.attrDataIndex();
    this.generateCatalog();
  },
};

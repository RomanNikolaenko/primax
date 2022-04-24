<template>
  <main class="main">
    <SectionHeader v-if="header.data" :header="header" />
    <SliceZone :slices="page.data.slices" :components="components" />
    <SectionFooter v-if="footer.data" :footer="footer" />
  </main>
</template>

<script>
import { components } from "~/slices";

import SectionFooter from "../components/SectionFooter.vue";
import SectionHeader from "../components/SectionHeader.vue";

export default {
  components: { SectionHeader, SectionFooter },

  data() {
    return {
      components,
    };
  },

  computed: {
    header() {
      return this.$store.state.prismic.header;
    },
    footer() {
      return this.$store.state.prismic.footer;
    },
  },

  async asyncData({ $prismic, params, store, i18n }) {
    const lang = i18n.locale;
    const page = await $prismic.api.getByUID("page", params.uid, { lang });
    await store.dispatch("prismic/load", { lang, page });
    return {
      page,
    };
  },

  methods: {
    scrollHandle() {
      const body = document.body;
      const sections = document.querySelectorAll("section");

      if (window.scrollY > 0) {
        body.classList.add("fix");
      } else {
        body.classList.remove("fix");
        body.classList.remove("scroll");
      }

      for (let index = 0; index < sections.length; index++) {
        const element = sections[index];

        if (
          window.scrollY > element.offsetTop &&
          element.classList.contains("white-block")
        ) {
          body.classList.add("scroll");
        } else if (
          window.scrollY > element.offsetTop &&
          !element.classList.contains("white-block")
        ) {
          body.classList.remove("scroll");
        }
      }
    },

    changeHeight() {
      let vh = window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },

  mounted() {
    this.scrollHandle();

    this.$nextTick(function () {
      window.addEventListener("scroll", this.scrollHandle);
      window.addEventListener("resize", this.changeHeight);
    });
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandle);
    window.removeEventListener("resize", this.changeHeight);
  },

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>


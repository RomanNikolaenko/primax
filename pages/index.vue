<template>
  <main class="main">
    <SectionHeader :data="header.data" />
    <SectionHeroHome :data="heroHome.data" />
    <slice-zone :components="components" :slices="document.data.slices" />
    <SectionFooter :data="footer.data" />
  </main>
</template>

<script>
import { components } from "~/slices";
import SectionFooter from '../components/SectionFooter.vue';
import SectionHeader from '../components/SectionHeader.vue';
import SectionHeroHome from '../components/SectionHeroHome.vue';

export default {
  components: { SectionHeader, SectionHeroHome, SectionFooter },
  data() {
    return {
      components,
    };
  },

  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("homePage", "homepage", {
      lang: params.lang,
    });

    const header = await $prismic.api.getByUID(
      "SectionHeader",
      "sectionheader",
      { lang: params.lang }
    );

    const footer = await $prismic.api.getByUID(
      "SectionFooter",
      "sectionfooter",
      { lang: params.lang }
    );

    const heroHome = await $prismic.api.getByUID(
      "SectionHeroHome",
      "sectionherohome",
      { lang: params.lang }
    );

    if (document && header && footer && heroHome) {
      return { document, header, footer, heroHome };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
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

      if (window.innerWidth >= 576) {
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
      } else {
        body.classList.remove("scroll");
      }
    },

    changeSelect(val) {
      console.log("sfesd");
    },
  },

  mounted() {
    this.scrollHandle();

    this.$nextTick(function () {
      window.addEventListener("scroll", this.scrollHandle);
    });
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandle);
  },
};
</script>

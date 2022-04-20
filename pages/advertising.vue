<template>
  <main class="main">
    <SectionHeader :data="header" />
    <SectionHeroPage :data="heroPage.data" />
    <SectionMaximumResults class="white-block" :data="maximumResults.data" />
    <SectionForm class="white-block" :data="form.data" />
    <SliceZone :components="components" :slices="document.data.slices" />
    <SectionFooter :data="footer.data" />
  </main>
</template>

<script>
import { components } from "~/slices";
import SectionFooter from '../components/SectionFooter.vue';
import SectionForm from '../components/SectionForm.vue';
import SectionHeader from '../components/SectionHeader.vue';
import SectionHeroPage from '../components/SectionHeroPage.vue';
import SectionMaximumResults from '../components/SectionMaximumResults.vue';

export default {
  components: { SectionHeader, SectionFooter, SectionHeroPage, SectionMaximumResults, SectionForm },
  data() {
    return {
      components,
    };
  },

  async asyncData({ $prismic, error }) {
    const language = localStorage.getItem("language");

    const document = await $prismic.api.getByUID("advertisingPage", "advertisingpage", {
      lang: language,
    });

    const header = await $prismic.api.getByUID(
      "SectionHeader",
      "sectionheader",
      { lang: language }
    );

    const footer = await $prismic.api.getByUID(
      "SectionFooter",
      "sectionfooter",
      { lang: language }
    );

    const heroPage = await $prismic.api.getByUID(
      "SectionHeroPage",
      "sectionheropage",
      { lang: language }
    );

    const maximumResults = await $prismic.api.getByUID(
      "SectionMaximumResults",
      "sectionmaximumresults",
      { lang: language }
    );

    const form = await $prismic.api.getByUID(
      "SectionForm",
      "sectionform",
      { lang: language }
    );

    if (document && header && footer, heroPage, maximumResults, form) {
      return { document, header, footer, heroPage, maximumResults, form };
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
      // console.log("sfesd");
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

<template>
  <section class="hero">
    <div class="hero_container">
      <div class="hero_left">
        <!-- <HeroLinks :listLinks="listLinks" /> -->
        <div class="sd"></div>

        <div class="hero_content">
          <h2 class="hero_content-title">{{ slice.primary.title }}</h2>
          <p class="hero_content-subtitle">{{ slice.primary.subtitle }}</p>

          <div class="hero_content-btns">
            <PrismicLink class="link orangeBg" :field="slice.primary.linkBg">{{
              slice.primary.linkBgTitle
            }}</PrismicLink>
            <PrismicLink
              class="link whiteBorder"
              :field="slice.primary.linkBg"
              >{{ slice.primary.linkBorderTitle }}</PrismicLink
            >
          </div>
        </div>
      </div>

      <div class="hero_right">
        <PrismicImage
          v-if="!device"
          :field="slice.primary.imgDesc"
          width="885"
          height="497"
        />
        <PrismicImage
          v-if="device"
          :field="slice.primary.imgMob"
          width="365"
          height="270"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionHeroHome",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  data() {
    return {
      device: false,
    };
  },

  methods: {
    resizeHandle() {
      if (window.innerWidth <= 768) {
        this.device = true;
      } else {
        this.device = false;
      }
    },
  },

  mounted() {
    this.resizeHandle();

    this.$nextTick(function () {
      window.addEventListener("resize", this.resizeHandle);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandle);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.hero {
  @include property("padding-top", 200, 80);
  @include property("padding-bottom", 300, 80);
  background-image: url("./static/resultsBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position-y: center;
  min-height: 100vh;

  &_container {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 70px 35px;
    max-width: 1880px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1365.98px) {
      grid-template-columns: 1fr;
    }
  }

  &_left {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 47px;

    @media (max-width: 1365.98px) {
      grid-template-columns: 1fr;
    }
  }

  &_right {
    display: flex;
    align-items: center;
    max-height: 558px;
    height: 100%;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  &_content {
    &-title {
      font-weight: 600;
      font-size: 64px;
      line-height: 110%;
      margin-bottom: 30px;

      @media (max-width: 767.98px) {
        font-size: 40px;
        margin-bottom: 20px;
      }
    }

    &-subtitle {
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      margin-bottom: 30px;

      @media (max-width: 767.98px) {
        font-size: 18px;
        line-height: 150%;
        margin-bottom: 10px;
      }
    }

    &-btns {
      display: flex;
      margin: 0 -10px;

      @media (max-width: 576px) {
        flex-wrap: wrap;
      }

      > * {
        margin: 20px 10px 0;
      }
    }
  }
}
</style>

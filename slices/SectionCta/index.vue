<template>
  <section class="cta">
    <div class="cta_wrap">
      <h2 class="cta_title">{{ slice.primary.title }}</h2>
      <PrismicLink class="link orangeBg" :field="slice.primary.link">{{
        slice.primary.linkTitle
      }}</PrismicLink>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionCta",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.cta {
  display: flex;
  background-image: url("./static/ctaBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  box-shadow: 10px 20px 60px rgba(47, 128, 237, 0.2);
  min-height: 640px;
  padding: 150px 30px;

  @media (orientation: portrait) {
    background-image: url("./static/ctaBgMob.svg"),
      linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
    background-position: bottom center;
  }

  &_wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    border: 7px solid rgba(255, 255, 255, 0.3);
    filter: drop-shadow(10px 20px 60px rgba(47, 128, 237, 0.2));
    border-radius: 50px;
    padding: 150px 180px;
    @include property("padding-left", 180, 50, false, 1640, 1024);
    @include property("padding-right", 180, 50, false, 1640, 1024);
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1023.98px) {
      border: none;
      padding: 50px 0;
    }
  }

  &_title {
    font-weight: 600;
    font-size: 50px;
    line-height: 110%;
    text-align: center;
    margin-bottom: 40px;

    @media (max-width: 767.98px) {
      font-size: 24px;
    }
  }
}
</style>

<template>
  <section class="cta">
    <div class="cta_wrap">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        :field="slice.primary.title"
        class="cta_title"
      />
      <PrismicLink
        :field="slice.primary.link"
        class="link orangeBg"
        >{{ slice.primary.linkTitle }}</PrismicLink
      >
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
  @include property("padding-top", 150, 80);
  @include property("padding-bottom", 150, 80);
  @include property("padding-left", 30, 0);
  @include property("padding-right", 30, 0);

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
    @include property("padding-top", 140, 100);
    @include property("padding-bottom", 140, 100);
    @include property("padding-left", 180, 20);
    @include property("padding-right", 180, 20);
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1023.98px) {
      border: 5px solid rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 575.98px) {
      border: none;
    }
  }

  &_title {
    font-weight: 600;
    @include property("font-size", 50, 22);
    line-height: 110%;
    text-align: center;
    @include toRem("margin-bottom", 40);
  }
}
</style>

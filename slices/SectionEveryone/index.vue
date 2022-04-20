<template>
  <section class="everyone white-block">
    <div class="everyone_container">
      <h2 class="everyone_title">{{ slice.primary.title }}</h2>
      <p class="everyone_subtitle">{{ slice.primary.subtitle }}</p>
      <div class="everyone_btns">
        <PrismicLink class="link orangeBg" :field="slice.primary.linkBg">{{
          slice.primary.linkBgTitle
        }}</PrismicLink>
        <PrismicLink
          class="link orangeBorder"
          :field="slice.primary.linkBorder"
          >{{ slice.primary.linkBorderTitle }}</PrismicLink
        >
      </div>
      <div class="everyone_wrap">
        <PrismicImage :field="slice.primary.img" width="1411" height="766" />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionEveryone",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.everyone {
  @include toRem("padding-top", 150);
  @include toRem("padding-bottom", 160);

  @media (max-width: 767.98px) {
    @include toRem("padding-top", 80);
    @include toRem("padding-bottom", 80);
  }

  &_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1480px;
    padding: 0;
    @include toRem("padding-left", 20);
    @include toRem("padding-right", 20);
    margin: 0 auto;
  }

  &_title {
    font-weight: 600;
    @include toRem("font-size", 50);
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    @include toRem("margin-bottom", 30);
    max-width: 546px;

    @media (max-width: 767.98px) {
      @include toRem("font-size", 24);
      @include toRem("margin-bottom", 20);
    }
  }

  &_subtitle {
    font-weight: 600;
    @include toRem("font-size", 20);
    line-height: 160%;
    text-align: center;
    color: var(--secondary);
    @include toRem("margin-bottom", 50);
    max-width: 588px;

    @media (max-width: 767.98px) {
      @include toRem("font-size", 18);
      @include toRem("margin-bottom", 30);
    }
  }

  &_wrap {
    border: 7px solid #ededff;
    box-shadow: 13.4163px 22.3604px 49.193px rgba(0, 56, 97, 0.1);
    border-radius: 50px;
    @include toRem("padding", 25);
    padding-bottom: 0;
    @include toRem("margin-top", 55);

    @media (max-width: 767.98px) {
      @include toRem("margin-top", 30);
      @include toRem("padding", 5);
      border-width: 5px;
      box-shadow: 11.6224px 19.3707px 42.6156px rgba(0, 0, 0, 0.1);
      border-radius: 5px 5px 0;
    }
  }

  &_btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    @include toRem("margin-left", -15);
    @include toRem("margin-right", -15);

    > * {
      margin: 0;
      @include toRem("margin-left", 15);
      @include toRem("margin-right", 15);
      @include toRem("margin-bottom", 20);
    }
  }
}
</style>
<template>
  <section class="everyone white-block">
    <div class="everyone_container">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        :field="slice.primary.title"
        class="everyone_title"
      />

      <PrismicRichText
        v-if="$prismic.asText(slice.primary.subTitle)"
        :field="slice.primary.subTitle"
        class="everyone_subtitle"
      />

      <div class="everyone_btns">
        <PrismicLink
          v-if="$prismic.asLink(slice.primary.linkBg)"
          :field="slice.primary.linkBg"
          class="link orangeBg"
          >{{ slice.primary.linkBgTitle }}</PrismicLink
        >
        <PrismicLink
          v-if="$prismic.asLink(slice.primary.linkBorder)"
          :field="slice.primary.linkBorder"
          class="link orangeBorder"
          >{{ slice.primary.linkBorderTitle }}</PrismicLink
        >
      </div>
      <div class="everyone_wrap">
        <PrismicImage
          v-if="slice.primary.img.url"
          :field="slice.primary.img"
          width="1411"
          height="766"
        />
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

<style lang="scss">
@import "@/assets/scss/mixins";

.everyone {
  @include property('padding-top', 150, 80);
  @include property('padding-bottom', 160, 80);

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
    @include property('font-size', 50, 24);
    @include property('margin-bottom', 30, 20);
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    max-width: 546px;
  }

  &_subtitle {
    font-weight: 600;
    @include property('font-size', 20, 18);
    line-height: 160%;
    text-align: center;
    color: var(--secondary);
    @include property('margin-bottom', 50, 30);
    max-width: 588px;
  }

  &_wrap {
    border: 7px solid #ededff;
    box-shadow: 13.4163px 22.3604px 49.193px rgba(0, 56, 97, 0.1);
    border-radius: 50px;
    @include property('padding', 25, 5);
    padding-bottom: 0;
    @include property('margin-top', 55, 30);
    max-height: 800px;

    @media (max-width: 767.98px) {
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
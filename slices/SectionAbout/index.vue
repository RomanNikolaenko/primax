<template>
  <section class="about white-block">
    <div class="about_container">
      <div class="about_content">
        <PrismicRichText
          v-if="$prismic.asText(slice.primary.title)"
          wrapper="h2"
          :field="slice.primary.title"
          class="about_title"
        />
        <PrismicRichText
          v-if="$prismic.asText(slice.primary.subTitle)"
          :field="slice.primary.subTitle"
          wrapper="div"
          class="about_subtitle"
        />
        <div class="about_btns">
          <PrismicLink
            v-if="$prismic.asLink(slice.primary.link)"
            :field="slice.primary.link"
            class="link orangeBg"
            >{{ slice.primary.linkTitle }}</PrismicLink
          >
        </div>
      </div>

      <div class="about_image">
        <PrismicImage
          v-if="slice.primary.img.url"
          :field="slice.primary.img"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionAbout",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss" >
@import "@/assets/scss/mixins";

.about {
  @include property("padding-top", 150, 80);
  @include property("padding-bottom", 90, 80);

  &_container {
    display: grid;
    @include property("gap", 190, 50, true, 1640, 1200);
    padding-left: max(calc((20 / 18) * 1rem), calc((100% - 1640px) / 2));

    @media (min-width: 1024px) {
      grid-template-columns: calc(530px + (681 - 530) * ((100vw - 1024px) / (1640 - 1024))) 1fr;
    }

    @media (min-width: 1640px) {
      grid-template-columns: 681px 1fr;
    }

    @media (max-width: 1023.98px) {
      padding: 0 calc((20 / 18) * 1rem);
    }
  }

  &_title {
    font-weight: 600;
    @include property("font-size", 50, 22);
    line-height: 110%;
    color: var(--primary);
    @include property("margin-bottom", 30, 20);

    strong {
      font-weight: inherit;
      color: #367bff;
    }
  }

  &_subtitle {
    font-weight: 600;
    @include property("font-size", 20, 16);
    line-height: 160%;
    color: var(--secondary);
  }

  &_image {
    overflow: hidden;
    border: 7px solid #ededff;
    border-right: 0;
    box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.06);
    border-radius: 50px 0 0 50px;
    padding: 0;
    @include toRem("padding-left", 10);

    @media (max-width: 1023.98px) {
      padding: 0;
      @include toRem("padding-left", 5);
      @include toRem("padding-right", 5);
      border: 5px solid #ededff;
      box-shadow: 12.5517px 20.9194px 46.0227px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    img {
      display: block;
      object-fit: cover;
      height: 100%;
      object-position: left top;
    }
  }

  &_btns {
    @include property("margin-top", 30, 20);
  }
}
</style>

<template>
  <section class="about white-block">
    <div class="about_container">
      <div class="about_content">
        <h2 class="about_title">
          {{ slice.primary.title }} <span>{{ slice.primary.titleBlue }}</span>
        </h2>
        <p class="about_subtitle">{{ slice.primary.subtitle }}</p>
        <p class="about_subtitle">{{ slice.primary.subtitle2 }}</p>
        <div class="about_btns">
          <PrismicLink class="link orangeBg" :field="slice.primary.link">{{
            slice.primary.linkTitle
          }}</PrismicLink>
        </div>
      </div>

      <div class="about_image">
        <PrismicImage :field="slice.primary.img" width="1700" height="893" />
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

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.about {
  @include property("padding-top", 155, 80);
  @include property("padding-bottom", 90, 80);

  &_container {
    display: grid;
    gap: 190px;
    @include property("gap", 190, 50, true, 1640, 1200);
    padding-left: max(20px, calc((100% - 1640px) / 2));

    @media (min-width: 1200px) {
      grid-template-columns: 681px 1fr;
    }

    @media (max-width: 1199.98px) {
      padding: 0 20px;
    }
  }

  &_title {
    font-weight: 600;
    font-size: 50px;
    line-height: 110%;
    color: var(--primary);
    margin-bottom: 30px;

    span {
      color: #367bff;
    }

    @media (max-width: 767.98px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }

  &_subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    color: var(--secondary);

    @media (max-width: 767.98px) {
      font-size: 18px;
    }
  }

  &_image {
    overflow: hidden;
    border: 7px solid #ededff;
    border-right: 0;
    box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.06);
    border-radius: 50px 0 0 50px;
    padding: 0 0px 0 8px;

    @media (max-width: 1199.98px) {
      padding: 0 5px;
      border: 5px solid #ededff;
      box-shadow: 12.5517px 20.9194px 46.0227px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    img {
      display: block;
      margin-top: -2px;
      object-fit: cover;
      height: calc(100% + 2px);
      object-position: left top;
    }
  }

  &_btns {
    margin-top: 30px;

    @media (max-width: 767.98px) {
      margin-top: 20px;
    }
  }
}
</style>

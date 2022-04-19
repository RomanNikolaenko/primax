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
  @include property("padding-top", 150, 80);
  @include property("padding-bottom", 160, 80);

  &_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1480px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &_title {
    font-weight: 600;
    font-size: 50px;
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    margin-bottom: 30px;
    max-width: 546px;

    @media (max-width: 767.98px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }

  &_subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: var(--secondary);
    margin-bottom: 50px;
    max-width: 588px;

    @media (max-width: 767.98px) {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }

  &_wrap {
    border: 7px solid #ededff;
    box-shadow: 13.4163px 22.3604px 49.193px rgba(0, 56, 97, 0.1);
    border-radius: 50px;
    padding: 25px 25px 0;
    margin-top: 55px;

    @media (max-width: 767.98px) {
      margin-top: 30px;
      padding: 5px;
      border-width: 5px;
      box-shadow: 11.6224px 19.3707px 42.6156px rgba(0, 0, 0, 0.1);
      border-radius: 5px 5px 0;
    }
  }

  &_btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -15px;

    > * {
      margin: 0 15px 20px;
    }
  }
}
</style>
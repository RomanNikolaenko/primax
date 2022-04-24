<template>
  <section class="white-block max-results">
    <div class="max-results_container">
      <PrismicImage
        v-if="slice.primary.img.url"
        :field="slice.primary.img"
        class="max-results_img"
      />

      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        :field="slice.primary.title"
        class="max-results_title"
      />

      <div class="max-results_cards">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="max-results_card"
        >
          <PrismicRichText :field="item.lists" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionMaxResults",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.max-results {
  position: relative;
  z-index: 1;
  overflow: hidden;
  @include property("padding-top", 160, 80);
  @include property("padding-bottom", 160, 80);
  background: linear-gradient(
    128.97deg,
    rgba(255, 255, 255, 0.05) 3.54%,
    rgba(47, 128, 237, 0.05) 92.02%
  );

  &::before {
    content: "";
    position: absolute;
    width: 1104px;
    height: 1093px;
    right: 0;
    top: 100%;
    z-index: -1;
    background-image: radial-gradient(
      33.99% 24.36% at 57.38% 54.8%,
      rgba(54, 195, 255, 0.12) 0%,
      rgba(45, 185, 249, 0.008) 100%
    );
    filter: blur(20px);
    transform: translate(60%, -60%);
  }

  &::after {
    content: "";
    position: absolute;
    width: 982px;
    height: 973px;
    left: 0;
    top: 116px;
    z-index: -1;
    background-image: radial-gradient(
        41.58% 29.82% at 64.98% 54.56%,
        rgba(54, 98, 255, 0.12) 0%,
        rgba(45, 185, 249, 0.008) 100%
      );
    filter: blur(10px);
    transform: translate(-50%, 0);
  }

  &_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1720px;
    margin: 0 auto;
    padding: 0;
    @include toRem("padding-left", 20);
    @include toRem("padding-right", 20);
  }

  &_img {
    @include property("max-height", 195, 108);
  }

  &_title {
    font-weight: 600;
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    max-width: 680px;
    margin: 0 auto;
    @include property("margin-top", 50, 25);
    @include property("margin-bottom", 80, 40);
    @include property("font-size", 50, 24);

    strong {
      color: #367bff;
    }
  }

  &_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    @include property("margin-right", -20, -10, true, 1840, 1366);
    @include property("margin-left", -20, -10, true, 1840, 1366);
  }

  &_card {
    margin: 0;
    @include property("margin-right", 20, 10, true, 1840, 1366);
    @include property("margin-left", 20, 10, true, 1840, 1366);
    @include toRem("margin-bottom", 40);
    background: var(--white);
    border: 7px solid #eef6ff;
    box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.06);
    @include property("border-radius", 50, 30);
    max-width: calc(
      25% - calc(20px + (40 - 20) * ((100vw - 1366px) / (1840 - 1366)))
    );
    width: 100%;
    @include property("padding", 33, 13, true, 1840, 1024);

    @media (min-width: 1840px) {
      max-width: calc(25% - 40px);
    }

    @media (max-width: 1365.98px) {
      max-width: 330px;
      width: 100%;
    }

    .block-img {
      display: block;
      width: 70px;
      height: 70px;
      @include toRem("margin-bottom", 40);
    }

    h3 {
      font-weight: 600;
      @include property("font-size", 35, 22, true, 1840, 1024);
      @include property("margin-bottom", 20, 15);
      line-height: 110%;
      color: var(--primary);
    }

    p:not(.block-img) {
      font-weight: 600;
      @include property("font-size", 20, 16, true, 1840, 1024);
      line-height: 160%;
      color: var(--secondary);
    }
  }
}
</style>

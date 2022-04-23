<template>
  <section class="results">
    <div class="results_container container">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        wrapper="h2"
        :field="slice.primary.title"
        class="results_title"
      />

      <div class="results_cards">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="results_card"
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
  name: "SectionResults",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.results {
  @include property('padding-top', 150, 80);
  @include property('padding-bottom', 150, 80);
  background-image: url("./static/resultsBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position-y: center;

  &_title {
    font-weight: 600;
    @include property('font-size', 50, 24);
    line-height: 110%;
    text-align: center;
    margin: 0 auto;
    @include property('margin-bottom', 80, 40, true, 1640, 1024);
    max-width: 690px;
  }

  &_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    @include toRem("margin-right", -20);
    @include toRem("margin-left", -20);
  }

  &_card {
    @include property('padding-top', 50, 25, true, 1640, 1024);
    @include property('padding-bottom', 50, 25, true, 1640, 1024);
    @include property('padding-left', 40, 20, true, 1640, 1024);
    @include property('padding-right', 40, 20, true, 1640, 1024);
    background: var(--white);
    border: 7px solid #eef6ff;
    box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.05);
    @include property('border-radius', 50, 20, true, 1640, 1024);
    @include toRem("margin", 20);
    margin-top: 0;
    min-width: 300px;
    width: calc(33.333% - calc((40 / 18) * 1rem));

    @media (max-width: 1023.98px) {
      border: 5px solid #eef6ff;
    }

    @media (max-width: 575.98px) {
      min-width: 280px;
    }

    .block-img {
      display: flex;
      @include property('max-height', 250, 130, true, 1640, 1024);
      @include toRem("margin-bottom", 20);
    }

    img {
      display: block;
      object-fit: contain;
    }

    h3 {
      font-weight: 600;
      @include property('font-size', 35, 22, true, 1640, 1024);
      @include toRem("margin-bottom", 20);
      line-height: 110%;
      text-align: center;
      color: var(--primary);
    }

    p:not(.block-img) {
      font-weight: 600;
      @include property('font-size', 20, 14, true, 1640, 1024);
      line-height: 160%;
      text-align: center;
      color: var(--secondary);

      @media (max-width: 1023.98px) {
        line-height: 150%;
      }
    }
  }
}
</style>

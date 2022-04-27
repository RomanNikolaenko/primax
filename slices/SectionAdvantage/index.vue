<template>
  <section class="section advantage">
    <div class="advantage_container container">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        :field="slice.primary.title"
        class="advantage_title"
      />

      <div class="advantage_cards">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="advantage_card"
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
  name: "SectionAdvantage",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.advantage {
  @include property('padding-top', 150, 80);
  @include property('padding-bottom', 170, 80);
  background-image: url("./static/resultsBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position-y: center;

  &_title {
    font-weight: 600;
    @include property('font-size', 50, 24);
    @include property('margin-bottom', 70, 30);
    line-height: 110%;
    text-align: center;
    white-space: pre-line;
  }

  &_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    @include property('margin-left', -20, -10, true, 1640, 1024);
    @include property('margin-right', -20, -10, true, 1640, 1024);
  }

  &_card {
    background: rgba(255, 255, 255, 0.1);
    border: 7px solid #eef6ff;
    box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.05);
    @include property('border-radius', 50, 25);
    @include property('padding-top', 50, 30, true, 1640, 1024);
    @include property('padding-bottom', 50, 30, true, 1640, 1024);
    @include property('padding-right', 40, 20, true, 1640, 1024);
    @include property('padding-left', 40, 20, true, 1640, 1024);

    @include property('margin-left', 20, 10, true, 1640, 1024);
    @include property('margin-right', 20, 10, true, 1640, 1024);
    @include property('margin-bottom', 42, 20, true, 1640, 1024);
    max-width: 530px;
    width: calc(33.333% - calc(20px + (40 - 20) * ((100vw - 1024px) / (1640 - 1024))));

    @media (max-width: 1024px) {
      width: calc(33.333% - 20px);
      min-width: 300px;
    }

    @media (min-width: 1640px) {
      width: calc(33.333% - 40px);
    }

    @media (max-width: 575.98px) {
      width: 100%;
      min-width: auto;
      max-width: 335px;
    }

    h3 {
      font-weight: 600;
      line-height: 110%;
      text-align: center;
      color: var(--white);
      @include property('font-size', 35, 22, true, 1640, 1024);
      @include property('margin-bottom', 20, 15);
    }

    p {
      font-weight: 600;
      @include property('font-size', 20, 14, true, 1640, 1024);
      line-height: 160%;
      text-align: center;
      color: var(--white);
    }
  }
}
</style>

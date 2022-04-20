<template>
  <section class="advantage">
    <div class="advantage_container container">
      <h2 class="advantage_title">{{ slice.primary.title }}</h2>

      <div class="advantage_cards">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="card"
        >
          <h3 class="card_title">{{ item.title }}</h3>
          <p class="card_text">{{ item.text }}</p>
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

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.advantage {
  @include toRem("padding-top", 150);
  @include toRem("padding-bottom", 170);
  background-image: url("./static/resultsBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position-y: center;

  @media (max-width: 767.98px) {
    @include toRem("padding-top", 80);
    @include toRem("padding-bottom", 80);
  }

  &_title {
    font-weight: 600;
    text-align: center;
    @include toRem("margin-bottom", 70);
    white-space: pre-line;

    @media (max-width: 767.98px) {
      @include toRem("font-size", 24);
      @include toRem("margin-bottom", 30);
    }
  }

  &_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    @include toRem("margin-left", -20);
    @include toRem("margin-right", -20);
  }
}

.card {
  background: rgba(255, 255, 255, 0.1);
  border: 7px solid #eef6ff;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  @include toRem("padding-top", 50);
  @include toRem("padding-bottom", 50);
  @include toRem("padding-right", 40);
  @include toRem("padding-left", 40);
  @include toRem("margin", 20);
  margin-top: 0;
  max-width: 530px;
  width: calc(33.333% - calc((40 / 18) * 1rem));

  @media (max-width: 1366px) {
    width: calc(50% - calc((40 / 18) * 1rem));
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 767.98px) {
    @include toRem("padding-top", 30);
    @include toRem("padding-bottom", 30);
    @include toRem("padding-right", 20);
    @include toRem("padding-left", 20);
  }

  &_title {
    font-weight: 600;
    line-height: 110%;
    text-align: center;
    color: var(--white);
    @include toRem("font-size", 35);
    @include toRem("margin-bottom", 20);

    @media (max-width: 767.98px) {
      @include toRem("font-size", 22);
      @include toRem("margin-bottom", 15);
    }
  }

  &_text {
    font-weight: 600;
    @include toRem("font-size", 20);
    line-height: 160%;
    text-align: center;
    color: var(--white);

    @media (max-width: 767.98px) {
      @include toRem("font-size", 18);
    }
  }
}
</style>

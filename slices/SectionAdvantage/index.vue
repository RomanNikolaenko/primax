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
  @include property("padding-top", 150, 80);
  @include property("padding-bottom", 170, 80);
  background-image: url("./static/resultsBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position-y: center;

  &_title {
    font-weight: 600;
    font-size: 50px;
    line-height: 110%;
    text-align: center;
    margin-bottom: 70px;
    white-space: pre-line;

    @media (max-width: 767.98px) {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }

  &_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -20px;
  }
}

.card {
  background: rgba(255, 255, 255, 0.1);
  border: 7px solid #eef6ff;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  padding: 50px 40px;
  margin: 0 20px 20px;
  max-width: 530px;
  width: calc(33.333% - 40px);

  @media (max-width: 1366px) {
    width: calc(50% - 40px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 767.98px) {
    padding: 30px 20px;
  }

  &_title {
    font-weight: 600;
    font-size: 35px;
    line-height: 110%;
    text-align: center;
    color: var(--white);
    margin-bottom: 20px;

    @media (max-width: 767.98px) {
      font-size: 22px;
      margin-bottom: 15px;
    }
  }

  &_text {
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: var(--white);

    @media (max-width: 767.98px) {
      font-size: 18px;
    }
  }
}
</style>

<template>
  <section class="results">
    <div class="results_container container">
      <h2 class="results_title">{{ slice.primary.title }}</h2>

      <div class="results_cards">
        <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="card">
          <PrismicImage :field="item.img" width="250" height="250" />
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
  name: "SectionResults",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.results {
  @include property("padding-top", 150, 80);
  @include property("padding-bottom", 150, 80);
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
    margin: 0 auto;
    margin-bottom: 80px;
    max-width: 690px;

    @media (max-width: 767.98px) {
      font-size: 24px;
      margin-bottom: 40px;
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
  padding: 50px 40px;
  background: var(--white);
  border: 7px solid #eef6ff;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  margin: 0 20px 20px;
  width: calc(33.333% - 40px);

  @media (max-width: 1366px) {
    width: calc(50% - 40px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 767.98px) {
    padding: 30px 30px 50px;
    border: 5px solid #eef6ff;
    border-radius: 20px;
  }

  img {
    display: block;
    margin: 0 auto;
    max-height: 250px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  &_title {
    font-weight: 600;
    font-size: 35px;
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    margin-bottom: 20px;

    @media (max-width: 767.98px) {
      font-size: 22px;
    }
  }

  &_text {
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: var(--secondary);

    @media (max-width: 767.98px) {
      font-size: 18px;
      line-height: 150%;
    }
  }
}
</style>

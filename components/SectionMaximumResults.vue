<template>
  <section class="results">
    <div class="results_container">
      <PrismicImage
        class="results_img"
        width="308"
        height="195"
        :field="data.img"
      />
      <h2 class="results_title">
        {{ data.title1 }} <span>{{ data.title2 }}</span> {{ data.title3 }}
      </h2>

      <div class="results_cards">
        <div
          class="results_card"
          v-for="(item, index) in data.card"
          :key="index"
        >
          <PrismicImage class="results_card-img" :field="item.img" />
          <h3 class="results_card-title">{{ item.title }}</h3>
          <p class="results_card-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.results {
  @include toRem("padding-top", 160);
  @include toRem("padding-bottom", 160);

  @media (max-width: 767.98px) {
    @include toRem("padding-top", 80);
    @include toRem("padding-bottom", 80);
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
    max-height: 195px;
  }

  &_title {
    font-weight: 600;
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    max-width: 680px;
    margin: 0 auto;
    @include toRem("margin-bottom", 80);
    @include toRem("font-size", 50);

    span {
      color: #367bff;
    }

    @media (max-width: 767.98px) {
      @include toRem("margin-bottom", 40);
      @include toRem("font-size", 24);
    }
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
    margin: 0;
    @include toRem("margin-right", 20);
    @include toRem("margin-left", 20);
    @include toRem("margin-bottom", 40);
    background: var(--white);
    border: 7px solid #eef6ff;
    box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.06);
    border-radius: 50px;
    max-width: calc(25% - calc((40 / 18) * 1rem));
    width: 100%;
    min-width: 390px;
    @include toRem("padding", 40);

    @media (max-width: 575.98px) {
      max-width: calc(100% - calc((40 / 18) * 1rem));
      min-width: initial;
      @include toRem("padding", 20);
    }

    &-img {
      display: block;
      width: 40px;
      height: 40px;
      @include toRem("margin-bottom", 40);

      @media (max-width: 575.98px) {
        @include toRem("margin-bottom", 20);
      }
    }

    &-title {
      font-weight: 600;
      @include toRem("font-size", 35);
      line-height: 110%;
      color: var(--primary);
      @include toRem("margin-bottom", 20);

      @media (max-width: 767.98px) {
        @include toRem("font-size", 24);
        @include toRem("margin-bottom", 15);
      }
    }

    &-text {
      font-weight: 600;
      @include toRem("font-size", 20);
      line-height: 160%;
      color: var(--secondary);

      @media (max-width: 767.98px) {
        @include toRem("font-size", 18);
      }
    }
  }
}
</style>

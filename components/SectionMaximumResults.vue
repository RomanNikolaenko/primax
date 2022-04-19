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
  @include property("padding-top", 160, 80);
  @include property("padding-bottom", 160, 80);

  &_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1720px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &_img {
    max-height: 195px;
  }

  &_title {
    font-weight: 600;
    font-size: 50px;
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    max-width: 680px;
    margin: 0 auto 80px;

    span {
      color: #367bff;
    }

    @media (max-width: 767.98px) {
      font-size: 24px;
      margin-bottom: 40px;
    }
  }

  &_cards {
    --columns: 4;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -20px;
  }

  &_card {
    margin: 0 20px 40px;
    background: var(--white);
    border: 7px solid #eef6ff;
    box-shadow: 12px 20px 40px rgba(0, 0, 0, 0.06);
    border-radius: 50px;
    max-width: calc(25% - 40px);
    width: 100%;
    min-width: 390px;
    padding: 40px;

    @media (max-width: 575.98px) {
      max-width: calc(100% - 40px);
      min-width: initial;
      padding: 20px;
    }

    &-img {
      display: block;
      width: 40px;
      height: 40px;
      margin-bottom: 40px;

      @media (max-width: 575.98px) {
        margin-bottom: 20px;
      }
    }

    &-title {
      font-weight: 600;
      font-size: 35px;
      line-height: 110%;
      color: var(--primary);
      margin-bottom: 20px;

      @media (max-width: 767.98px) {
        font-size: 24px;
        margin-bottom: 15px;
      }
    }

    &-text {
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      color: var(--secondary);

      @media (max-width: 767.98px) {
        font-size: 18px;
      }
    }
  }
}
</style>

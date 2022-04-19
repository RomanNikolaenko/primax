<template>
  <section class="help white-block">
    <div class="help_container container">
      <h2 class="help_title">{{ slice.primary.title }}</h2>

      <div class="help_cards">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          :class="item.flag ? 'blue' : 'white'"
          class="card"
        >
          <PrismicImage :field="item.img" width="192" height="192" />
          <h3 class="card_title">{{ item.title }}</h3>
          <ul class="card_list">
            <li v-if="item.listItem1" class="item">{{ item.listItem1 }}</li>
            <li v-if="item.listItem2" class="item">{{ item.listItem2 }}</li>
            <li v-if="item.listItem3" class="item">{{ item.listItem3 }}</li>
            <li v-if="item.listItem4" class="item">{{ item.listItem4 }}</li>
            <li v-if="item.listItem5" class="item">{{ item.listItem5 }}</li>
          </ul>
          <PrismicLink
            class="link"
            :class="item.flag ? 'whiteBg' : 'blueBorder'"
            :field="item.link"
            >{{ item.linkTitle }}</PrismicLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionHelp",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.help {
  overflow: hidden;
  background: linear-gradient(
      108.02deg,
      rgba(255, 255, 255, 0.05) 0.45%,
      rgba(47, 128, 237, 0.02) 100.53%,
      rgba(47, 128, 237, 0.05) 100.53%
    ),
    #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @include property("padding-top", 155, 80, true, 1640, 768);
  @include property("padding-bottom", 210, 70, true, 1640, 768);

  &_container {
    position: relative;
    z-index: 3;

    &::before {
      content: "";
      position: absolute;
      bottom: 130px;
      right: 0;
      background: radial-gradient(
        41.58% 29.82% at 64.98% 54.56%,
        rgba(54, 195, 255, 0.12) 0%,
        rgba(45, 185, 249, 0.008) 100%
      );
      filter: blur(10px);
      transform: matrix(-1, 0, 0, 1, 0, 0) translateX(-40%);
      width: 1104px;
      height: 1093px;
      z-index: -1;

      @media (max-width: 767.98px) {
        right: 50%;
        transform: matrix(-1, 0, 0, 1, 0, 0) translateX(-50%);
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 80px;
      left: 0;
      background: radial-gradient(
        41.58% 29.82% at 64.98% 54.56%,
        rgba(54, 98, 255, 0.12) 0%,
        rgba(45, 185, 249, 0.008) 100%
      );
      filter: blur(10px);
      transform: matrix(-1, 0, 0, 1, 0, 0) translateX(36%);
      width: 982px;
      height: 973px;
      z-index: -1;

      @media (max-width: 767.98px) {
        left: 50%;
        transform: matrix(-1, 0, 0, 1, 0, 0) translateX(50%);
      }
    }
  }

  &_title {
    font-weight: 600;
    @include property("font-size", 50, 28, true, 1640, 768);
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    margin: 0 auto;
    @include property("margin-bottom", 80, 40, true, 1640, 768);
    max-width: 1110px;

    @media (min-width: 768px) {
      white-space: pre-line;
    }

    span {
      &:nth-of-type(1) {
        color: #367bff;
      }
      &:nth-last-of-type(1) {
        color: #26bff7;
      }
    }
  }

  &_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -20px;

    @media (max-width: 767.98px) {
      margin: 0 -10px;
    }
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 55px;
  border: 7px solid #e1edfc;
  box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.05);
  border-radius: 50px;
  margin: 0 20px 20px;
  max-width: 533px;
  width: 100%;

  &.blue {
    background: linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  }

  &.white {
    background: #ffffff;
  }

  @media (max-width: 767.98px) {
    margin: 0 10px 20px;
    padding: 30px 23px;
    border-radius: 20px;
  }

  img {
    display: block;
    width: 192px;
    height: 192px;
    margin-bottom: 42px;

    @media (max-width: 767.98px) {
      width: 100px;
      height: 100px;
      margin-bottom: 28px;
    }
  }

  &_title {
    font-weight: 600;
    font-size: 35px;
    line-height: 110%;
    text-align: center;
    margin-bottom: 25px;

    @media (max-width: 767.98px) {
      margin-bottom: 20px;
      font-size: 22px;
    }

    .blue & {
      color: var(--white);
    }

    .white & {
      color: var(--primary);
    }
  }

  &_list {
    width: 100%;
    margin-bottom: 45px;

    @media (max-width: 767.98px) {
      margin-bottom: 30px;
    }
  }
}

.item {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  line-height: 160%;

  @media (max-width: 767.98px) {
    font-size: 18px;
    line-height: 150%;
  }

  &:not(:last-child) {
    margin-bottom: 20px;

    @media (max-width: 767.98px) {
      margin-bottom: 12px;
    }
  }

  &:last-child {
    .white & {
      &::before {
        background-image: url("./static/bullet-3.svg");
      }
    }
  }

  .blue & {
    color: var(--white);

    &::before {
      background-image: url("./static/bullet-1.svg");
    }
  }

  .white & {
    color: var(--secondary);

    &::before {
      background-image: url("./static/bullet-2.svg");
    }
  }

  &::before {
    content: "";
    width: 36px;
    height: 36px;
    flex: 0 0 auto;
    margin-right: 20px;
    background-size: contain;

    @media (max-width: 767.98px) {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
</style>

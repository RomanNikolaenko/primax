<template>
  <section class="hero">
    <PrismicImage class="bg" :field="data.imgBg" width="1920" height="1080" />

    <div class="hero_left">
      <ul class="list">
        <li class="list_item" v-for="(item, index) in data.links" :key="index">
          <a :href="item.link" class="list_link">
            <PrismicImage :field="item.img" width="20" height="20" />
            {{ item.linkTitle }}
          </a>
        </li>
      </ul>

      <div class="hero_content">
        <h2 class="hero_content-title">{{ data.title }}</h2>
        <p class="hero_content-subtitle">{{ data.subtitle }}</p>

        <div class="hero_content-btns">
          <PrismicLink class="link orangeBg" :field="data.linkBg">{{
            data.linkBgTitle
          }}</PrismicLink>

          <PrismicLink class="link whiteBorder" :field="data.linkBorder">{{
            data.linkBorderTitle
          }}</PrismicLink>
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

.hero {
  position: relative;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    object-fit: cover;
    object-position: right center;
    height: 100%;
  }

  &_left {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 50px;
    background-color: rgba(0, 17, 59, 1);
    @include property("padding-top", 200, 120, true, 1640, 576);
    @include property("padding-bottom", 300, 80);
    padding-left: max(calc((20 / 18) * 1rem), calc(100% - 1840px) / 2);
    padding-right: calc((20 / 18) * 1rem);
    width: min(100%, 1100px);
    min-height: 100vh;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background: radial-gradient(
        42.65% 65.79% at 27.81% 106.67%,
        #00113b 0%,
        rgba(0, 17, 59, 0) 100%
      );
      mix-blend-mode: hard-light;
      opacity: 0.9;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background: radial-gradient(
        52.45% 101.65% at 5.34% 90.14%,
        #326ffe 0%,
        rgba(50, 111, 254, 0.58) 43.5%,
        rgba(50, 111, 254, 0) 100%
      );
      mix-blend-mode: normal;
      opacity: 0.5;
    }

    @media (min-width: 1640px) {
      width: 57.3%;
    }

    @media (max-width: 1536px) {
      background-color: rgba(0, 17, 59, 0.7);
    }

    @media (max-width: 1099.98px) {
      grid-template-columns: 1fr;
      gap: 32px;
      align-content: flex-start;
    }

    @media (max-width: 575.98px) {
      @include toRem("padding-top", 80);
    }
  }

  &_right {
    display: flex;
    align-items: center;
    max-height: 558px;
    height: 100%;

    img {
      height: 100%;
      object-fit: contain;
    }
  }

  &_content {
    &-title {
      font-weight: 600;
      @include toRem("font-size", 64);
      line-height: 110%;
      @include toRem("margin-bottom", 30);

      @media (max-width: 767.98px) {
        @include toRem("font-size", 40);
        @include toRem("margin-bottom", 20);
      }
    }

    &-subtitle {
      font-weight: 600;
      @include toRem("font-size", 20);
      line-height: 160%;
      @include toRem("margin-bottom", 30);

      @media (max-width: 767.98px) {
        @include toRem("font-size", 18);
        line-height: 150%;
        @include toRem("margin-bottom", 10);
      }
    }

    &-btns {
      display: flex;
      margin: 0;
      @include toRem("margin-left", -10);
      @include toRem("margin-right", -10);

      @media (max-width: 576px) {
        flex-wrap: wrap;
      }

      > * {
        margin: 0;
        @include toRem("margin-top", 20);
        @include toRem("margin-right", 10);
        @include toRem("margin-left", 10);
      }
    }
  }
}

.list {
  .header_collapse & {
    overflow: auto;
  }

  .hero & {
    @media (max-width: 1099.98px) {
      display: flex;
      align-items: center;
      overflow-x: auto;
    }
  }

  &_item {
    &:not(:first-child) {
      .list_link {
        .header_collapse & {
          border-top: 2px solid rgba(255, 255, 255, 0.3);
        }
      }
    }

    &:not(:first-child) {
      .hero & {
        @include toRem("margin-top", 12);

        @media (max-width: 1099.98px) {
          margin-top: 0;
          @include toRem("margin-left", 20);
        }
      }
    }
  }

  &_link {
    display: flex;
    align-items: center;
    font-weight: 700;
    @include toRem("font-size", 16);
    line-height: 150%;
    color: var(--white);

    .header_collapse & {
      padding: 0;
      @include toRem("padding-top", 20);
      @include toRem("padding-bottom", 20);
    }

    .hero & {
      @include toRem("padding-top", 12);
      @include toRem("padding-bottom", 12);
      @include toRem("padding-left", 18);
      @include toRem("padding-right", 18);
      background: linear-gradient(
        226.85deg,
        rgba(255, 255, 255, 0.15) -1.71%,
        rgba(255, 255, 255, 0) 103.92%
      );
      background-size: 200% 100%;
      backdrop-filter: blur(10px);
      border-radius: 8px;
      border: 2px solid rgba(255, 255, 255, 0.3);

      @media (max-width: 1099.98px) {
        white-space: nowrap;
        width: max-content;
      }

      @media (hover) {
        &:hover {
          text-decoration: none;
          background: linear-gradient(
            226.85deg,
            rgba(255, 255, 255, 0.3) -1.71%,
            rgba(255, 255, 255, 0.15) 103.92%
          );
        }
      }
    }

    img {
      display: block;
      width: 20px;
      height: 20px;
      @include toRem("margin-right", 15);
    }
  }
}
</style>

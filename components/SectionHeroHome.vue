<template>
  <section class="hero">
    <div class="hero_container">
      <div class="hero_left">
        <ul class="list">
          <li
            class="list_item"
            v-for="(item, index) in data.links"
            :key="index"
          >
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

      <div class="hero_right">
        <PrismicImage
          v-if="!device"
          :field="data.imgDesk"
          width="885"
          height="497"
        />
        <PrismicImage
          v-if="device"
          :field="data.imgMob"
          width="365"
          height="270"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],

  data() {
    return {
      device: false,
    };
  },

  methods: {
    resizeHandle() {
      if (window.innerWidth <= 768) {
        this.device = true;
      } else {
        this.device = false;
      }
    },
  },

  mounted() {
    this.resizeHandle();

    this.$nextTick(function () {
      window.addEventListener("resize", this.resizeHandle);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandle);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.hero {
  @include toRem("padding-top", 200);
  @include toRem("padding-bottom", 300);

  background-image: url("./static/resultsBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position-y: center;

  @media (max-width: 767.98px) {
    @include toRem("padding-top", 80);
    @include toRem("padding-bottom", 80);
  }

  &_container {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 70px 35px;
    max-width: 1880px;
    margin: 0 auto;
    padding: 0;
    @include toRem("padding-left", 20);
    @include toRem("padding-right", 20);

    @media (max-width: 1365.98px) {
      grid-template-columns: 1fr;
    }
  }

  &_left {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 47px;

    @media (max-width: 1365.98px) {
      grid-template-columns: 1fr;
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
        line-height: 150%;
        @include toRem("font-size", 18);
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
        @include toRem("margin-left", 10);
        @include toRem("margin-right", 10);
        @include toRem("margin-top", 20);
      }
    }
  }
}

.list {
  .header_collapse & {
    overflow: auto;
  }

  .hero & {
    @media (max-width: 1365.98px) {
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

        @media (max-width: 1365.98px) {
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
      @include toRem("padding-right", 18);
      @include toRem("padding-left", 18);
      background: linear-gradient(
        226.85deg,
        rgba(255, 255, 255, 0.15) -1.71%,
        rgba(255, 255, 255, 0) 103.92%
      );
      background-size: 200% 100%;
      backdrop-filter: blur(10px);
      border-radius: 8px;
      border: 2px solid rgba(255, 255, 255, 0.3);

      @media (max-width: 1365.98px) {
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

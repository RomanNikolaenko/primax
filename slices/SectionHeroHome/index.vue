<template>
  <section class="hero">
    <div class="hero_container">
      <div class="hero_left">
        <ul class="list">
          <li
            class="list_item"
            v-for="(item, index) in navigation.data.lists"
            :key="index"
          >
            <PrismicLink
              v-if="$prismic.asLink(item.link)"
              :field="item.link"
              class="list_link"
            >
              <PrismicImage v-if="item.img.url" :field="item.img" />
              {{ item.linkTitle }}
            </PrismicLink>
          </li>
        </ul>

        <div class="hero_content">
          <PrismicRichText
            :field="slice.primary.title"
            class="hero_content-title"
          />

          <PrismicRichText
            :field="slice.primary.subTitle"
            class="hero_content-subtitle"
          />

          <div class="hero_content-btns">
            <PrismicLink :field="slice.primary.linkBg" class="link orangeBg">
              {{ slice.primary.linkBgTitle }}
            </PrismicLink>

            <PrismicLink
              :field="slice.primary.linkBorder"
              class="link whiteBorder"
            >
              {{ slice.primary.linkBorderTitle }}
            </PrismicLink>
          </div>
        </div>
      </div>

      <div class="hero_right images">
        <div class="images_wrap">
          <PrismicImage class="images-img_one" :field="slice.primary.img1" />
          <PrismicImage class="images-img_two" :field="slice.primary.img2" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionHeroHome",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  computed: {
    navigation() {
      return this.$store.state.prismic.navigation;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.hero {
  @include property("padding-top", 200, 110);
  @include property("padding-bottom", 300, 80);

  background-image: url("./static/resultsBg.svg"),
    linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position-y: center;

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
    @include property("gap", 47, 30, true, 1640, 1024);

    @media (max-width: 1365.98px) {
      grid-template-columns: 1fr;
    }
  }

  &_content {
    &-title {
      font-weight: 600;
      @include property("font-size", 64, 40, true, 1640, 1024);
      line-height: 110%;
      @include property("margin-bottom", 30, 20);
    }

    &-subtitle {
      font-weight: 600;
      @include property("font-size", 20, 16, true, 1640, 1024);
      line-height: 160%;
      @include property("font-size", 30, 10);

      @media (max-width: 767.98px) {
        line-height: 150%;
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

.images {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  padding-left: 93px;

  &_wrap {
    padding: 14px 16px 0;
    background: var(--white);
    box-shadow: 12.9635px 21.6058px 47.5328px rgba(0, 0, 0, 0.1);
    border-radius: 19.325px;
  }

  &-img_one {
    height: 100%;
    max-height: 319px;
    object-fit: contain;
  }

  &-img_two {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: -1;
    transform: translate(0, -57%);
    width: auto;
    max-height: 241px;
    object-fit: contain;
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

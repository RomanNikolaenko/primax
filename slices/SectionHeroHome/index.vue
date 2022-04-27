<template>
  <section class="section hero" @mousemove="mousemove">
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
          <div class="images_block">
            <div class="images_block-img">
              <PrismicImage
                v-if="slice.primary.imgBlock1.url"
                :field="slice.primary.imgBlock1"
              />
            </div>
            <div class="images_block-wrap">
              <h3 v-if="slice.primary.blockTitle1" class="images_block-title">
                {{ slice.primary.blockTitle1 }}
              </h3>
              <p
                v-if="slice.primary.blockSubtitle1"
                class="images_block-subtitle"
              >
                {{ slice.primary.blockSubtitle1 }}
              </p>
            </div>
          </div>
          <div class="images_block">
            <div class="images_block-img">
              <PrismicImage
                v-if="slice.primary.imgBlock2.url"
                :field="slice.primary.imgBlock2"
              />
            </div>
            <div class="images_block-wrap">
              <h3 v-if="slice.primary.blockTitle2" class="images_block-title">
                {{ slice.primary.blockTitle2 }}
              </h3>
              <p
                v-if="slice.primary.blockSubtitle2"
                class="images_block-subtitle"
              >
                {{ slice.primary.blockSubtitle2 }}
              </p>
            </div>
          </div>
          <div class="images_block">
            <div class="images_block-img">
              <PrismicImage
                v-if="slice.primary.imgBlock3.url"
                :field="slice.primary.imgBlock3"
              />
            </div>
            <div class="images_block-wrap">
              <h3 v-if="slice.primary.blockTitle3" class="images_block-title">
                {{ slice.primary.blockTitle3 }}
              </h3>
              <p
                v-if="slice.primary.blockSubtitle3"
                class="images_block-subtitle"
              >
                {{ slice.primary.blockSubtitle3 }}
              </p>
            </div>
          </div>
          <div class="images_block">
            <div class="images_block-img">
              <PrismicImage
                v-if="slice.primary.imgBlock4.url"
                :field="slice.primary.imgBlock4"
              />
            </div>
            <div class="images_block-wrap">
              <h3 v-if="slice.primary.blockTitle4" class="images_block-title">
                {{ slice.primary.blockTitle4 }}
              </h3>
              <p
                v-if="slice.primary.blockSubtitle4"
                class="images_block-subtitle"
              >
                {{ slice.primary.blockSubtitle4 }}
              </p>
            </div>
          </div>
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

  methods: {
    mousemove(e) {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let products = document.querySelectorAll(".images .images_block");
      for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let img_x = mouseX - product.getBoundingClientRect().left / 7;
        let img_y = mouseY - product.getBoundingClientRect().top / 7;

        if (window.innerWidth >= 1024) {
          product.style.transform = `translateY(-${
            img_x / ((i + 2) * 10)
          }px) translateX(-${img_y / ((i + 2) * 10)}px)`;
        } else {
          product.style.transform = null;
        }
      }
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

  @media (max-width: 575.98px) {
    background-size: contain;
    background-position-y: calc(
      100% - calc(250px + (330 - 250) * ((100vw - 320px) / (576 - 320)))
    );
  }

  &_container {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    @include property("column-gap", 70, 30, true, 1920, 1440);
    @include property("row-gap", 35, 30, true, 1920, 1440);
    max-width: 1880px;
    margin: 0 auto;
    padding: 0;
    @include toRem("padding-left", 20);
    @include toRem("padding-right", 20);

    @media (max-width: 1399.98px) {
      grid-template-columns: 1fr;
    }
  }

  &_left {
    display: grid;
    grid-template-columns: max-content 1fr;
    @include property("gap", 47, 30, true, 1920, 1440);

    @media (max-width: 1023.98px) {
      grid-template-columns: 1fr;
    }
  }

  &_content {
    &-title {
      font-weight: 600;
      @include property("font-size", 64, 40, true, 1920, 1024);
      line-height: 110%;
      @include property("margin-bottom", 30, 20);
    }

    &-subtitle {
      font-weight: 600;
      @include property("font-size", 20, 16, true, 1920, 1024);
      line-height: 160%;
      @include property("margin-bottom", 30, 10);

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
        white-space: nowrap;
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
  @include property("padding-left", 93, 45, true, 1920, 1440);
  @include property("padding-right", 82, 50, true, 1920, 1440);

  @media (max-width: 1399.98px) {
    max-width: 730px;
    margin: 70px auto calc(70px + (0 - 70) * ((100vw - 320px) / (1024 - 320)));
    padding: 0;
  }

  &_wrap {
    position: relative;
    padding: 14px 16px 0;
    background: var(--white);
    box-shadow: 12.9635px 21.6058px 47.5328px rgba(0, 0, 0, 0.1);
    border-radius: 19.325px;
    width: 100%;
  }

  &-img_one {
    height: 100%;
    max-height: 319px;
    object-fit: contain;
  }

  &-img_two {
    position: absolute;
    top: 100%;
    left: -15.5%;
    z-index: -1;
    transform: translateY(-43%);
    width: auto;
    max-height: 275px;
    object-fit: contain;

    @media (max-width: 1023.98px) {
      left: 50%;
      transform: translate(-50%, -43%);
    }
  }

  &_block {
    position: absolute;
    display: grid;
    grid-template-columns: 53px 1fr;
    align-items: center;
    @include property("gap", 20, 10, true, 1920, 1024);
    @include property("padding", 25, 15, true, 1920, 1440);
    background: var(--white);
    box-shadow: 11.6224px 19.3707px 42.6156px rgba(0, 0, 0, 0.1);
    border-radius: 8.64233px;
    color: var(--secondary);
    max-width: 250px;

    @media (max-width: 1023.98px) {
      padding: 5px;
      border-radius: 50%;
      grid-template-columns: 1fr;
      gap: 0;
    }

    &:nth-of-type(1) {
      top: -33px;
      left: -10%;

      @media (max-width: 1023.98px) {
        left: -17px;
        top: -29px;
      }

      .images_block-img {
        background: rgba(255, 143, 107, 0.1);

        @media (max-width: 1023.98px) {
          width: 48px;
          height: 48px;
        }

        img {
          width: 25px;
          height: 25px;
        }
      }
    }

    &:nth-of-type(2) {
      bottom: calc(100% - 14px);
      right: -4%;

      @media (max-width: 1023.98px) {
        right: -17px;
        bottom: calc(100% - 31px);
      }

      .images_block-img {
        background: linear-gradient(
          89.02deg,
          rgba(47, 105, 255, 0.1) 1.68%,
          rgba(54, 124, 255, 0.1) 97.37%
        );

        img {
          width: 31px;
          height: 31px;
        }
      }
    }

    &:nth-of-type(3) {
      bottom: -25px;
      left: -6%;
      max-width: 220px;

      @media (max-width: 1023.98px) {
        left: 18px;
        transform: translateY(47px);
      }

      .images_block-img {
        background: linear-gradient(
          89.02deg,
          rgba(47, 105, 255, 0.1) 1.68%,
          rgba(54, 124, 255, 0.1) 97.37%
        );

        img {
          width: 23px;
          height: 23px;
        }
      }
    }

    &:nth-of-type(4) {
      top: calc(100% - 26px);
      right: -11.7%;

      @media (max-width: 1023.98px) {
        right: 18px;
        top: calc(100% + 20px);
      }

      .images_block-img {
        background: rgba(255, 214, 107, 0.2);

        img {
          width: 23px;
          height: 21px;
        }
      }
    }

    &-wrap {
      @media (max-width: 1023.98px) {
        display: none;
      }
    }

    &-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 53px;
      height: 53px;
      border-radius: 50%;

      @media (max-width: 1023.98px) {
        width: 53px;
        height: 53px;
      }
    }

    &-title {
      font-weight: 700;
      @include property("font-size", 16, 14, true, 1920, 1024);
      line-height: 100%;
      margin-bottom: 5px;
    }

    &-subtitle {
      font-weight: 400;
      @include property("font-size", 14, 12, true, 1920, 1024);
      line-height: 114%;
    }
  }
}

.list {
  .header_collapse & {
    overflow: auto;
  }

  .hero & {
    @media (max-width: 1023.98px) {
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

        @media (max-width: 1023.98px) {
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

      @media (max-width: 1023.98px) {
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

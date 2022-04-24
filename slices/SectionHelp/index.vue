<template>
  <section class="help white-block">
    <div class="help_container container">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        :field="slice.primary.title"
        class="help_title"
      />

      <div class="help_cards">
        <div class="help_card blue">
          <PrismicImage :field="helpCard.data.lists1Img" />

          <h3 class="help_card-title">{{ helpCard.data.listsTitle1 }}</h3>

          <ul class="help_card-list">
            <li
              v-for="(item, i) in helpCard.data.lists1"
              :key="`slice-item-${i}`"
              :class="item.boolean ? '' : 'none'"
              class="help_card-item"
            >
              {{ item.title }}
            </li>
          </ul>

          <PrismicLink :field="helpCard.data.linkBg" class="link whiteBg">{{
            helpCard.data.linkBgTitle
          }}</PrismicLink>
        </div>

        <div class="help_card white">
          <PrismicImage :field="helpCard.data.lists2Img" />

          <h3 class="help_card-title">{{ helpCard.data.listsTitle2 }}</h3>

          <ul class="help_card-list">
            <li
              v-for="(item, i) in helpCard.data.lists2"
              :key="`slice-item-${i}`"
              :class="item.boolean ? '' : 'none'"
              class="help_card-item"
            >
              {{ item.title }}
            </li>
          </ul>

          <PrismicLink :field="helpCard.data.linkBorder" class="link blueBorder">{{
            helpCard.data.linkBorderTitle
          }}</PrismicLink>
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

  computed: {
    helpCard() {
      return this.$store.state.prismic.helpCard;
    },
  },
};
</script>

<style lang="scss">
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
      @include toRem("bottom", 130);
      right: 0;
      background-image: radial-gradient(
        41.58% 29.82% at 64.98% 54.56%,
        rgba(54, 195, 255, 0.12) 0%,
        rgba(45, 185, 249, 0.008) 100%
      );
      filter: blur(10px);
      transform: matrix(-1, 0, 0, 1, 0, 0) translateX(-40%);
      width: 1104px;
      height: 1093px;
      z-index: -1;

      @media (max-width: 1023.98px) {
        right: 50%;
        transform: matrix(-1, 0, 0, 1, 0, 0) translateX(-50%);
      }
    }

    &::after {
      content: "";
      position: absolute;
      @include toRem("top", 80);
      left: 0;
      background-image: radial-gradient(
        41.58% 29.82% at 64.98% 54.56%,
        rgba(54, 98, 255, 0.12) 0%,
        rgba(45, 185, 249, 0.008) 100%
      );
      filter: blur(10px);
      transform: matrix(-1, 0, 0, 1, 0, 0) translateX(36%);
      width: 982px;
      height: 973px;
      z-index: -1;

      @media (max-width: 1023.98px) {
        left: 50%;
        transform: matrix(-1, 0, 0, 1, 0, 0) translateX(50%);
      }
    }
  }

  &_title {
    font-weight: 600;
    @include property("font-size", 50, 24);
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    margin: 0 auto;
     @include property("margin-bottom", 80, 40);
    max-width: 1110px;

    @media (min-width: 768px) {
      white-space: pre-line;
    }

    strong {
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
    margin: 0;
    @include toRem("margin-left", -20);
    @include toRem("margin-right", -20);

    @media (max-width: 1023.98px) {
      margin: 0;
      @include toRem("margin-left", -10);
      @include toRem("margin-right", -10);
    }
  }

  &_card {
    display: flex;
    flex-direction: column;
    align-items: center;
    @include property("padding-top", 70, 30);
    @include property("padding-bottom", 70, 30);
    @include property("padding-left", 55, 20);
    @include property("padding-right", 55, 20);
    border: 7px solid #e1edfc;
    box-shadow: 10px 20px 50px rgba(0, 0, 0, 0.05);
    border-radius: 50px;
    @include toRem("margin", 20);
    margin-top: 0;
    max-width: 533px;
    width: 100%;

    &.blue {
      background: linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);

      h3 {
        color: var(--white);
      }

      li {
        color: var(--white);

        &::before {
          background-image: url("./static/bullet-1.svg");
        }
      }
    }

    &.white {
      background: var(--white);

      h3 {
        color: var(--primary);
      }

      li {
        color: var(--secondary);

        &::before {
          background-image: url("./static/bullet-2.svg");
        }
      }
    }

    @media (max-width: 1023.98px) {
      margin: 0;
      border-radius: 20px;
      border-width: 5px;
      @include toRem("margin-bottom", 20);
      @include toRem("margin-left", 10);
      @include toRem("margin-right", 10);
    }

    > div {
      width: 100%;
    }

    img {
      display: flex;
      margin: 0 auto;
      @include property("width", 192, 100);
      @include property("height", 192, 100);
      @include property("margin-bottom", 42, 28);
    }

    h3 {
      font-weight: 600;
      @include property("font-size", 35, 20);
      @include property("margin-bottom", 25, 20);
      line-height: 110%;
      text-align: center;
    }

    ul,
    ol {
      width: 100%;
      @include property("margin-bottom", 45, 30);
    }

    li {
      display: flex;
      align-items: center;
      font-weight: 600;
      line-height: 160%;
      @include property("font-size", 25, 16);

      @media (max-width: 1023.98px) {
        line-height: 150%;
      }

      &:not(:last-child) {
        @include property("margin-bottom", 20, 12);
      }

      &::before {
        content: "";
        @include property("width", 36, 20);
        @include property("height", 36, 20);
        @include property("margin-right", 20, 10);
        flex: 0 0 auto;
        background-size: contain;
      }

      &.none {
        &::before {
          background-image: url("./static/bullet-3.svg");
        }
      }
    }
  }
}
</style>

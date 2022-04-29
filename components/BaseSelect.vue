<template>
  <div
    class="v-select"
    @mouseover="areOptionsVisible = true"
    @mouseleave="areOptionsVisible = false"
  >
    <p
      class="title"
      :class="{ active: areOptionsVisible }"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ language.slice(0, 2) }}
      <BaseIcon class="arrow" name="selectArrow" viewBox="0 0 8 6" />
    </p>
    <div class="options" :class="{ active: areOptionsVisible }">
      <PrismicLink
        v-for="lang in alternateLanguages"
        :key="lang.lang"
        :field="{ ...lang, link_type: 'Document' }"
      >
        {{ lang.lang.slice(0, 2) }}
      </PrismicLink>
    </div>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: { BaseIcon },
  data() {
    return {
      defaultValue: null,
      areOptionsVisible: false,
    };
  },

  computed: {
    language() {
      return this.$store.state.prismic.language;
    },
    alternateLanguages() {
      return this.$store.state.prismic.alternateLanguages;
    },
  },

  methods: {
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },

  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.v-select {
  position: relative;
  z-index: 2;
  display: flex;
  color: var(--white);
  min-width: 55px;
  text-transform: uppercase;

  @media (max-width: 374.98px) {
    position: fixed;
    z-index: 10;
    top: 24px;
    right: 85px;

    .fix & {
      top: 14px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.2);
    margin: 0;
    width: 100%;
    font-weight: 700;
    @include toRem("font-size", 16);
    line-height: 150%;
    @include toRem("border-radius", 5);
    @include toRem("padding-top", 8);
    @include toRem("padding-bottom", 8);
    @include toRem("padding-left", 10);
    @include toRem("padding-right", 10);
    line-height: calc(24 / 16);
    cursor: pointer;

    @media (min-width: 576px) {
      .scroll & {
        color: #367bff;
        background-image: linear-gradient(
          89.02deg,
          rgba(55, 125, 255, 0.1) 1.68%,
          rgba(44, 183, 249, 0.1) 97.37%
        );
      }
    }

    .arrow {
      font-style: normal;
      width: 8px;
      height: 6px;
      @include toRem("margin-left", 4);
      fill: var(--white);

      .scroll & {
        fill: #367bff;
      }

      .lock & {
        fill: var(--white);
      }
    }

    &.active {
      border-radius: 5px 5px 0 0;

      @media (max-width: 575.98px) {
        border-radius: 0 0 5px 5px;
      }
    }
  }

  .options {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 99;
    width: 100%;
    padding: 2px;
    border-radius: 0 0 5px 5px;
    background: rgba(255, 255, 255, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-out;

    @media (min-width: 375px) and (max-width: 575.98px) {
      top: initial;
      bottom: 100%;
      border-radius: 5px 5px 0 0;
    }

    @media (min-width: 576px) {
      .scroll & {
        color: #367bff;
        background-image: linear-gradient(
          89.02deg,
          rgba(55, 125, 255, 0.1) 1.68%,
          rgba(44, 183, 249, 0.1) 97.37%
        );
      }
    }

    &.active {
      opacity: 1;
      visibility: visible;
    }

    a {
      display: block;
      font-weight: 700;
      @include toRem("font-size", 16);
      margin-bottom: 0;
      @include toRem("padding", 8);
      @include toRem("border-radius", 4);

      @media (hover) {
        transition: all 0.2s ease-out;
        &:hover {
          text-decoration: none;
          background: linear-gradient(
            89.02deg,
            rgba(55, 125, 255, 0.1) 1.68%,
            rgba(44, 183, 249, 0.1) 97.37%
          );

          .scroll & {
            background-image: linear-gradient(
              89.02deg,
              rgba(55, 125, 255, 0.1) 1.68%,
              rgba(44, 183, 249, 0.1) 97.37%
            );
          }
        }
      }
    }
  }
}
</style>

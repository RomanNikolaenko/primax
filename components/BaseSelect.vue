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
      {{ options[defaultValue] }} <i>&#9654;</i>
    </p>
    <div class="options" :class="{ active: areOptionsVisible }">
      <p
        v-for="(option, index) in options"
        :key="option.value"
        @click="selectOption(option, index)"
      >
        {{ option }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",

  props: ["options", "selected"],

  data() {
    return {
      defaultValue: 0,
      areOptionsVisible: false,
    };
  },

  methods: {
    selectOption(option, index) {
      this.$emit("select", option);
      this.defaultValue = index;
      this.areOptionsVisible = false;
    },

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

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

.v-select {
  position: relative;
  z-index: 2;
  display: flex;
  color: var(--white);
  min-width: 55px;
  text-transform: uppercase;

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.2);
    margin: 0;
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    padding: 8px 10px;
    border-radius: 5px;
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

    i {
      font-style: normal;
      font-size: 10px;
      margin-left: 4px;
      transform: rotate(90deg);
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
    transition: all 0.4s ease-out;

    @media (max-width: 575.98px) {
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

    p {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 0;
      padding: 8px;
      border-radius: 4px;
      cursor: pointer;

      @media (hover) {
        transition: all 0.4s ease-out;
        &:hover {
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

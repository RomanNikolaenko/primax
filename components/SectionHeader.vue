<template>
  <header class="header" :class="burger ? 'activeBurger' : ''">
    <div class="header_container">
      <nuxt-link to="/" class="header_logo" exact-active-class="active">
        <BaseIcon name="logoWhite" viewBox="0 0 137 25" />
      </nuxt-link>

      <button class="header_burger" v-if="device" @click="burgerToggle">
        <div class="header_burger-wrap"><i></i><i></i><i></i></div>
      </button>

      <div v-if="!device" class="header_auth">
        <PrismicLink class="header_auth-in" :field="header.data.linkIn">
          {{ header.data.linkInTitle }}
        </PrismicLink>

        <PrismicLink class="header_auth-reg" :field="header.data.linkAuth">
          {{ header.data.linkAuthTitle }}
        </PrismicLink>

        <span class="header_auth-line"></span>

        <BaseSelect />
      </div>

      <transition name="burger">
        <div v-show="burger" class="header_collapse">
          <div class="header_inner">
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
                  <!-- <PrismicImage v-if="item.img.url" :field="item.img" /> -->
                  <span v-bind:style="{'mask-image': 'url(' + item.img.url + ')'}"></span>
                  {{ item.linkTitle }}
                </PrismicLink>
              </li>
            </ul>

            <div class="header_auth">
              <PrismicLink class="header_auth-in" :field="header.data.linkIn">
                {{ header.data.linkInTitle }}
              </PrismicLink>

              <PrismicLink
                class="header_auth-reg"
                :field="header.data.linkAuth"
              >
                {{ header.data.linkAuthTitle }}
              </PrismicLink>

              <span class="header_auth-line"></span>

              <BaseSelect />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import BaseSelect from "./BaseSelect.vue";

export default {
  components: { BaseIcon, BaseSelect },

  props: {
    header: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      burger: false,
      device: false,
    };
  },

  methods: {
    burgerToggle() {
      if (!this.burger) {
        this.burger = true;
        document.body.classList.add("lock");
      } else {
        this.burger = false;
        document.body.classList.remove("lock");
      }
    },

    resizeHandle() {
      if (window.innerWidth < 576) {
        this.device = true;
      } else {
        this.device = false;
        this.burger = false;
      }
    },
  },

  computed: {
    navigation() {
      return this.$store.state.prismic.navigation;
    },
  },

  mounted() {
    this.$nextTick(function () {
      this.resizeHandle();

      window.addEventListener("resize", this.resizeHandle);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandle);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  @include property("padding-top", 30, 20);
  @include property("padding-bottom", 30, 20);
  @include toRem("padding-left", 20);
  @include toRem("padding-right", 20);
  transition: padding 0.2s linear;

  .fix & {
    @include toRem("padding-top", 10);
    @include toRem("padding-bottom", 10);
    background-image: linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
    backdrop-filter: blur(30px);
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  }

  .scroll & {
    background: var(--white);
    border-bottom: 2px solid rgba(54, 123, 255, 0.1);
  }

  &_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1840px;
    margin: 0 auto;
  }

  &_logo {
    position: relative;
    z-index: 3;
    display: block;
    @include property("width", 127, 114);
    @include property("height", 27, 21);

    &.active {
      pointer-events: none;
    }
  }

  &_auth {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    gap: 18px;
    margin-top: auto;

    @media (max-width: 374.98px) {
      justify-content: space-evenly;
    }

    &-in {
      @include toRem("padding-top", 10);
      @include toRem("padding-bottom", 10);
      @include toRem("padding-left", 16);
      @include toRem("padding-right", 16);
      border: 2px solid var(--white);
      border-radius: 5px;
      font-weight: 700;
      @include toRem("font-size", 16);
      line-height: 150%;
      text-align: center;

      @media (hover) {
        &:hover {
          text-decoration: none;
          background: var(--white);
          color: var(--primary);
        }
      }

      .scroll & {
        @media (min-width: 576px) {
          color: #2f69ff;
          border-color: #2f69ff;
        }

        @media (hover) {
          &:hover {
            text-decoration: none;
            background: #2f69ff;
            color: var(--white);
          }
        }
      }
    }

    &-reg {
      @include toRem("padding-top", 10);
      @include toRem("padding-bottom", 10);
      @include toRem("padding-left", 16);
      @include toRem("padding-right", 16);
      background: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
      font-weight: 700;
      @include toRem("font-size", 16);
      line-height: 150%;
      text-align: center;

      @media (hover) {
        &:hover {
          text-decoration: none;
          background: rgba(255, 255, 255, 0.35);
          box-shadow: 0px 7px 14px rgba(47, 93, 182, 0.4);
        }
      }

      .scroll & {
        @media (min-width: 576px) {
          color: #2f69ff;
          border-color: #2f69ff;
          background-image: linear-gradient(
            89.02deg,
            rgba(55, 125, 255, 0.1) 1.68%,
            rgba(44, 183, 249, 0.1) 97.37%
          );
        }

        @media (hover) {
          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    &-line {
      display: block;
      width: 2px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);

      .scroll & {
        background-image: linear-gradient(
          89.02deg,
          rgba(55, 125, 255, 0.1) 1.68%,
          rgba(44, 183, 249, 0.1) 97.37%
        );
      }

      @media (max-width: 374.98px) {
        display: none;
      }
    }
  }

  &_burger {
    position: relative;
    z-index: 3;
    @include toRem("padding", 12);
    width: 48px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;

    .scroll & {
      @media (max-width: 575.98px) {
        background: linear-gradient(
          89.02deg,
          rgba(55, 125, 255, 0.1) 1.68%,
          rgba(44, 183, 249, 0.1) 97.37%
        );
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      background: rgba(255, 255, 255, 0.2);
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: transform 0.4s;
      transform-origin: center;
    }

    .activeBurger & {
      &::before {
        transform: translate(-50%, -50%) scale(1);
      }

      i {
        width: 24px !important;
        transition: top 0.2s, width 0.2s, transform 0.3s 0.2s, opacity 0.2s 0.2s;

        .scroll & {
          @media (max-width: 575.98px) {
            background: var(--white);
          }
        }

        &:nth-child(1) {
          top: 50%;
          transform: translate(0, -50%) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          top: 50%;
          transform: translate(0, -50%) rotate(-45deg);
        }
      }
    }

    &-wrap {
      position: relative;
    }

    i {
      position: absolute;
      top: 0;
      height: 2px;
      background-color: var(--white);
      border-radius: 5px;
      will-change: transform;
      transition: top 0.2s 0.2s, width 0.2s 0.2s, transform 0.2s,
        opacity 0.2s 0.2s;

      .scroll & {
        @media (max-width: 575.98px) {
          background: linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
        }
      }

      &:nth-of-type(1) {
        width: 12px;
        left: 0;
        top: calc(50% - 10px);
      }

      &:nth-of-type(2) {
        width: 24px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:nth-of-type(3) {
        width: 12px;
        right: 0;
        top: calc(50% + 8px);
      }
    }
  }

  &_collapse {
    position: fixed;
    top: 0;
    right: 0;
    background-image: linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
    width: 100%;
    height: var(--vh, 100%);
    @include toRem("padding-top", 110);

    @media (min-height: 620px) {
      background-image: url("./static/lineMenu.svg"),
        linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
      background-repeat: no-repeat, repeat;
      background-size: contain;
      background-position-y: bottom;
    }
  }

  &_inner {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: auto;
    @include toRem("padding", 20);
  }

  .list {
    overflow: auto;
    @include toRem("margin-bottom", 20);

    &_item {
      &:not(:first-child) {
        .list_link {
          border-top: 2px solid rgba(255, 255, 255, 0.3);
        }
      }

      span {
        display: block;
        width: 20px;
        height: 20px;
        @include toRem("margin-right", 15);
        background-color: var(--white);
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: contain;
      }
    }

    &_link {
      position: relative;
      z-index: 2;
      overflow: hidden;
      display: flex;
      align-items: center;
      font-weight: 700;
      @include toRem("font-size", 16);
      line-height: 150%;
      color: var(--white);
      text-decoration: none;

      padding: 0;
      @include toRem("padding-top", 20);
      @include toRem("padding-bottom", 20);

      &.nuxt-link-active {
        color: #ffd862;

        span {
          background-color: #ffd862;
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -1;
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: rgba(250, 250, 250, 0.2);
      }

      &:focus {
        &::before {
          animation: clickLink 0.5s linear 0s forwards;
        }
      }

      // img {
      //   display: block;
      //   width: 20px;
      //   height: 20px;
      //   @include toRem("margin-right", 15);
      // }
    }
  }
}

.burger-enter-active {
  transition: all 0.2s ease;
}
.burger-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.burger-enter,
.burger-leave-to {
  opacity: 0;
}

@keyframes clickLink {
  0% {
    transform: translate(-50%, -50%) scale(1);
    width: 0;
    height: 0;
  }
  10% {
    transform: translate(-50%, -50%) scale(1);
    width: 16px;
    height: 16px;
  }
  85% {
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%) scale(25);
  }
  95% {
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%) scale(25);
  }
  100% {
    opacity: 0;
  }
}
</style>

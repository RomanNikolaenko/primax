<template>
  <header class="header" :class="burger ? 'activeBurger' : ''">
    <div class="header_container">
      <BaseIcon class="header_logo" name="logoWhite" viewBox="0 0 137 25" />

      <button class="header_burger" v-if="device" @click="burgerToggle">
        <i></i><i></i><i></i>
      </button>

      <div v-if="!device" class="header_auth">
        <PrismicLink class="header_auth-in" :field="data.linkIn">
          {{ data.linkInTitle }}
        </PrismicLink>

        <PrismicLink class="header_auth-reg" :field="data.linkAuth">
          {{ data.linkAuthTitle }}
        </PrismicLink>

        <span class="header_auth-line"></span>

        <BaseSelect
          :options="options"
          :selected="selectedOptions"
          @select="changeSelect"
        />
      </div>

      <transition name="burger">
        <div v-show="burger" class="header_collapse">
          <div class="header_inner">
            <ul class="list">
              <li
                class="list_item"
                v-for="(item, index) in data.linkGroup"
                :key="index"
              >
                <a :href="item.link" class="list_link">
                  <PrismicImage :field="item.img" width="20" height="20" />
                  {{ item.groupLinkText }}
                </a>
              </li>
            </ul>

            <div class="header_auth">
              <PrismicLink class="header_auth-in" :field="data.linkIn">
                {{ data.linkInTitle }}
              </PrismicLink>

              <PrismicLink class="header_auth-reg" :field="data.linkAuth">
                {{ data.linkAuthTitle }}
              </PrismicLink>

              <span class="header_auth-line"></span>

              <BaseSelect
                :options="options"
                :selected="selectedOptions"
                @select="changeSelect"
              />
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

  props: ["data"],

  data() {
    return {
      burger: false,
      device: false,
      options: ["ru", "en"],
      selectedOptions: ["ru"],
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

    changeSelect(val) {
      console.log("sfesd");
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  padding: 40px 20px;
  transition: padding 0.2s linear;

  @media (max-width: 575.98px) {
    padding: 10px 20px;
  }

  .fix & {
    padding: 10px 20px;
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
    display: block;
    width: 127px;
    height: 27px;
  }

  &_auth {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    gap: 18px;
    margin-top: auto;

    &-in {
      padding: 10px 16px;
      border: 2px solid var(--white);
      border-radius: 5px;
      font-weight: 700;
      font-size: 16px;
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
        color: #2f69ff;
        border-color: #2f69ff;

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
      padding: 10px 16px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
      font-weight: 700;
      font-size: 16px;
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
        color: #2f69ff;
        border-color: #2f69ff;
        background-image: linear-gradient(
          89.02deg,
          rgba(55, 125, 255, 0.1) 1.68%,
          rgba(44, 183, 249, 0.1) 97.37%
        );

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
    }
  }

  &_burger {
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 12px;
    width: 48px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;

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

        &:nth-child(1) {
          top: 9px;
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          top: -11px;
          transform: rotate(-45deg);
        }
      }
    }

    i {
      position: relative;
      top: 0;
      height: 2px;
      background-color: var(--white);
      border-radius: 5px;
      will-change: transform;
      transition: top 0.2s 0.2s, width 0.2s 0.2s, transform 0.2s,
        opacity 0.2s 0.2s;

      &:nth-of-type(1) {
        width: 12px;
      }

      &:nth-of-type(2) {
        width: 24px;
      }

      &:nth-of-type(3) {
        width: 12px;
        margin-left: auto;
      }
    }
  }

  &_collapse {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    background-image: linear-gradient(89.02deg, #367bff 1.68%, #26bff7 97.37%);
    width: 100%;
    height: 100vh;
    padding-top: 67px;

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
    padding: 20px;
  }
}

.burger-enter-active {
  transition: all 0.3s ease;
}
.burger-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.burger-enter,
.burger-leave-to {
  opacity: 0;
}

.list {
  .header_collapse & {
    overflow: auto;
    margin-bottom: 20px;
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
        margin-top: 12px;

        @media (max-width: 1365.98px) {
          margin-top: 0;
          margin-left: 20px;
        }
      }
    }
  }

  &_link {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: var(--white);

    .header_collapse & {
      padding: 20px 0;
    }

    .hero & {
      padding: 12px 18px;
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
      margin-right: 15px;
    }
  }
}
</style>
<template>
  <section class="form">
    <div class="form_container container">
      <h2 class="form_title">{{ data.title }}</h2>

      <form class="form_form">
        <h3>{{ data.titleRadio }}</h3>

        <fieldset>
          <label
            v-for="(item, index) in data.radios"
            :key="index"
            :for="'radios_' + index"
          >
            <input
              type="radio"
              :id="'radios_' + index"
              name="mode"
              :checked="index === 0 ? true : false"
            />
            <i></i>
            <span>{{ item.title }}</span>
          </label>
        </fieldset>

        <div class="form_fields">
          <h3>{{ data.titleForm }}</h3>

          <label for="">
            <input type="text" name="name" :placeholder="data.name" required />
          </label>
          <label for="">
            <input
              type="text"
              name="surname"
              :placeholder="data.surname"
              required
            />
          </label>
          <label for="">
            <input
              type="email"
              name="email"
              :placeholder="data.email"
              required
            />
          </label>
          <label for="">
            <input type="tel" name="phone" :placeholder="data.phone" required />
          </label>
          <label for="">
            <textarea
              name="message"
              :placeholder="data.message"
              required
            ></textarea>
          </label>
        </div>

        <div class="form_checkbox">
          <input type="checkbox" id="checkbox" required />
          <label for="checkbox"
            >{{ data.checkbox }}
            <PrismicLink :field="data.checkboxLink">{{
              data.checkboxLinkTitle
            }}</PrismicLink></label
          >
        </div>

        <button class="link orangeBg form_link">{{ data.buttonTitle }}</button>
      </form>
    </div>
  </section>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: { BaseIcon },
  props: ["data"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

.form {
  @include toRem("padding-top", 160);
  @include toRem("padding-bottom", 160);

  @media (max-width: 767.98px) {
    @include toRem("padding-top", 160);
    @include toRem("padding-bottom", 160);
  }

  &_title {
    font-weight: 600;
    @include toRem("font-size", 50);
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    margin: 0 auto;
    @include toRem("margin-bottom", 80);
    max-width: 680px;

    @media (max-width: 767.98px) {
      @include toRem("font-size", 24);
      @include toRem("margin-bottom", 40);
    }
  }

  &_form {
    background: var(--white);
    border: 7px solid #ededff;
    box-shadow: 13.4163px 22.3604px 49.193px rgba(0, 56, 97, 0.1),
      10px 20px 50px rgba(0, 0, 0, 0.05);
    @include toRem("border-radius", 50);
    @include toRem("max-width", 750);
    margin: 0 auto;
    @include toRem("padding", 70);

    @media (max-width: 575.98px) {
      @include toRem("padding", 20);
      @include toRem("border-radius", 20);
    }

    @media (max-width: 419.98px) {
      margin: 0;
      @include toRem("margin-left", -20);
      @include toRem("margin-right", -20);
    }

    > fieldset {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      @include toRem("margin-left", -20);
      @include toRem("margin-right", -20);

      input {
        display: none;
        &:checked {
          + i {
            &::before {
              background: url("./static/radio-active.svg") !important;
            }
          }
        }
      }

      label {
        position: relative;
        font-weight: 600;
        @include toRem("font-size", 20);
        line-height: 160%;
        color: var(--secondary);
        @include toRem("padding-left", 40);
        @include toRem("margin", 20);
        cursor: pointer;

        @media (hover) {
          &:hover {
            i {
              &::before {
                background: url("./static/radio-hover.svg");
                background-size: 100% 100%;
              }
            }
          }
        }
      }

      i {
        position: absolute;
        top: 50%;
        left: 0;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background-image: url("./static/radio.svg");
          background-size: 100% 100%;
        }
      }
    }

    h3 {
      font-weight: 600;
      @include toRem("font-size", 35);
      line-height: 110%;
      color: var(--primary);

      @media (max-width: 767.98px) {
        @include toRem("font-size", 20);
      }
    }
  }

  &_fields {
    display: grid;
    gap: 40px;
    @include toRem("margin-top", 20);

    textarea {
      @include toRem("min-height", 150);
    }

    input {
      line-height: 40px;
    }

    input,
    textarea {
      width: 100%;
      color: var(--secondary);

      border-bottom: 2px solid;
      border-image-slice: 1;
      border-width: 2px;
      border-image-source: #dedddb;

      &:valid,
      &:focus,
      &:hover {
        border-image-source: linear-gradient(
          89.02deg,
          #377dff 1.68%,
          #2cb7f9 97.37%
        );
      }

      &:valid,
      &:focus {
        color: var(--primary);
      }
    }
  }

  &_checkbox {
    display: flex;
    @include toRem("margin-top", 20);
    @include toRem("margin-bottom", 40);
    user-select: none;

    input {
      display: none;
      &:checked {
        + label {
          &::before {
            background: url("./static/Checkmark-active.svg");
          }
        }
      }
    }

    label {
      position: relative;
      @include toRem("padding-left", 40);
      font-weight: 500;
      @include toRem("font-size", 18);
      line-height: 150%;
      color: var(--primary);
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background: url("./static/Checkmark.svg");
        background-size: 100% 100%;
      }
    }

    a {
      border-bottom: 1px dashed #8d8d8d;

      @media (hover) {
        &:hover {
          text-decoration: none;
          border-color: #377dff;
          color: #377dff;
        }
      }
    }
  }

  &_link {
    width: 100%;
    justify-content: center;
  }
}
</style>

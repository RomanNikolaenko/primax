<template>
  <section class="white-block form">
    <div class="form_container container">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        :field="slice.primary.title"
        class="form_title"
      />

      <form class="form_form">
        <PrismicRichText
          v-if="$prismic.asText(slice.primary.cabinetModeTitle)"
          :field="slice.primary.cabinetModeTitle"
          class="form_form-title"
        />

        <fieldset>
          <label for="radios_1">
            <input type="radio" id="radios_1" name="mode" checked />
            <i></i>
            <span>{{ slice.primary.radioTitle1 }}</span>
          </label>
          <label for="radios_2">
            <input type="radio" id="radios_2" name="mode" />
            <i></i>
            <span>{{ slice.primary.radioTitle2 }}</span>
          </label>
        </fieldset>

        <div class="form_fields">
          <PrismicRichText
            v-if="$prismic.asText(slice.primary.aboutYouTitle)"
            :field="slice.primary.aboutYouTitle"
            class="form_form-title"
          />

          <label>
            <input
              type="text"
              name="name"
              :placeholder="slice.primary.name"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="surname"
              :placeholder="slice.primary.surname"
              required
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              :placeholder="slice.primary.email"
              required
            />
          </label>
          <label>
            <input
              type="tel"
              name="phone"
              :placeholder="slice.primary.phone"
              required
            />
          </label>
          <label>
            <textarea
              name="message"
              :placeholder="slice.primary.message"
              required
            ></textarea>
          </label>
        </div>

        <div class="form_checkbox">
          <input type="checkbox" id="checkbox" required />
          <PrismicRichText
            v-if="$prismic.asText(slice.primary.privacyPolicy)"
            wrapper="label"
            for="checkbox"
            :field="slice.primary.privacyPolicy"
          />
        </div>

        <button class="link orangeBg form_link">
          {{ slice.primary.submitTitle }}
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionForm",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.form {
  @include property("padding-top", 160, 80);
  @include property("padding-bottom", 160, 80);

  &_title {
    font-weight: 600;
    @include property("font-size", 50, 22);
    line-height: 110%;
    text-align: center;
    color: var(--primary);
    margin: 0 auto;
    @include property("margin-bottom", 80, 40);
    max-width: 680px;
  }

  &_form {
    background: var(--white);
    border: 7px solid #ededff;
    box-shadow: 13.4163px 22.3604px 49.193px rgba(0, 56, 97, 0.1),
      10px 20px 50px rgba(0, 0, 0, 0.05);
    @include property("border-radius", 50, 30);
    max-width: 750px;
    margin: 0 auto;
    @include property("padding", 70, 20);
    @include property("border-radius", 50, 20);

    &-title {
      font-weight: 600;
      @include property("font-size", 35, 18);
      line-height: 110%;
      color: var(--primary);
    }

    > fieldset {
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      @include toRem("margin-top", 20);
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
        @include property("font-size", 20, 16);
        line-height: 160%;
        color: var(--secondary);
        @include toRem("padding-left", 40);
        @include toRem("margin", 20);
        @include toRem("margin-bottom", 10);
        margin-top: 0;
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
      @include property("font-size", 18, 16);
      line-height: 150%;
      color: var(--primary);
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        top: 2px;
        left: 0;
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

<template>
  <section class="white-block form">
    <div class="form_container container">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.title)"
        :field="slice.primary.title"
        class="form_title"
      />

      <form class="form_form" @submit.prevent="handleSubmit">
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

          <div class="form_group-wrap">
            <div
              class="form_group"
              :class="{
                invalid: $v.form.name.$dirty && !$v.form.name.required,
                valid: $v.form.name.required,
              }"
            >
              <label class="form_group-label" for="firstName">{{
                slice.primary.name
              }}</label>
              <input
                type="text"
                v-model="form.name"
                id="firstName"
                name="firstName"
                class="form_group-input"
              />
              <span
                v-if="$v.form.name.$dirty && !$v.form.name.required"
                class="form_group-error"
              >
                {{ slice.primary.nameError }}
              </span>
            </div>

            <div
              class="form_group"
              :class="{
                invalid: $v.form.surname.$dirty && !$v.form.surname.required,
                valid: $v.form.surname.required,
              }"
            >
              <label class="form_group-label" for="surname">{{
                slice.primary.surname
              }}</label>
              <input
                type="text"
                v-model="form.surname"
                id="surname"
                name="surname"
                class="form_group-input"
              />
              <span
                v-if="$v.form.surname.$dirty && !$v.form.surname.required"
                class="form_group-error"
              >
                {{ slice.primary.surnameError }}
              </span>
            </div>

            <div
              class="form_group"
              :class="{
                invalid:
                  ($v.form.email.$dirty && !$v.form.email.required) ||
                  ($v.form.email.$dirty && !$v.form.email.email),
                valid: $v.form.email.required && $v.form.email.email,
              }"
            >
              <label class="form_group-label" for="email">{{
                slice.primary.email
              }}</label>
              <input
                type="text"
                v-model="form.email"
                id="email"
                name="email"
                class="form_group-input"
              />
              <span
                v-if="
                  ($v.form.email.$dirty && !$v.form.email.required) ||
                  ($v.form.email.$dirty && !$v.form.email.email)
                "
                class="form_group-error"
              >
                {{ slice.primary.emailError }}
              </span>
            </div>

            <div
              class="form_group"
              :class="{
                invalid: $v.form.phone.$dirty && !$v.form.phone.required,
                valid: $v.form.phone.required,
              }"
            >
              <label class="form_group-label" for="phone">{{
                slice.primary.phone
              }}</label>
              <input
                type="number"
                v-model="form.phone"
                id="phone"
                name="phone"
                class="form_group-input"
              />
              <span
                v-if="$v.form.phone.$dirty && !$v.form.phone.required"
                class="form_group-error"
              >
                {{ slice.primary.phoneError }}
              </span>
            </div>

            <div
              class="form_group"
              :class="{
                valid: form.message.length > 0,
              }"
            >
              <label class="form_group-label" for="message">{{
                slice.primary.message
              }}</label>
              <textarea
                v-model="form.message"
                id="message"
                name="message"
                class="form_group-textarea"
                :maxlength="num"
              ></textarea>
              <span class="length"
                >{{ form.message.length || 0 }} / {{ num }}</span
              >
            </div>
          </div>
        </div>

        <div
          class="form_checkbox"
          :class="{ invalid: $v.form.checkbox.$error }"
        >
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            v-model="form.checkbox"
            @change="$v.form.checkbox.$touch()"
          />
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

import { required, email } from "vuelidate/lib/validators";

export default {
  name: "SectionForm",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),

  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
        checkbox: "",
      },
      num: 300,
    };
  },

  validations: {
    form: {
      name: { required },
      surname: { required },
      email: { required, email },
      phone: { required },
      checkbox: {
        required(val) {
          return val;
        },
      },
    },
  },

  methods: {
    handleSubmit() {
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
  },
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
    @include toRem("margin-top", 20);

    // textarea {
    //   @include toRem("min-height", 150);
    // }

    // input {
    //   line-height: 40px;
    // }

    // input,
    // textarea {
    //   width: 100%;
    //   color: var(--secondary);

    //   border: 2px solid;
    //   border-image-slice: 2;
    //   border-width: 2px;
    //   border-image-source: linear-gradient(
    //     89.02deg,
    //     #dedddb 1.68%,
    //     #dedddb 97.37%
    //   );

    //   &:valid,
    //   &:focus,
    //   &:hover {
    //     border-image-source: linear-gradient(
    //       89.02deg,
    //       #377dff 1.68%,
    //       #2cb7f9 97.37%
    //     );
    //   }

    //   &:valid,
    //   &:focus {
    //     color: var(--primary);
    //   }
    // }
  }

  &_group {
    position: relative;
    @include toRem("margin-bottom", 40);

    &:first-of-type {
      @include toRem("margin-top", 40);
    }

    &-label {
      position: absolute;
      top: 27px;
      left: 5px;
      transform: translateY(-50%);
      color: var(--secondary);
      transition: all 0.2s;

      .invalid & {
        top: -7px;
        color: #ff3737;
      }

      .valid & {
        top: -7px;
        color: var(--primary);
      }
    }

    &-input,
    &-textarea {
      padding: 5px;
      width: 100%;
      color: var(--primary);
      line-height: 40px;
      border-bottom: 2px solid;
      border-image-slice: 2;
      border-image-source: linear-gradient(
        89.02deg,
        #dedddb 1.68%,
        #dedddb 97.37%
      );

      .invalid & {
        border-image-source: linear-gradient(
          89.02deg,
          #ff3737 1.68%,
          #f92c2c 97.37%
        );
      }

      .valid & {
        border-image-source: linear-gradient(
          89.02deg,
          #377dff 1.68%,
          #2cb7f9 97.37%
        );
      }
    }

    &-textarea {
      min-height: 150px;
      padding-bottom: 20px;
      resize: vertical;
    }

    .length {
      position: absolute;
      bottom: 13px;
      width: fit-content;
      right: 15px;
      font-size: 12px;
      line-height: 1;
      color: var(--secondary);
    }

    &-error {
      color: #ff3737;
    }
  }

  &_checkbox {
    display: flex;
    @include toRem("margin-top", 20);
    @include toRem("margin-bottom", 40);
    user-select: none;

    &.invalid {
      label {
        &::before {
          background-image: url("./static/Checkmark-error.svg");
        }
      }
    }

    input {
      display: none;
      &:checked {
        + label {
          &::before {
            background-image: url("./static/Checkmark-active.svg");
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
        background-image: url("./static/Checkmark.svg");
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

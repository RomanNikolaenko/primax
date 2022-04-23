<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="footer_wrap">
        <div class="primax">
          <BaseIcon class="primax-icon" name="logoWhite" viewBox="0 0 137 25" />
          <PrismicRichText
            v-if="$prismic.asText(footer.data.text)"
            :field="footer.data.text"
            class="primax-text"
          />
        </div>

        <div class="footer_columns">
          <div class="column">
            <PrismicRichText
              v-if="$prismic.asText(footer.data.listTitle1)"
              wrapper="h3"
              :field="footer.data.listTitle1"
              class="column_title"
            />
            <ul class="column_list">
              <li
                class="list-item"
                v-for="(item, index) in navigation.data.lists"
                :key="index"
              >
                <PrismicLink
                  v-if="$prismic.asLink(item.link)"
                  :field="item.link"
                  class="list-link"
                >
                  {{ item.linkTitle }}
                </PrismicLink>
              </li>
            </ul>
          </div>

          <div class="column">
            <PrismicRichText
              v-if="$prismic.asText(footer.data.listTitle2)"
              wrapper="h3"
              :field="footer.data.listTitle2"
              class="column_title"
            />
            <ul class="column_list">
              <li
                class="list-item"
                v-for="(item, index) in footer.data.list2"
                :key="index"
              >
                <PrismicLink class="list-link" :field="item.link">{{
                  item.linkTitle
                }}</PrismicLink>
              </li>
            </ul>
          </div>

          <div class="column">
            <PrismicRichText
              v-if="$prismic.asText(footer.data.listTitle3)"
              wrapper="h3"
              :field="footer.data.listTitle3"
              class="column_title"
            />
            <ul class="column_list">
              <li
                class="list-item"
                v-for="(item, index) in footer.data.list3"
                :key="index"
              >
                <PrismicLink class="list-link" :field="item.link">{{
                  item.linkTitle
                }}</PrismicLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer_copy">
        <span>© Primax, {{ localeDate }}</span>

        <div class="socials">
          <PrismicLink
            v-for="(item, index) in footer.data.socials"
            :key="index"
            :field="item.link"
            class="socials_link"
          >
            <PrismicImage
              class="socials_icon"
              :field="item.img"
              width="54"
              height="54"
            />
          </PrismicLink>
        </div>

        <div class="designed">
          <a
            class="designed-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Designed by</span>
            <BaseIcon
              class="designed-icon"
              name="cosmos"
              viewBox="0 0 100 19"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: { BaseIcon },

  props: {
    footer: {
      type: Object,
      required: true,
    },
  },

  computed: {
    navigation() {
      return this.$store.state.prismic.navigation;
    },

    localeDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.footer {
  background: var(--darkBlue);

  &_container {
    max-width: 1540px;
    width: 100%;
    margin: 0 auto;
    @include property('padding-top', 150, 80);
    @include property('padding-bottom', 60, 40);
    @include property('padding-left', 30, 20);
    @include property('padding-right', 30, 20);
  }

  &_wrap {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 345px 1fr;
    @include property("gap", 140, 40, true, 1640, 1200);
    @include property('margin-bottom', 60, 40);
    color: var(--tertiary);

    @media (max-width: 1199.98px) {
      grid-template-columns: 1fr;
    }
  }

  &_columns {
    display: grid;
    justify-content: space-between;
    @include toRem("gap", 40);

    @media (min-width: 992px) and (max-width: 1199.98px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 230px);
    }
  }

  &_copy {
    display: grid;
    grid-template-columns: 215px 1fr 215px;
    @include toRem("gap", 20);
    align-items: center;
    @include property('padding-top', 60, 40);
    border-top: 1px solid #778ab9;

    @media (max-width: 1023.98px) {
      grid-template-columns: auto 1fr auto;
    }

    @media (max-width: 767.98px) {
      grid-template-columns: 1fr;
    }

    > span {
      color: #abafc7;
      font-weight: 600;
      @include property('font-size', 20, 16);
      line-height: 160%;

      @media (max-width: 767.98px) {
        line-height: 150%;
      }
    }
  }
}

.column {
  &_title {
    font-weight: 600;
    @include property('font-size', 28, 18);
    line-height: 160%;
    @include property('margin-bottom', 20, 15);
  }

  &_list {
    &-item {
      &:not(:last-child) {
        @include toRem("margin-bottom", 10);
      }
    }

    &-link {
      font-weight: 600;
      @include property('font-size', 20, 16);
      line-height: 160%;
      word-break: break-all;

      @media (max-width: 767.98px) {
        line-height: 150%;
      }

      @media (hover) {
        &:hover {
          text-decoration: none;
          color: var(--accent);
        }
      }
    }
  }
}

.list {
  &-item {
    &:not(:last-child) {
      @include toRem("margin-bottom", 10);
    }
  }

  &-link {
    font-weight: 600;
    @include property('font-size', 20, 16);
    line-height: 160%;
    word-break: break-all;

    background-image: linear-gradient(
      89.02deg,
      #377dff 1.68%,
      #2cb7f9 50%,
      var(--white) 50%
    );
    background-size: 200% 100%;
    background-position-x: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    &[href^="mailto:"] {
      background-image: linear-gradient(
        89.02deg,
        #377dff 1.68%,
        #2cb7f9 50%,
        var(--accent) 50%
      );
    }

    @media (max-width: 767.98px) {
      line-height: 150%;
    }

    @media (hover) {
      &:hover {
        text-decoration: none;
        background-position-x: 0%;
      }
    }
  }
}

.designed {
  display: flex;
  align-items: center;
  
  @media (max-width: 767.98px) {
    @include toRem("margin-top", 10)
  }

  span {
    display: inline-block;
    @include toRem("margin-right", 10);
  }

  &-link {
    display: inline-flex;

    @media (hover) {
      &:hover {
        text-decoration: none;

        .designed-icon {
          stop:first-child {
            stop-color: #377dff;
          }

          stop:last-child {
            stop-color: #2cb7f9;
          }
        }
      }
    }
  }

  &-icon {
    width: 100px;

    stop {
      transition: all 0.2s ease-in-out;
    }
  }
}

.primax {
  &-icon {
    display: block;
    width: 136px;
    height: 25px;
    @include toRem("margin-bottom", 20);
  }

  &-text {
    font-weight: 700;
    @include property('font-size', 18, 16);
    line-height: 150%;
  }
}

.socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  @include toRem("margin-left", -7);
  @include toRem("margin-right", -7);

  @media (max-width: 767.98px) {
    justify-content: flex-start;
  }

  @media (max-width: 767.98px) {
    justify-content: space-between;
  }

  &_link {
    display: inline-flex;
    border-radius: 50%;
    margin: 0;
    @include toRem("margin-left", 7);
    @include toRem("margin-right", 7);
    background-image: linear-gradient(
      90deg,
      #2f69ff 1.68%,
      #367cff 50%,
      rgba(255, 255, 255, 0.1) 50%
    );
    background-size: 210% 100%;
    background-position-x: 99%;
    transform-origin: center;
    overflow: hidden;

    @media (hover) {
      &:hover {
        text-decoration: none;
        background-position-x: 0%;
      }
    }
  }

  &_icon {
    width: 54px;
    height: 54px;
    fill: var(--base);
    @include toRem("padding", 15);
  }
}
</style>

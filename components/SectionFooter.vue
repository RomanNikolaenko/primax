<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="footer_wrap">
        <div class="primax">
          <BaseIcon class="primax-icon" name="logoWhite" viewBox="0 0 137 25" />
          <p class="primax-text">{{ data.text }}</p>
        </div>

        <div class="footer_columns">
          <div class="column">
            <h3 class="column_title">{{ data.list1Title }}</h3>
            <ul class="column_list">
              <li
                class="list-item"
                v-for="(item, index) in data.list1"
                :key="index"
              >
                <PrismicLink class="list-link" :field="item.link">{{
                  item.title
                }}</PrismicLink>
              </li>
            </ul>
          </div>

          <div class="column">
            <h3 class="column_title">{{ data.list2Title }}</h3>
            <ul class="column_list">
              <li
                class="list-item"
                v-for="(item, index) in data.list2"
                :key="index"
              >
                <PrismicLink class="list-link" :field="item.link">{{
                  item.title
                }}</PrismicLink>
              </li>
            </ul>
          </div>

          <div class="column">
            <h3 class="column_title">{{ data.list3Title }}</h3>
            <ul class="column_list">
              <li
                class="list-item"
                v-for="(item, index) in data.list3"
                :key="index"
              >
                <PrismicLink class="list-link" :field="item.link">{{
                  item.title
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
            class="socials_link"
            v-for="(item, index) in data.socials"
            :key="index"
            :field="item.link"
          >
            <PrismicImage class="socials_icon" :field="item.img" width="54" height="54" />
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

  props: ["data"],

  computed: {
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
    padding: 150px 30px 60px;

    @media (max-width: 767.98px) {
      padding: 80px 30px 40px;
    }
  }

  &_wrap {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 345px 1fr;
    @include property("gap", 140, 40, true, 1640, 1200);
    margin-bottom: 60px;
    color: var(--tertiary);

    @media (max-width: 1199.98px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 767.98px) {
      margin-bottom: 40px;
    }
  }

  &_columns {
    display: grid;
    justify-content: space-between;
    gap: 40px;

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
    gap: 20px;
    align-items: center;
    padding-top: 60px;
    border-top: 1px solid #778ab9;

    @media (max-width: 1023.98px) {
      grid-template-columns: auto 1fr auto;
    }

    @media (max-width: 767.98px) {
      padding-top: 40px;
      grid-template-columns: 1fr;
    }

    > span {
      color: #abafc7;
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;

      @media (max-width: 767.98px) {
        font-size: 18px;
        line-height: 150%;
      }
    }
  }
}

.column {
  --size: 25px;

  @media (max-width: 767.98px) {
    --size: 20px;
  }

  &_title {
    font-weight: 600;
    font-size: var(--size);
    line-height: 160%;
    margin-bottom: calc(var(--size) - 5px);
  }

  &_list {
    &-item {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &-link {
      font-weight: 600;
      font-size: 20px;
      line-height: 160%;
      word-break: break-all;

      @media (max-width: 767.98px) {
        font-size: 18px;
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
      margin-bottom: 10px;
    }
  }

  &-link {
    font-weight: 600;
    font-size: 20px;
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
      font-size: 18px;
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
  flex-wrap: wrap;

  span {
    display: inline-block;
    margin-right: 10px;
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
      transition: all 0.4s ease-in-out;
    }
  }
}

.primax {
  &-icon {
    display: block;
    width: 136px;
    height: 25px;
    margin-bottom: 20px;
  }

  &-text {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
  }
}

.socials {
  display: flex;
  justify-content: center;
  margin: 0 -7px;

  @media (max-width: 767.98px) {
    justify-content: flex-start;
  }

  &_link {
    display: inline-flex;
    border-radius: 50%;
    margin: 0 7px;
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
    padding: 15px;
  }
}
</style>

<template>
  <section class="section policy-term white-block">
    <div class="policy-term_container container">
      <PrismicRichText :field="slice.primary.text" />
    </div>
  </section>
</template>


<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "SectionPolicyAndTerms",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins";

.policy-term {
  padding-top: 110px;
  padding-bottom: 30px;
  color: var(--primary);

  &_container {
    max-width: 940px;
  }

  h1 {
    font-weight: 600;
    @include property("font-size", 64, 40);
  }

  h2 {
    font-weight: 600;
    @include property("font-size", 40, 32);
    margin-bottom: 1em;
  }

  h2 {
    font-weight: 600;
    @include property("font-size", 34, 28);
    margin-bottom: 1em;
  }

  h3 {
    font-weight: 600;
    @include property("font-size", 28, 24);
    margin-bottom: 1em;
  }

  h4 {
    font-weight: 600;
    @include property("font-size", 24, 20);
    margin-bottom: 1em;
  }

  h5 {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 1em;
  }

  h6 {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1em;
  }

  ul,
  ol {
    margin: 1rem 0;
    list-style-type: initial;
    padding-left: 20px;
  }
}
</style>

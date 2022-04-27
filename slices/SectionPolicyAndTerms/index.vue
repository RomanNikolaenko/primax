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
  @include property('padding-top', 170, 120, true, 1024, 576);
  padding-bottom: 30px;
  color: var(--primary);

  h2 {
    font-size: 2rem;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1em;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1em;
  }

  h5 {
    font-size: 1.1rem;
    margin-bottom: 1em;
  }

  h6 {
    font-size: 1rem;
    margin-bottom: 1em;
  }

  ul, ol {
    margin: 1rem 0;
    list-style-type: initial;
    padding-left: 20px;
  }
}
</style>

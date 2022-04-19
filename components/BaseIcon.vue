<template>
  <svg
    :viewBox="$attrs.viewBox || '0 0 137 25'"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  ></svg>
</template>

<script>
import icons from "../icons";
export default {
  name: "BaseIcon",
  props: ["name"],
  data() {
    return {
      path: icons[this.name],
    };
  },
};
</script>

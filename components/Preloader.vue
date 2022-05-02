<template>
  <transition name="fade">
    <div v-if="show" class="preloader"></div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  mounted() {
    this.$nextTick(function () {
      this.show = false;
    });
  },
};
</script>

<style lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: var(--white);
  inset: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
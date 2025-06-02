<template>
  <div class="layout">
    <div class="bg-white"></div>
    <div class="bg-light-blue" :style="{ backgroundColor: bgColor }"></div>
    <div class="bg-pattern"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    bgColor() {
      if (this.product.category === "men's clothing") {
        return 'var(--ecommerce-light-blue)';
      } else if (this.product.category === "women's clothing") {
        return 'var(--ecommerce-pink)';
      } else {
        return 'var(--ecommerce-light-gray)';
      }
    }
  }
};
</script>

<style scoped>
.bg-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--ecommerce-white);
  z-index: 1;
}

.bg-light-blue {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65%;
  z-index: 2;
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-image: url('@/assets/images/bg-pattern.svg');
  background-size: cover;
  background-position: center;
  z-index: 3;
  opacity: 0.8;
}
</style>
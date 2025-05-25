<template>
  <button
    :class="['custom-button', buttonType]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>


<script>
export default {
  name: 'CustomButton',
  props: {
    buttonType: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    handleClick(event){
      this.$emit('click', event)
    }
  }
}
</script>


<style>
.custom-button {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  width: 50%;
}

.custom-button.primary {
  border: 3px solid var(--ecommerce-dark-blue);
  background-color: var(--ecommerce-dark-blue);
  color: var(--ecommerce-white);
}

.custom-button.secondary {
  border: 3px solid var(--ecommerce-dark-blue);
  background-color: var(--ecommerce-white);
  color: var(--ecommerce-dark-blue);
}
</style>
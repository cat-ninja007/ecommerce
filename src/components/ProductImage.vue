<template>
  <div class="product-image-container" v-if="product">
    <img :src="product.image" alt="Product Image" class="product-image" />
  </div>
</template>

<script>
export default {
  name: 'ProductImage',
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  watch: {
    productId: 'fetchProduct', 
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      fetch(`https://fakestoreapi.com/products/${this.productId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.product = data; 
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    },
  },
};
</script>

<style scoped>
.product-image-container {
  max-width: 100%; 
  height: auto;
}
.product-image{
  width: 300px;
}
</style>
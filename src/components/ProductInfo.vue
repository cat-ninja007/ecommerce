<template>
  <div class="product-info-container" v-if="product">
    <div class="product-title-container">
      <h2 :style="{ color: titleColor }" class="product-title">{{ product.title }}</h2>
    </div>
    <div class="product-category-rating-container">
      <div class="product-category-container">
        <p class="product-category">{{ product.category }}</p>
      </div>
      <div class="product-rating-container">
        <p class="product-rating">{{ product.rating.rate }}/5</p>
      </div>
    </div>
    <hr>
    <div class="product-description-container">
      <p class="product-description">{{ product.description }}</p>
    </div>
    <hr>
    <div class="product-price-container">
      <p :style="{ color: priceColor }" class="product-price">${{ product.price }}</p>
    </div>
    <div class="button-container">
      <CustomButton :style="{ backgroundColor: buttonBgColor, borderColor: buttonBorderColor, color: buttonTextColor }"  buttonType="primary" @click="buyNow">Buy Now</CustomButton>
      <CustomButton :style="{ color: buttonTextColor }"  buttonType="secondary" @click="nextProduct">Next Product</CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from './Button.vue';

export default {
  name: 'ProductInfo',
  components: {
    CustomButton,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
    titleColor: {
      type: String,
      default: 'black',
    },
    priceColor: {
      type: String,
      default: 'black',
    },
    buttonBgColor: {
      type: String,
      default: 'lightgray',
    },
    buttonBorderColor: {
      type: String,
      default: 'black',
    },
    buttonTextColor: {
      type: String,
      default: 'black',
    },
  },
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    this.fetchProduct();
  },
  watch: {
    productId: 'fetchProduct',
  },
  methods: {
    buyNow() {
      console.log('Buy now button clicked!');
    },
    nextProduct() {
      this.$emit('next-product');
    },
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
          this.$emit('category-changed', data.category);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    },
  },
};
</script>

<style scoped>
.product-title-container{
  padding-bottom: 1rem;
}

.product-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--ecommerce-dark-blue);
}

.product-category-rating-container{
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
}
.product-category {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--ecommerce-dark-gray);
}

.product-rating {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--ecommerce-black);
}

.product-description-container {
  padding-top: 20px;
  margin-bottom: 100px;
}


.product-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--ecommerce-black);
}

.product-price-container{
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.product-price {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0%;
  color: var(--ecommerce-dark-blue);
}

.button-container {
  /* border: 2px solid orange; */
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.buy-now-button {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  width: 50%;
  padding: 8px;
  border: 3px solid var(--ecommerce-dark-blue);
  background-color: var(--ecommerce-dark-blue);
  color: var(--ecommerce-white);
  border-radius: 4px;
  cursor: pointer;
}

.next-product-button {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  width: 50%;
  padding: 8px;
  border: 3px solid var(--ecommerce-dark-blue);
  background-color: var(--ecommerce-white);
  color: var(--ecommerce-dark-blue);
  border-radius: 4px;
  cursor: pointer;
}
</style>
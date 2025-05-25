<template>
  <div class="page">
    <div class="bg-white"></div>
    <div class="bg-color" :style="{ backgroundColor: bgColor }"></div>
    <div class="bg-pattern"></div>
    <div class="content-box">
      <div class="content">
        <ProductImage :productId="currentProductId" />
        <ProductInfo 
          :productId="currentProductId" 
          @next-product="loadNextProduct" 
          @category-changed="updateBgColor" 
          :titleColor="titleColor"
          :priceColor="priceColor"
          :buttonBgColor="buttonBgColor"
          :buttonBorderColor="buttonBorderColor"
          :buttonTextColor="buttonTextColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductImage from './ProductImage.vue';
import ProductInfo from './ProductInfo.vue';
import '../assets/styles/color.css';

export default {
  name: 'ProductLayout',
  components: {
    ProductImage,
    ProductInfo,
  },
  data() {
    return {
      currentProductId: 1,
      bgColor: 'var(--ecommerce-light-gray)',
      titleColor: 'black',
      priceColor: 'black',
      buttonBgColor: 'lightgray',
      buttonBorderColor: 'black',
      buttonTextColor: 'black',
    };
  },
  methods: {
    loadNextProduct() {
      this.currentProductId++;
      if (this.currentProductId > 20) {
        this.currentProductId = 1;
      }
    },
    updateBgColor(category) {
      if (category === "men's clothing") {
        this.bgColor = 'var(--ecommerce-light-blue)';
        this.titleColor = 'var(--ecommerce-dark-blue)';
        this.priceColor = 'var(--ecommerce-dark-blue)';
        this.buttonBgColor = 'var(--ecommerce-light-blue)';
        this.buttonBorderColor = 'var(--ecommerce-dark-blue)';
        this.buttonTextColor = 'white';
      } else if (category === "women's clothing") {
        this.bgColor = 'var(--ecommerce-pink)';
        this.titleColor = 'var(--ecommerce-dark-pink)';
        this.priceColor = 'var(--ecommerce-dark-pink)';
        this.buttonBgColor = 'var(--ecommerce-pink)';
        this.buttonBorderColor = 'var(--ecommerce-dark-pink)';
        this.buttonTextColor = 'white';
      } else {
        this.bgColor = 'var(--ecommerce-light-gray)';
        this.titleColor = 'black';
        this.priceColor = 'black';
        this.buttonBgColor = 'lightgray';
        this.buttonBorderColor = 'black';
        this.buttonTextColor = 'black';
      }
    },
  },
};
</script>

<style>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--ecommerce-white); 
}

.bg-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--ecommerce-white);
  z-index: 1;
}


.bg-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background-color: var(--ecommerce-light-blue);
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


.content-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1034px;
  height: 580px;
  background-color: white;
  z-index: 4;
  box-shadow: 2px 4px 21px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 10px;
  
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  gap: 76px;
}

</style>
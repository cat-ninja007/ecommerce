<template>
  <DefaultLayout :product="product">
    <div class="content-box">
      <div v-if="loading" class="loader" :style="{ borderTopColor: categoryColor }"></div> 
      <div v-if="product && isValidCategory" class="content">
        <div class="product-image-container">
          <img class="product-image" :src="product.image" alt="Product Image" />
        </div>
        <div class="product-info-container">
          <h2 class="product-title" :style="{ color: categoryColor }">{{ product.title }}</h2>
          <div class="product-category-rating-container">
            <p class="product-category" :style="{ color: categoryColor }">{{ product.category }}</p>
            <div class="rating-container">


              <p class="product-rating">{{ product.rating.rate }}/5</p>
              <div class="rating-circles">
                <span v-for="index in 5" :key="index" :class="circleClass(index)"
                  :style="{ borderColor: categoryColor, backgroundColor: filledCircle(index) ? categoryColor : 'transparent' }">
                </span>
              </div>
            </div>
          </div>
          <hr />
          <p class="product-description">{{ product.description }}</p>
          <hr />
          <p class="product-price" :style="{ color: categoryColor }">${{ product.price }}</p>
          <div class="button-container">
            <button class="buy-now-button" :style="{ backgroundColor: categoryColor, borderColor: categoryColor }">Buy
              Now</button>
            <button @click="nextProduct" class="next-product-button"
              :style="{ color: categoryColor, borderColor: categoryColor }">Next Product</button>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="unavailable-container">
          <div class="unavailable-image-container">
            <img src="../assets//images//sad-face.png" alt="">
          </div>
          <div class="info-container">
            <p class="unavailable-text">This product is unavailable to show</p>
            <button @click="nextProduct" class="next-product-button"
              :style="{ color: categoryColor, borderColor: categoryColor, width: '465px' }">Next Product</button>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import '../assets/styles/color.css'

export default {
  name: "ProductPage",
  components: { DefaultLayout },
  data() {
    return {
      product: null,
      isValidCategory: false,
      totalProducts: 0, 
      loading: true
    };
  },
  computed: {
    categoryColor() {
      if (this.product) {
        if (this.product.category === "men's clothing") {
          return 'var(--ecommerce-dark-blue)';
        } else if (this.product.category === "women's clothing") {
          return 'var(--ecommerce-purple)';
        } else {
          return 'var(--ecommerce-dark-gray)';
        }
      }
      return '';
    },
  },
  methods: {
    filledCircle(index) {
      const rating = this.product?.rating.rate || 0;
      return index <= Math.floor(rating);
    },
    circleClass(index) {
      const rating = this.product?.rating.rate || 0;
      return index <= Math.floor(rating) ? 'filled-circle' : 'border-circle';
    },
    fetchProduct() {
      const productId = this.$route.params.id;
      this.loading = true;
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.product = data;
          this.isValidCategory = data.category === "men's clothing" || data.category === "women's clothing";
          this.$emit("category-changed", data.category);
        })
        .catch((error) => {
          console.error("There has been a problem with your fetch operation:", error);
          this.product = null;
          this.isValidCategory = false;
        })
        .finally(() => {
          this.loading = false; 
        });
    },
    fetchTotalProducts() {
      fetch(`https://fakestoreapi.com/products`)
        .then((response) => response.json())
        .then((data) => {
          this.totalProducts = data.length; 
        })
        .catch((error) => {
          console.error("Error fetching total products:", error);
        });
    },
    nextProduct() {
      const currentId = parseInt(this.$route.params.id);
      let nextId = currentId + 1;

      
      if (nextId > this.totalProducts) {
        nextId = 1;
      }

      this.$router.push(`/products/${nextId}`); 
    },
  },
  watch: {
    $route: "fetchProduct",
  },
  mounted() {
    this.fetchProduct();
    this.fetchTotalProducts();
  },
};
</script>

<style scoped>
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

.product-title {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 100%;
}

.product-category-rating-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
}

.product-rating {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: var(--ecommerce-black);
}

.product-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: var(--ecommerce-black);
}

.product-price {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 28px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.buy-now-button {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  width: 50%;
  padding: 8px;
  border: 3px solid var(--ecommerce-dark-blue);
  color: var(--ecommerce-white);
  border-radius: 4px;
  cursor: pointer;
}

.next-product-button {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  width: 50%;
  padding: 8px;
  border: 3px solid var(--ecommerce-dark-blue);
  color: var(--ecommerce-dark-blue);
  border-radius: 4px;
  cursor: pointer;
  background-color: var(--ecommerce-white);
}

.product-image-container {
  max-width: 100%;
  height: auto;
}

.product-image {
  width: 300px;
}

.info-container {
  position: absolute;
}

.unavailable-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 1rem;
  text-align: center;
}

.unavailable-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 10%;
}

.rating-container{
  display: flex;
  gap: 5px;
}

.rating-circles {
  display: flex;
  align-items: center;
  gap: 4px;
}

.filled-circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--ecommerce-dark-blue);
  background-color: var(--ecommerce-dark-blue);
}

.border-circle {
  width: 18px;
  height: 18px;
  border: 2px solid var(--ecommerce-dark-blue);
  border-radius: 50%;
  background-color: transparent;
}

.loader {
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
  z-index: 5; 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
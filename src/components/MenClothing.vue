<template>
  <div class="page">
    <div class="bg-white"></div>
    <div class="bg-light-blue"></div>
    <div class="bg-pattern"></div>
    <div class="content-box">
      <!-- Konten di dalam kotak -->
      <!-- <h1>Konten Utama</h1> -->
       <div class="content">
        <div class="product-image-container">
          <img src="../assets//images/image 2.png" alt="">
        </div>
        <div class="product-info-container">
          <div class="product-title-container">
            <h2 class="product-title">Mens Casual Slim Fit</h2>
          </div>
          <div class="product-category-rating-container">
            <div class="product-category-container">
              <p class="product-category">men's casual clothing</p>
            </div>
            <div class="product-rating-container">
              <p class="product-rating">2.9/5</p>
            </div>
          </div>
          <hr>
          <div class="product-description-container">
            <p class="product-description">great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.</p>
          </div>
          <hr>
          <div class="product-price-container">
            <p class="product-price">
              $29.95
            </p>
          </div>
          <div class="button-container">
            <button class="buy-now-button">Buy Now</button>
            <button class="next-product-button">Next Product</button>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import '../assets/styles/color.css'

export default {
  name: 'CustomLayout',
}
</script>

<style scoped>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--ecommerce-white); /* fallback */
}

/* Lapisan 1 - Putih */
.bg-white {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--ecommerce-white);
  z-index: 1;
}

/* Lapisan 2 - Biru Muda (menyisakan 35%) */
.bg-light-blue {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background-color: var(--ecommerce-light-blue);
  z-index: 2;
}

/* Lapisan 3 - Pattern Image (menyisakan 20%) */
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
  opacity: 0.8; /* opsional, kalau ingin transparan */
}

/* Lapisan 4 - Kotak Konten */
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
  /* text-align: center; */
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  /* border: 2px solid red; */
  gap: 76px;
}

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
  border: 2px solid orange;
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
}
</style>

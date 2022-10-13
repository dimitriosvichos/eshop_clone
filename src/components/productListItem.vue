<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useCartStore } from '../stores/state'

const storeCart = useCartStore()
const data = ref(null)

axios.get('https://fortnite-api.theapinetwork.com/store/get')
  .then(response => {
    data.value = response.data.data
  })
  .catch(error => {
    console.log(error)
  })
</script>

<template>
    <div class="wrapper">
        <div v-for="n in data" :key="n.itemId" class="product-list">
            <div class="container">
            <div class="product-image">
                <img :src="n.item.images.icon" />
            </div>
            <div class="main-data">
                <h2>{{ n.item.name }}</h2>
                <p>Price: {{ n.store.cost }}</p>

                <div v-if="n.store.isFeatured" class="cart-button">
                <button @click="storeCart.addItem(n)">Buy it</button>
                </div>
                <div v-else class="cart-button-disabled">
                <button type="button" disabled>Sold out</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
}

.container {
  width: 300px;
  background-color: #2C2F33;
  margin: 8px;
  color: white;
}

.product-image > img { width: 100%; }

.main-data {
  height: 163px;
  padding: 30px;
  background-color: #23272A;
}

.main-data > h2 {
  font-size: 1.3rem;
  margin: 0;
}

.cart-button { text-align: center; }

.cart-button > button {
  background-color: #5865F2;
  border: 0;
  border-radius: 5rem;
  color: white;
  width: 100%;
  padding: 0.9rem 0;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 800;
}

.cart-button-disabled > button {
  border: 0;
  border-radius: 5rem;
  color: white;
  width: 100%;
  padding: 0.9rem 0;
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 800;
}

.cart-button > button:hover {
  background-color: #404EED;
  transition: 200ms ease-in-out;
}
</style>
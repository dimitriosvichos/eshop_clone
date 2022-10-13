<script setup>
import { useCartStore } from '../stores/state'

const storeCart = useCartStore()
</script>

<template>
    <h2>My Cart</h2>
    <div v-if="storeCart.items.length === 0" class="cart-empty">
        <p>Your cart is empty</p>
    </div>
    <div v-else class="cart-list">
        <div v-for="n in storeCart.items" :key="n.itemId" class="cart-item">
            <div class="cart-item-image">
                <img :src="n.item.images.icon" />
            </div>
            <div class="cart-item-data">
                <h3>{{ n.item.name }}</h3>
                <p>Price: {{ n.store.cost }}</p>
            </div>
            <div class="quantity-section">
                <button @click="storeCart.removeItem(n)">-</button>
                <p>{{ n.store.occurrences }}</p>
                <button @click="storeCart.addItem(n)">+</button>
            </div>
            <button @click="storeCart.removeItemIndex(n)">Remove</button>
        </div>
    </div>
</template>


<style>

h2 { text-align: center; }

.cart-empty { 
    text-align: center; 
    font-size: 1.6rem;
}
.cart-list {
    max-width: 700px;
    border: 2px solid black;
    margin: 0 auto;
    color: black;
    padding: 30px;

}

.cart-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    margin: 20px 0;
    box-shadow: -1px 1px 31px 6px rgba(0,0,0,0.10);
}

.cart-item-image {
    text-align: center;
    width: 250px;
}

.cart-item-image > img { width: 30%; }

.cart-item-data {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 50%;
}

.quantity-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 15%;
}
</style>
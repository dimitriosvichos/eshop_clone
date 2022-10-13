<script>
import { useCartStore } from '../stores/state'

export default {
    name: 'NavigationMenu',
    setup() {
        const storeCart = useCartStore()
        return {
            storeCart
        }
    }
}
</script>

<template>
    <nav class="navigation-menu">
        <div class="icon-text">
            Dimitris Vichos
        </div>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/product-list">Product list</RouterLink></li>
            <li class="cart"><RouterLink to="/cart">Cart ({{ storeCart.items.length }})</RouterLink></li>
        </ul>
    </nav>
</template>


<style>
.icon-text {
    color: white;
    font-size: 2rem;
}

.navigation-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    background-color: #5865F2;
}

ul {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0;
}

li {
    padding: 4px;
    margin: 0 10px;
    list-style-type: none;
    /* me auton ton tropo mporoume na kanoume to border oti xrwma theloume xwris na ksekinaei apo to mavro */
    border: 1px solid transparent;
}

.cart {
    background-color: white;
    border-radius: 50px;
}

.cart a {
    color: black;
    font-weight: 800;
    padding: 14px;
}

li:hover {
    border-bottom: 1px solid white;
    transition: 300ms;
}

a {
    color: white;
    text-decoration: none;
}

</style>
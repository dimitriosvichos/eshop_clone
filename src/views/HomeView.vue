<script setup>
import { defineStore } from 'pinia'
import sliderCompVue from '../components/sliderComp.vue';
</script>

<template>
  <main>
    <sliderCompVue />
    
    <h1 style="margin: 100px 0 30px 0;">About Me</h1>

    <div class="wrapper">
      <div class="card-frame">
        <div class="left-side-card">
          <h2>Dimitris Vichos</h2>

          <span>Junior Frontend Developer</span>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ex unde autem illo asperiores reiciendis dolorem quisquam at explicabo consequuntur aliquid rem, ipsam quas provident impedit odit! Repudiandae, temporibus saepe?</p>
          
          <p style="text-align: center; font-weight: bold">Contact me:</p>
          
          <div class="contact-section">
            <p><a href="mailto:jimvichos@gmail.com">jimvichos@gmail.com</a></p>
            <p><a href="tel:+306984968184">+306984968184</a></p>
          </div>
          
        </div>

        <div class="right-side-card">
          <img src="../assets/me.jpg" alt="dimitris-vichos" width="500">
        </div>
    </div>
    </div>

  </main>
</template>

<style scoped>

h1 { text-align: center; }

.wrapper {
  display: flex;
  justify-content: center;
  margin: 0 0 100px 0;
}
.card-frame {
  display: flex;
  margin: 14px;
  width: 1000px;
  border-radius: 20px;
  box-shadow: -1px 1px 31px 6px rgba(0,0,0,0.37);
}

.right-side-card > img { 
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 0px 20px 20px 0px;
}

.left-side-card {
  width: 50%;
  float: left;
  text-align: left;
  padding: 40px;
}

.left-side-card > h2 { margin: 0; }

.contact-section {
  display: flex;
  justify-content: space-around;
}
.contact-section > p {
  margin: 0;
}

.right-side-card {
  width: 50%;
  float: right;
}

a {
  color: black;
}

</style>

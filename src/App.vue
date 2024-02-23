<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import PaymentSheet from "./components/PaymentSheet.vue";
import Products from "./components/Products.vue";
import { stores } from "./store";
stores.volume = parseInt(localStorage.getItem("volume") || "25");
</script>

<template>
  <Navbar class="fixed top-0 left-0 right-0" />
  <section class="flex h-[96.5vh] pt-[88px] px-4 mt-4 gap-4 overflow-auto">
    <Products />
    <PaymentSheet />
  </section>
</template>

<style></style>

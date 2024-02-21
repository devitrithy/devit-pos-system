<script setup lang="ts">
import { stores } from "@/store";
</script>
<template>
  <aside class="w-1/3 h-full bg-container rounded-md shadow-md sticky top-0">
    <!--  -->
    <div v-for="cart in stores.carts" class="flex gap-4">
      <h1>{{ cart.product.id }}</h1>
      <h1>{{ cart.qty }}</h1>
    </div>
  </aside>
</template>

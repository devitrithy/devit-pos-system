<script setup lang="ts">
interface Option {
  value: number;
  label: String;
}

import { stores } from "@/store";
import CartCard from "./shared/CartCard.vue";
import Divide from "@/components/shared/Divide.vue";
import { ref, type Ref } from "vue";
import ResetButton from "@/components/shared/ResetButton.vue";

const usCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
let discount: Ref<number> = ref(0);
let options: Option[] = [
  { value: 0, label: "%0" },
  { value: 5, label: "%5" },
  { value: 10, label: "%10" },
  { value: 15, label: "%15" },
  { value: 20, label: "%20" },
];
</script>
<template>
  <aside
    class="w-[691px] h-full bg-container rounded-md shadow-md sticky top-0 p-4 hidden md:block"
  >
    <!--  -->
    <div class="flex flex-col justify-between h-full">
      <div class="mb-2">
        <div class="flex items-center justify-between h-20">
          <div>
            <h1 class="text-xl mb-2">Order Samuray</h1>
            <h3 class="text-sm text-gray-500">#01100100</h3>
          </div>
          <ResetButton />
        </div>
        <Divide />
      </div>
      <div
        class="flex flex-col gap-4 overflow-auto h-full"
        :class="{ 'justify-center items-center': stores.carts.length === 0 }"
      >
        <CartCard
          v-if="stores.carts.length > 0"
          v-for="cart in stores.carts"
          :cart="cart"
        />
        <div v-else><h1>No Product</h1></div>
      </div>
      <Divide />
      <div class="my-4">
        <h2 class="flex items-center justify-between">
          <span>Subtotal</span>
          <span class="font-bold">{{
            usCurrency.format(Math.round(stores.subtotal * 100) / 100)
          }}</span>
        </h2>
        <h2 class="flex items-center justify-between mt-2">
          <span>Discount</span>
          <el-select
            v-model="discount"
            clearable
            placeholder="Select"
            style="width: 100px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </h2>
        <Divide />
        <h2 class="flex items-center justify-between">
          <span>Total</span>
          <span class="font-bold text-xl">{{
            usCurrency.format(
              Math.round(
                (Math.round(stores.subtotal * 100) / 100 -
                  (stores.subtotal * discount) / 100) *
                  100
              ) / 100
            )
          }}</span>
        </h2>
      </div>
      <el-button type="primary" round>Pay</el-button>
    </div>
  </aside>
</template>

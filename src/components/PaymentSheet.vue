<script setup lang="ts">
interface Option {
  value: number;
  label: String;
}

import { stores } from "@/store";
import IconCalculator from "./icons/IconCalculator.vue";
import CartCard from "./shared/CartCard.vue";
import { ref, type Ref } from "vue";

const usCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
const khCurrency = new Intl.NumberFormat("km-KH", {
  style: "currency",
  currency: "KHR",
});
const khExchage = 4100;

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
    class="w-1/3 h-full bg-container rounded-md shadow-md sticky top-0 p-4"
  >
    <!--  -->
    <div class="flex flex-col justify-between h-full">
      <div class="mb-2">
        <div class="flex items-center justify-between h-20">
          <div>
            <h1 class="text-xl mb-2">Order Samuray</h1>
            <h3 class="text-sm text-gray-500">#01010101</h3>
          </div>
          <button
            class="p-4 bg-blue-500 rounded-md text-white hover:bg-blue-400 active:bg-blue-600"
          >
            <IconCalculator class="text-4xl" />
          </button>
        </div>
        <div class="h-[0.5px] bg-gray-500 mt-4 mb-2"></div>
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
        <div class="h-[0.5px] bg-gray-500 my-4"></div>
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

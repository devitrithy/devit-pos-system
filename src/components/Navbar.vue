<script setup lang="ts">
import { ref, type Ref } from "vue";
import IconSearch from "./icons/IconSearch.vue";
import IconCart from "./icons/IconCart.vue";

let search: Ref<String> = ref("");
</script>
<template>
  <nav
    class="flex items-center justify-between px-8 h-[88px] bg-container shadow-md"
  >
    <div class="flex gap-9">
      <h1 class="flex items-center uppercase text-blue-600 gap-2 text-xl">
        <IconCart /> Shopping
      </h1>
      <div
        class="rounded-full overflow-hidden flex items-center bg-gray-300 border border-transparent"
      >
        <input
          type="text"
          v-model="search"
          class="bg-transparent outline-none indent-6 caret-blue-500"
          placeholder="Search..."
        />
        <button class="bg-blue-500 text-white w-16 h-11">
          <IconSearch class="text-3xl mx-auto" />
        </button>
      </div>
    </div>
    <ul>
      <li><a href=""></a></li>
    </ul>
  </nav>
</template>

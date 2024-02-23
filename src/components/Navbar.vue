<script setup lang="ts">
import { ref, type Ref } from "vue";
import IconSearch from "./icons/IconSearch.vue";
import IconCart from "./icons/IconCart.vue";
import { stores } from "@/store";
import IconVolume from "./icons/IconVolume.vue";
import IconVolumeDown from "./icons/IconVolumeDown.vue";
import IconMute from "./icons/IconMute.vue";
const oldVolume: Ref<number> = ref(stores.volume);
const mute: Ref<boolean> = ref(false);

const changeVolume = () => {
  mute.value = !mute.value;
  if (mute.value) {
    oldVolume.value = stores.volume;
    stores.volume = 0;
  } else {
    stores.volume = oldVolume.value;
  }
};

const controlVolume = () => {
  if (stores.volume < 1) {
    mute.value = true;
  } else {
    mute.value = false;
  }
  localStorage.setItem("volume", stores.volume.toString());
};
</script>
<template>
  <nav
    class="flex items-center justify-between px-8 h-[88px] bg-container shadow-md"
  >
    <a href="/" class="flex items-center uppercase text-blue-600 gap-2 text-xl">
      <IconCart /> Shopping
    </a>
    <div
      class="rounded-full overflow-hidden flex items-center justify-between bg-gray-300 border border-transparent w-2/3"
    >
      <input
        type="text"
        v-model="stores.searchProduct"
        @keyup="stores.handleSearch"
        class="bg-transparent outline-none indent-6 caret-blue-500 w-full"
        placeholder="Search..."
      />
      <button class="bg-blue-500 text-white w-16 h-11">
        <IconSearch class="text-3xl mx-auto" />
      </button>
    </div>
    <div class="w-1/12 flex gap-4 items-center">
      <button @click="changeVolume">
        <IconVolume v-if="!mute && stores.volume > 50" class="text-xl" />
        <IconVolumeDown
          v-else-if="!mute && stores.volume < 50"
          class="text-xl"
        />
        <IconMute v-else class="text-xl" />
      </button>
      <el-slider v-model="stores.volume" @change="controlVolume" />
    </div>
  </nav>
</template>

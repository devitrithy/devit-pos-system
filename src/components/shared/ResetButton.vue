<script setup lang="ts">
import IconReset from "@/components/icons/IconReset.vue";
import { stores } from "@/store";
import { ElMessageBox, ElMessage } from "element-plus";
import { useSound } from "@vueuse/sound";
import resetSfx from "@/assets/reset.mp3";
import warningSfx from "@/assets/warning.mp3";
import { ref, type Ref } from "vue";
const soundRef: Ref<number> = ref(stores.volume / 100);
const resetSound = useSound(resetSfx, { volume: soundRef });
const warningSound = useSound(warningSfx, { volume: soundRef });
const open = () => {
  if (stores.carts.length > 0) {
    warningSound.play();
    ElMessageBox.confirm(
      "Are you sure you want to reset the order?",
      "Confirmation",
      {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning",
      }
    )
      .then(() => {
        reset();
        ElMessage({
          type: "success",
          message: "Reset completed",
        });
      })
      .catch(() => {
        ElMessage({
          type: "info",
          message: "Reset canceled",
        });
      });
  }
};
const reset = () => {
  stores.carts = [];
  stores.subtotal = 0;
  resetSound.play();
};
</script>
<template>
  <button
    :disabled="stores.carts.length < 1"
    @click="open"
    class="p-4 bg-orange-400 rounded-md text-white hover:bg-orange-300 active:bg-orange-500 disabled:bg-orange-200"
  >
    <IconReset class="text-4xl" />
  </button>
</template>

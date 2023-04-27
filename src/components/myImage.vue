<template>
  <div class="flex justify-center py-10">
    <div class="flex flex-col items-center gap-2">
      <img class="p-4 rounded-lg shadow-lg" :src="imageSrc" alt="" />
      <p>{{ imageName }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
  imgPath: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
});
const imageSrc = ref(require(`../assets/yartu_images/${props.imgPath}`));
const imageName = ref(props.imgName);
</script>

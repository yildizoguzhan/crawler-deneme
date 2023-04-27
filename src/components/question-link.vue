<template>
  <a class="text-blue-700" :href="link">-{{ text }} </a>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
  },
};
</script>

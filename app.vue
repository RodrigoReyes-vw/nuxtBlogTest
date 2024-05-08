<script setup>
const articles = await queryContent("blog").find();
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

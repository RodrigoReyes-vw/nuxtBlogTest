<script setup lang="ts">
// const articles = await queryContent("gallery").where({ featured: true }).find();
const articles = await queryContent("blog").find();
</script>
<template>
  <main :class="$style.container">
    <ol :class="['vw-grid']">
      <li :class="$style.articleLink" v-for="article in articles">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      </li>
    </ol>
  </main>
</template>

<style module>
:root {
  font-family: var(--siteFont);
}
.articleLink {
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
}
.container {
  margin: 0 auto;
  max-width: 75vw;

  /* background-color: red; */
}
</style>

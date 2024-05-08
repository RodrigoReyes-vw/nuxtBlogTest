<script setup lang="ts">
function convertDate(date: string) {
  const dateUTC = new Date("2020-02-20T21:51:54.000Z");
  const dateEDT = dateUTC.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });

  return dateEDT;
}
</script>

<template>
  <main :class="$style.container">
    <ContentDoc v-slot="{ doc }">
      <article>
        <p>Author: {{ doc.author }}</p>
        <p>Date: {{ convertDate(doc.datePublished) }}</p>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<style module>
.section {
  display: grid;
  gap: 1rem;
  grid-column: 1fr;
}
.container {
  margin: 0 auto;
  max-width: 75vw;

  /* background-color: red; */
}

h1 {
  font-size: 2rem;
  font-weight: 500;
}

h2 {
  font-size: 1.4rem;
  font-weight: 400;
}
</style>

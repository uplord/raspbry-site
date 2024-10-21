<template>
  <section>
    <div class="container">
      <div class="content">
        <nuxt-img src="/assets/images/logo.svg" alt="raspbry" width="80" height="101" />
        <h1>raspbry</h1>
        <h2>website coming soon</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  title: 'raspbry',
})
</script>

<style lang="scss">
  section {
    @apply py-6 flex items-center justify-center h-screen;

    .container {
      @apply mx-auto px-4 max-w-full lg:max-w-screen-xl;
    }

    .content {
      @apply flex flex-col items-center justify-center gap-2;
    }

    h1 {
      @apply text-center text-4xl font-bold;
    }

    h2 {
      @apply text-center text-xl;
    }
  }
</style>
<script setup>
useHead({
  title: 'FlowKi  - Holistic Career Coaching ',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },

  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Career Coaching Workshop for International Professionals | FlowKi Job Coaching Berlin'
const description = 'Unlock your career potential with FlowKi: the hands-on job coaching and career development workshop for international professionals and tech talent. Experience group coaching, practical job search strategies, and holistic personal growth—online from Berlin. Join now for guidance, support, and a fresh start in today’s changing job market!'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  // ogImage: '/',
  // twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  // twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <header>
    <TemplateMenu/>
    </header>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-l">
          Flowki Career Coaching • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <NuxtLink to="/impressum">
            <UButton variant="ghost" class="cursor-pointer">Impressum</UButton>
        </NuxtLink>
      </template>
    </UFooter>
  </UApp>
</template>

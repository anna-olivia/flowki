<script setup lang="ts">
const cards = ref([
  {
    title: 'Heike Rödel',
    description:
      'Heike Rödel is an experienced career coach based in Berlin, specializing in guiding and consulting international talent on their next career steps. With a strong background in recruitment and numerous HR projects, she blends creative, innovative, and evidence-based methods to empower clients in today’s changing job market. Her coaching is shaped by years of hands-on experience, a deep understanding of career transitions, and a genuine passion for helping professionals unlock their full potential and thrive in new environments.',
    image: {
      src: '/images/images/heike.jpg',
      alt: 'Heike Rödel'
    },
    to: 'https://www.roedel-beratung.de/index.php'
      
  },
  {
    title: 'Anna Lebert-Wietholtz',
    description:'Anna is a Berlin-based tech trainer and certified systemic coach, specializing in enabling adults to confidently work with modern software technologies. With a background in full-stack development and extensive experience in adult education, she translates complex technical concepts into clear, practical, and accessible learning experiences.Her work focuses on training and coaching career switchers and professionals transitioning into tech-driven roles. By combining hands-on technical expertise with systemic coaching methods, she supports individuals in building technical confidence, strengthening problem-solving skills, and navigating professional change with clarity and resilience.',
    image: {
      src: '/images/images/anna.jpg',
      alt: 'Anna'
    },
    to: 'https://www.linkedin.com/in/annalebertwietholtz/'
  }
])
</script>

<template>
    <section class="max-w-7xl mx-auto px-6 py-16 hero-img bg-bottom-left">
    <h1 class="text-5xl font-bold text-highlighted text-center py-5">About Us </h1>
    <div class="text-lg sm:text-xl/8 text-muted text-pretty py-5 text-center">Heike and Anna are united by a shared motivation: enabling people to navigate professional change with confidence, clarity, and agency. By combining deep expertise in career coaching, systemic methods, and hands-on tech education, they support individuals at critical transition points—whether entering new roles, switching careers, or adapting to technology-driven work environments.
Their joint work is driven by the belief that sustainable career growth emerges where personal development, technical competence, and practical relevance intersect. Together, they create learning and coaching experiences that are empowering, grounded, and directly applicable to real-world challenges.</div>
  <div class="relative grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
    <UPageCard
      v-for="(card, index) in cards"
      :key="index"
      :to="card.to"
      target="_blank"
      :ui="{
    root: `
      border-0
      ring-0
      focus:ring-0
      focus-visible:ring-0
      hover:ring-0
      hover:border-0
      active:ring-0
      backdrop-blur-md
      shadow-lg
      transition
    `,
  }"
    class="border-0 bg-[#fff3e3] text-center mx-auto
  backdrop-blur-md
  shadow-lg
  transition
  hover:shadow-xl
"
 
    >
     
      
        <div class="flex flex-col items-center text-center gap-4 p-6">
    <img
      :src="card.image.src"
      :alt="card.image.alt"
      class="w-40 h-40 rounded-full object-cover"
    />

    <h3 class="text-xl font-semibold text-highlighted">
      {{ card.title }}
    </h3>

    <p class="text-balance text-base text-muted">
      {{ card.description }}
    </p>
  </div>
    </UPageCard>

    </div>
  
  </section>
</template>



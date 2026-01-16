<script setup lang="ts">
const nextWorkshopDate = ref('February 8, 2026')
</script>
<template>
     <section class="max-w-7xl mx-auto px-6 py-16 hero-img bg-bottom">
     <UPageSection title="Flowki Workshop"   :ui="{
    root: `py-0`, container: `px-6 sm:py-4 lg:py-4` 
    ,
  }">
    <UPageCTA title="Are you ready to break new ground, unlock your potential, and move forward with clarity and confidence?"
     variant="subtle"
      :links="[{
  label: 'Join now | Waitinglist',
  to: '/contact',
  target: '_blank',
  color: 'neutral'
}]" />
  <template #description>
      <p>
        Together, we shape the future of work—and your personal success story.<br />
        <span class="font-medium">Next workshop will take place on </span>
        <span class="text-[#90ee02] font-semibold">
          {{ nextWorkshopDate }}
        </span>
      </p>
    </template>
  </UPageSection>
  </section>
</template>
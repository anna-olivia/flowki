<script setup lang="ts">
const items = ref([
  [
    {
      label: 'FlowKi',
      avatar: {
        src: '/images/logos/flowki_logo.svg'
      },
      type: 'label'
    }
  ],
  [
    {
      label: 'About',
      icon: 'i-lucide-users'
    },
    {
      label: 'Workshop',
      icon: 'i-lucide-crown'
    },
    {
      label: 'Career Coaching',
      icon: 'i-lucide-user-plus',
     
    },
    {
      label: 'Support',
      icon: 'i-lucide-life-buoy'
    },
     {
            label: 'Email',
            icon: 'i-lucide-mail'
          }
  ]
])
</script>

<template>
 
  <nav class="flex items-center justify-between">
  
<NuxtLink to="/">
           <!-- <img src="/images/logos/flowki_logo.svg" class="w-auto h-20" alt="Flowki logo"> -->
           <img src="/images/typo.svg" class="w-auto h-20" alt="Flowki logo">

        </NuxtLink>
    <!-- Desktop Menu -->
    <div class="hidden lg:flex items-center gap-6">
        <NuxtLink to="/#about">
            <UButton variant="ghost">About</UButton>
        </NuxtLink>
        <NuxtLink to="/#workshop">
             <UButton variant="ghost">Workshop</UButton>
        </NuxtLink>    
        <NuxtLink to="/#coaching">
            <UButton variant="ghost">Career Coaching</UButton>
        </NuxtLink>    
        <NuxtLink to="/contact">
            <UButton variant="ghost" icon="i-lucide-mail" />
        </NuxtLink>    

      
     
      
      
    </div>

    <!-- Mobile Hamburger -->
    <div class="lg:hidden">
      <UDropdownMenu :items="items">
        <UButton icon="i-lucide-menu" class="text-highlighted" />
      </UDropdownMenu>
    </div>
  </nav>


</template>


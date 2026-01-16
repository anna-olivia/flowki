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
      to:'/#about',
      icon: 'i-lucide-users'
    },
    {
      label: 'Workshop',
      to:'/#workshop',
      icon: 'i-lucide-crown'
    },
    {
      label: 'Career Coaching',
      to:'/#coaching',
      icon: 'i-lucide-user-plus',
     
    }
  ]
])
</script>

<template>
 
  <nav class="flex items-center justify-between">
  
<NuxtLink to="/">
           <!-- <img src="/images/logos/flowki_logo.svg" class="w-auto h-20" alt="Flowki logo"> -->
           <img src="/images/typo.svg" class="w-auto h-20 cursor-pointer" alt="Flowki logo">

        </NuxtLink>
    <!-- Desktop Menu -->
    <div class="hidden lg:flex items-center gap-6">
        <NuxtLink to="/#about">
            <UButton variant="ghost"  class="cursor-pointer">About</UButton>
        </NuxtLink>
        <NuxtLink to="/#workshop" >
             <UButton variant="ghost" class="cursor-pointer">Workshop</UButton>
        </NuxtLink>    
        <NuxtLink to="/#coaching">
            <UButton variant="ghost" class="cursor-pointer">Career Coaching</UButton>
        </NuxtLink>    
        <NuxtLink to="/contact">
            <UButton variant="ghost" icon="i-lucide-mail" class="cursor-pointer"/>
        </NuxtLink>    

      
     
      
      
    </div>

    <!-- Mobile Hamburger -->
    <div class="lg:hidden">
      <UDropdownMenu :items="items" class="bg-[#fff3e3]">
        <UButton icon="i-lucide-menu" class="text-highlighted cursor-pointer"/>
      </UDropdownMenu>
    </div>
  </nav>


</template>


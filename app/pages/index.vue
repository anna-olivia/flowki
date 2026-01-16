
<template>
  <!-- hero -->
  <section class="relative min-h-[80vh] overflow-hidden hero-img">
    <h1 class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted">
       FlowKi - Career Coaching</h1> 
    <div data-orientation="horizontal" class="relative isolate">
      <div
        class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid sm:py-32 lg:py-30 gap-16 sm:gap-y-24 lg:grid-cols-2 lg:items-center">
        <div class="order-last">
          <div class>
            <strong class="mb-1 font-semibold flex items-center gap-1.5">New Workshop</strong>
            <h2 class="text-4xl sm:text-6xl text-pretty tracking-tight font-bold text-highlighted">FlowKi Workshop</h2>
            <div class="text-lg sm:text-xl/8 text-muted text-pretty mt-6">
              Unlock your full potential in our career coaching workshop — designed specifically for international
              professionals and tech talents navigating today’s evolving workplace in Germany.
            </div>
           <div class="mt-10">
          <div class="flex flex-wrap gap-x-6 gap-y-3">
            <ULink to="/contact" class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-3 py-2 text-base gap-2 text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">

<span class="shrink0 size-6" aria-hidden="true">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>

</span>

<span class="truncate">Sign Up</span>

            </ULink>
             <ULink to="/#coaching" class="rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors px-3 py-2 text-base gap-2 ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted">

<span class="shrink0 size-6" aria-hidden="true">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
</span>
<span class="truncate">Learn more</span>

            </ULink>
          </div>
        </div>
          </div>
        </div>
       

        <img src="/public/images/hero/hero-img.jpg" alt="Coaches" class="rounded-lg shadow-2xl ring ring-default" />
      </div>
    </div>
    
  </section>

 <AboutSection id="about"/>

 <WorkshopSection id="coaching"/>
  <!-- CTA -->
 <CTASection id="workshop"/>
  <NuxtLink
      to="/"
      class="block mx-auto underline text-sm text-center py-4">
      <p>
        Back to top 
      
    
      </p>
     
     
    </NuxtLink>
</template>

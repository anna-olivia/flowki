<script setup lang="ts">
const { ui } = useAppConfig()
</script>
<template>
  <section class="max-w-xl mx-auto py-16 px-4">
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      netlify-honeypot="bot-field"
      class="space-y-6"
    >
      <!-- Netlify Pflichtfeld -->
      <input type="hidden" name="form-name" value="contact" />

      <!-- Honeypot -->
      <p class="hidden">
        <label>
          Don’t fill this out:
          <input name="bot-field" />
        </label>
      </p>

      <div>
        <label class="block mb-1 font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label class="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          placeholder="How can I help you?"
          class="w-full border rounded px-3 py-2"
        />
      </div>

      <label class="flex items-start gap-2 text-sm">
        <input type="checkbox" name="privacy" required class="mt-1" />
        <span>
          I agree to the
          <NuxtLink to="/privacy" class="underline">
            privacy policy
          </NuxtLink>.
        </span>
      </label>

      <button
        type="submit"
        class="w-full py-3 rounded hover:opacity-90 transition"
         :style="{ backgroundColor: ui.colors.primary, color: ui.colors.neutral }"
      >
        Send message
      </button>
    </form>
  </section>
</template>

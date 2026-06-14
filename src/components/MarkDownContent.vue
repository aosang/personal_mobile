<!-- src/components/MarkdownContent.vue -->
<template>
  <div v-if="html" class="markdown-content" v-html="html" />
</template>

<script setup>
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})

const md = new MarkdownIt({ html: false, linkify: true })

const html = computed(() => {
  if (!props.content) return ''
  return DOMPurify.sanitize(md.render(props.content))
})
</script>

<style scoped>
.markdown-content :deep(h1) {
  @apply text-2xl font-bold mt-4 mb-2 text-gray-600;
}
.markdown-content :deep(h2) {
  @apply text-xl font-bold mt-4 mb-2 text-gray-600;
}
.markdown-content :deep(h3) {
  @apply text-lg font-bold mt-4 text-gray-800;
}
.markdown-content :deep(h4) {
  @apply text-base font-bold mt-4 mb-2 text-gray-600;
}
.markdown-content :deep(p) {
  @apply text-gray-600 mt-3 text-[15px] leading-7;
}
.markdown-content :deep(ul) {
  @apply list-disc pl-5 my-2 text-[15px];
  list-style-position: outside;
}
.markdown-content :deep(ol) {
  @apply list-decimal pl-5 my-2 text-[15px];
  list-style-position: outside;
}
.markdown-content :deep(li) {
  @apply leading-7 text-gray-600;
  display: list-item;
}
.markdown-content :deep(img) {
  @apply w-full rounded-lg my-4;
}
.markdown-content :deep(a) {
  @apply text-blue-500 underline;
}
</style>
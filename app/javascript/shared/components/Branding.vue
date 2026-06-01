<script>
export default {
  props: {
    disableBranding: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div
    v-if="!disableBranding"
    class="px-0 py-3 flex justify-center"
  >
    <span class="text-n-slate-11 text-xs leading-3 opacity-90">
      Powered by Jandrea
    </span>
  </div>
  <div v-else class="p-3" />
</template>

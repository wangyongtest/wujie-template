<template>
  ElMessage({ message: 'Congrats, this is a success message.', type: 'success', })
</template>

<script setup lang="ts">
const props = defineProps(['position', 'type'])
</script>

<style lang="" scoped></style>

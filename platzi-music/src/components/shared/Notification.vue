<template>
  <div :class="[!typeNotification ? 'notification is-success' : 'notification is-danger']">
    <slot name="body">Algo anduvo mal</slot>
  </div>
</template>

<script>
export default { props: ["typeNotification"] };
</script>
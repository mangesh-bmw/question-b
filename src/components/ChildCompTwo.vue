<!-- ChildCompTwo.vue -->
<template>
  <div>
    <h2>Child Component Two</h2>
    <p> This is a Message from Child One: {{ messageFromOne }}</p>
  </div>
</template>

<script>
export default {
  props: {
    messageFromOne: String
  }
};
</script>

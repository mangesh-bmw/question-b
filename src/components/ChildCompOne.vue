<template>
  <div>
    <h2>Child Component</h2>
    <p>{{ message }}</p>
    <button @click="sendMessageToParent">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  props: {
    sampleMessage: String
  },
  data() {
    return {
      message: this.sampleMessage
    };
  },
  methods: {
    sendMessageToParent() {
      const newMessage = 'Hello from Child One!';
      this.$emit('update', newMessage);
    }
  }
};
</script>

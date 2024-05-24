<!-- ParentComponent.vue -->
<template>
  <div class="parent-container">
    <h1>Parent Component</h1>
    <ChildCompOne :sample-message="parentMessage" @update="updateFromChildOne" />
    <ChildCompTwo :message-from-one="messageFromChildOne" />
    <p>Message from Child One: {{ messageFromChildOne }}</p>
  </div>
</template>

<script>
import ChildCompOne from "./ChildCompOne.vue";
import ChildCompTwo from "./ChildCompTwo.vue";

export default {
  data() {
    return {
      parentMessage: "Hello from Parent!",
      messageFromChildOne: "",
    };
  },
  components: {
    ChildCompOne,
    ChildCompTwo,
  },
  methods: {
    updateFromChildOne(message) {
      console.log("Got the message from Child One:", message);
      this.messageFromChildOne = message;
    },
  },
};
</script>

<style scoped>
.parent-container {
  /* float: left; */
}
</style>

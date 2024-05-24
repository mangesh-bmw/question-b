<template>
  <div>
    <UserList />
    <ParentComp />
    <DynamicForm/>
    <!-- <ValidateForm/> -->
  </div>
</template>

<script>
import DynamicForm from './components/DynamicForm.vue';
import ParentComp from "./components/ParentComp.vue";
import UserList from "./components/UserList.vue";
// import ValidateForm from './components/ValidateForm.vue';



export default {
  name: "App",
  components: {
    UserList,
    ParentComp,
    DynamicForm,
    // ValidateForm
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
width: 100%;
  margin-top: 20px;
  background-color: grey; /* Black with 50% opacity */
}
</style>

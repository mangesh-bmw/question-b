<template>
  <div>
    <input
      type="text"
      v-model="searchQuery"
      @input="updateSearchQuery"
      placeholder="Search by title or body..."
      class="search-bar mb-3 w-20"
    />
    
    <table class="table table-bordered custom-table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserList",
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    filteredList() {
      return this.$store.getters.filteredList;
    },
  },
  methods: {
    updateSearchQuery() {
      this.$store.dispatch("setSearchQuery", this.searchQuery);
    },
  },
  async mounted() {
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.$store.dispatch("addToData", result.data);
  },
};
</script>

<style scoped>
/* Add your custom styles here */

.search-bar{
  width: 20%;
}
.custom-table {
  margin-left: 208px;
  /* margin-right: 20px; */
  width: 70%;
}
</style>

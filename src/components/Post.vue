<template>
  <div v-if="currentPost" class="edit-form">
    <h4>Post</h4>
    <form>
      <div class="form-group">
        <label for="post">Post</label>
        <input type="text" class="form-control" id="post"
          v-model="currentPost.post"
        />
      </div>
      <div class="form-group">
        <label for="song">Song</label>
        <input type="text" class="form-control" id="song"
          v-model="currentPost.song"
        />
      </div>
    </form>
  </div>

</template>
<script>
import PostDataService from "../services/PostsDataServices";
export default {
  name: "post",
  data() {
    return {
      currentPost: null,
      message: ''
    };
  },
  methods: {
    getPost(id) {
      PostDataService.get(id)
        .then(response => {
          this.currentPost = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getPost(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
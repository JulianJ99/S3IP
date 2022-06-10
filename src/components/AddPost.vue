<template>

  <div class="submit-form">

    <div v-if="!submitted">
      <div class="form-group">
        <label for="post">Post</label>
        <input
          type="text"
          class="form-control"
          id="post"
          required
          v-model="post.post"
          name="post"
        />
      </div>

      <div class="form-group">
        <label for="song">Song</label>
        <input
          type="text"
          class="form-control"
          id="song"
          required
          v-model="post.song"
          name="song"
        />
      </div>

      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="post.username"
          name="username"
        />
      </div>

      <div class="form-group">
        <label for="userimage">Userimage</label>
        <input
          type="text"
          class="form-control"
          id="userimage"
          required
          v-model="post.userimage"
          name="userimage"
        />
      </div>

      <button @click="savePost" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
    </div>
  </div>
</template>
<script>
import PostDataService from "../services/PostsDataServices.js";
export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: null,
        post: "",
        song: "",
        username: "",
        userimage: "",
      },
      submitted: false
    };
  },
  methods: {
    savePost() {
      var data = {
        post: this.post.post,
        song: this.post.song,
        username: this.post.username,
        userimage: this.post.userimage,
      };
      PostDataService.create(data)
        .then(response => {
          this.post.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
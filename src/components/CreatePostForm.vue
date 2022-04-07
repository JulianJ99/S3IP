<template>
  <b-form class="mt-3">

    <b-row>
      <b-col cols="6">
        <b-form-group id="id" label="Id" label-for="id">
          <b-form-input
            id="id"
            type="text"
            placeholder=""
            v-model="post.id"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="mt-3">
      <b-col cols="6">
        <b-form-group id="post" label="Post" label-for="post">
          <b-form-input
            id="post"
            type="text"
            placeholder="Placeholder text post"
            v-model="post.post"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="4">
        <b-form-group id="link" label="Link" label-for="link">
          <b-form-input
            id="link"
            type="text"
            placeholder="https://open.spotify.com/embed/track/3H3cOQ6LBLSvmcaV7QkZEu?utm_source=generator"
            v-model="post.company_name"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>


    <b-row class="mt-4">
      <b-col cols="3">
        <b-button variant="primary" class="px-5" @click="addNewPost"
          >Add post</b-button
        >
      </b-col>
      <b-col>
        <b-button variant="warning" @click="triggerClose">Close</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatePostModal",
  data() {
    return {
      post: {},
    };
  },
  methods: {
    addNewPost() {
      axios
        .post("http://localhost:8080/posts/", this.post)
        .then((response) => {
          console.log(response.data);
          this.$emit("closeCreateModal");
          this.$emit("reloadDataTable");
          this.$emit("showSuccessAlert");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
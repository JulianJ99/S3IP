<template>
  <b-form class="mt-3">
    <b-row>
      <b-row>
        <h4 class="text-secondary">Contact Details</h4>
      </b-row>
      <b-col cols="6">
        <b-form-group id="first-name" label="First Name" label-for="first-name">
          <b-form-input
            id="first-name"
            type="text"
            placeholder="First Name"
            v-model="post.contact_firstname"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="6">
        <b-form-group id="last-name" label="Last Name" label-for="last-name">
          <b-form-input
            id="last-name"
            type="text"
            placeholder="Last Name"
            v-model="post.contact_lastname"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="6">
        <b-form-group id="email" label="E-Mail" label-for="email">
          <b-form-input
            id="email"
            type="email"
            placeholder="example@crm.com"
            v-model="post.contact_email"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <h4 class="text-secondary">Company Details</h4>
    </b-row>
    <b-row>
      <b-col cols="4">
        <b-form-group
          id="company_name"
          label="Company Name"
          label-for="company_name"
        >
          <b-form-input
            id="company_name"
            type="text"
            placeholder="XYZ Industries"
            v-model="post.company_name"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="4">
        <b-form-group
          id="acquired_on"
          label="Acquired On"
          label-for="acquired_on"
        >
          <b-form-input
            id="acquired_on"
            type="date"
            v-model="post.acquired_on"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="3">
        <b-button variant="primary" class="px-5" @click="updatePost"
          >Update Post</b-button
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
  props: {
    Id: Number,
  },
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    this.getPostByID();
  },
  methods: {
    triggerClose() {
      this.$emit("closeEditModal");
    },
    getCusomterByID() {
      axios
        .get(`http://localhost:8080/posts/${this.Id}`)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updatePost() {
      axios
        .put(
          `http://localhost:8080/posts/${this.Id}`,
          this.post
        )
        .then((response) => {
          console.log(response.data);
          this.$emit("closeEditModal");
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
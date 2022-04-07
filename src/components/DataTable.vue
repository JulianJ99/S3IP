<template>
  <div>
    <b-row>
      <b-alert v-model="showSuccessAlert" variant="success" dismissible>
        {{ alertMessage }}
      </b-alert>
    </b-row>
    <b-row>
    </b-row>
    <b-row class="mt-3">
      <b-card>
        <b-row align-h="between">
          <b-col cols="6">
            <h3>{{ tableHeader }}</h3>
          </b-col>
          <b-col cols="2">
            <b-row>
              <b-col>
                <b-button
                  variant="primary"
                  id="show-btn"
                  @click="showCreateModal"
                >
                  <b-icon-plus class="text-white"></b-icon-plus>
                  <span class="h6 text-white">New Post</span>
                </b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <b-row class="mt-3">
          <b-table
            striped
            hover
            :items="items"
            :fields="fields"
            class="text-center"
          >
            <template #cell(contact_name)="data">
              {{
                `${data.item.contact_firstname} ${data.item.contact_lastname}`
              }}
            </template>

            <template #cell(actions)="data">
              <b-row>
                <b-col cols="7">
                  <b-icon-pencil-square
                    class="action-item"
                    variant="primary"
                    @click="getRowData(data.item.id)"
                  ></b-icon-pencil-square>
                </b-col>
                <b-col cols="1">
                  <b-icon-trash-fill
                    class="action-item"
                    variant="danger"
                    @click="showDeleteModal(data.item.id)"
                  ></b-icon-trash-fill>
                </b-col>
              </b-row>
            </template>
          </b-table>
        </b-row>
      </b-card>
    </b-row>

    <!-- Modal for adding new posts -->
    <b-modal
      ref="create-post-modal"
      size="xl"
      hide-footer
      title="New post"
    >
      <create-post-form
        @closeCreateModal="closeCreateModal"
        @reloadDataTable="getPostData"
        @showSuccessAlert="showAlertCreate"
      ></create-post-form>
    </b-modal>

    <!-- Modal for updating posts -->
    <b-modal
      ref="edit-post-modal"
      size="xl"
      hide-footer
      title="Edit post"
    >
      <edit-post-form
        @closeEditModal="closeEditModal"
        @reloadDataTable="getPostData"
        @showSuccessAlert="showAlertUpdate"
        :Id="Id"
      ></edit-Post-form>
    </b-modal>

    <!-- Delete Post Modal -->
    <b-modal
      ref="delete-post-modal"
      size="md"
      hide-footer
      title="Confirm Deletion"
    >
      <delete-post-modal
        @closeDeleteModal="closeDeleteModal"
        @reloadDataTable="getPostData"
        @showDeleteAlert="showDeleteSuccessModal"
        :postId="postId"
      ></delete-post-modal>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import PostOverview from "@/components/PostOverview.vue";
import CreatePostForm from "@/components/CreatePostForm.vue";
import EditPostForm from "@/components/EditPostForm.vue";
import DeletePostModal from "@/components/DeletePostModal.vue";

export default {
  components: {
    PostOverview,
    CreatePostForm,
    EditPostForm,
    DeletePostModal,
  },
  data() {
    return {

      fields: [
        {
          key: "id",
          label: "id",
          sortable: false,
        },
        {
          key: "post",
          label: "post",
          sortable: false,
        },
        {
          key: "link",
          label: "link",
          sortable: false,
        },
        "actions",
      ],
      items: [],
      numberOfPosts: 0,
      postId: 0,
      companySearchTerm: "",
      tableHeader: "",
      showSuccessAlert: false,
      alertMessage: "",
    };
  },
  mounted() {
    this.getPostData();
  },
  methods: {
    showCreateModal() {
      this.$refs["create-post-modal"].show();
    },
    closeCreateModal() {
      this.$refs["create-post-modal"].hide();
    },
    getPostData() {
      axios
        .get("http://localhost:8080/posts/")
        .then((response) => {
          this.tableHeader = "All Posts";
          this.items = response.data;
          this.numberOfPosts = response.data.length;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRowData(id) {
      this.$refs["edit-post-modal"].show();
      this.Id = id;
    },
    closeEditModal() {
      this.$refs["edit-post-modal"].hide();
    },
    showAlertCreate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Post was created successfully!";
    },
    showAlertUpdate() {
      this.showSuccessAlert = true;
      this.alertMessage = "Post was updated successfully";
    },
    showDeleteModal(id) {
      this.$refs["delete-post-modal"].show();
      this.postId = id;
    },
    closeDeleteModal() {
      this.$refs["delete-post-modal"].hide();
    },
    showDeleteSuccessModal() {
      this.showSuccessAlert = true;
      this.alertMessage = "Post was deleted successfully!";
    },
  },
};
</script>

<style>
.action-item:hover {
  cursor: pointer;
}
</style>
<template>
  <div>
    <b-row class="text-center">
      <b-col>
        <div>
          <h6>Total Posts</h6>
          <h4>
            <strong>{{ totalPosts }}</strong>
          </h4>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "PostOverview",
  props: {
    totalPosts: Number,
  },
  data() {
    return {
      totalIsActive: true,
    };
  },
};
</script>

<style>
.filter-card:hover {
  cursor: pointer;
  text-decoration: underline;
}

.bg-active-filter {
  background-color: #e9f1fe;
  color: #074297;
}
</style>
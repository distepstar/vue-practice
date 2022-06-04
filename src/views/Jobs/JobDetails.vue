<template>
  <h1>Jobs Details</h1>
  <!-- route object -->
  <p>The job id is {{ id }}</p>
</template>


<script>
export default {
  props: ['id'],
  data() {
    return {
      // getting the route param from the url
      // id: this.$route.params.id
    }
  }
}

</script>

<style>
</style>

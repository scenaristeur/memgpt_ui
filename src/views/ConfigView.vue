<template>
  <div>
    <input v-model="password" type="password" />
    <input v-model="memgpt_api_url" type="text" />
    <button>Save</button>
  </div>
</template>

<script>
export default {
  name: "ConfigView",
  data() {
    return {
      //   password: "",
    };
  },
  computed: {
    password() {
      return this.$store.state.core.password;
    },
    memgpt_api_url() {
      return this.$store.state.core.memgpt_api_url;
    },
  },
};
</script>

<style scoped></style>

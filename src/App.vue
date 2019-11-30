<template>
  <div id="app" class="container">
    <div class="columns">
      <RegisterComponent @arrayPets="pets = $event" />
      <TableComponent :arrayPets="pets" />
    </div>
  </div>
</template>

<script>
import RegisterComponent from "@/components/RegisterComponent";
import TableComponent from "@/components/TableComponent";

export default {
  name: "app",
  components: {
    RegisterComponent,
    TableComponent
  },
  data() {
    return {
      pets: []
    };
  }
};
</script>

<style lang="scss">
@import "./scss/App.scss";
</style>

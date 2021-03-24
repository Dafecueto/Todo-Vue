<template>
  <div class="button-container">
      <button @click="completeAll">Completar Todos</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "CompleteButton",
    methods: {
        ...mapActions(["completeAll"])
    }
}
</script>

<style>

</style>
<template>
  <button @click="clearCompleted">Eliminar Completados</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "ClearCompletedButton",

    methods: {
        ...mapActions(["clearCompleted"]),
    }

}
</script>

<style>

</style>
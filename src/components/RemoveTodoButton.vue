<template>
  <button @click="removeTodo(element.name)">x</button>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: "RemoveTodoButton",
    props: {
        element: {
            type: Object,
            reqired: true,
            default: () => ({name: "", completed: false}),
            validator: (element) => ["name", "completed"]
        },
    },
    methods: {
        ...mapActions(["removeTodo"]),
    }

}
</script>

<style>

</style>
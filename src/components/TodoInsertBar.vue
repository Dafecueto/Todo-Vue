<template>
    <div class="input-bar">
        <form action="" v-on:submit.prevent="addTodo(todoCreated(form))">
            <input v-model="form.name" type="text" placeholder="Inserte tarea" />
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "TodoInsertBar",
    data() {
        return {
            form: {
                name: "",
                completed: false 
            }
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        todoCreated(form) {
            const task = {
                name: form.name,
                completed: form.completed
            };
            this.form.name = "";
            return task
        }
    }

}
</script>

<style>

</style>
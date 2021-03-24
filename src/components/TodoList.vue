<template>
    <div class="container">
        <div class="todo-list">
        <table>
            <thead>
                <th>Tarea</th>
                <th>Eliminar</th>
            </thead>
            <tbody>
                <tr v-for="element in list" :key="element.name">
                    <td><Todo :element="element" /></td>
                    <td><RemoveTodoButton :element="element" /></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Todo from './Todo';
import RemoveTodoButton from './RemoveTodoButton';

export default {
    name: "TodoList",
    components: { Todo, RemoveTodoButton },
    props: {
        list: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    methods: {
        ...mapActions(['addTodo']),
    },



}
</script>

<style>

</style>
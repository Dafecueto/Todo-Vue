<template>
  <div class="completed-container">
      <TodoList :list="getAllCompleted" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoList from '../components/TodoList';

export default {
    name: "Completed",
    components: { TodoList },

    computed: {
        ...mapGetters(["getAllCompleted"]),

        getCompletedTasks() {
            return this.list.filter(({completed}) => completed === true)
        }
    }
}
</script>

<style>

</style>
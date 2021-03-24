<template>
  <div class="completed-container">
      <TodoList :list="getCompletedTasks" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoList from '../components/TodoList';

export default {
    name: "Completed",
    components: { TodoList },

    computed: {
        ...mapState(["list"]),

        getCompletedTasks() {
            return this.list.filter(({completed}) => completed === true)
        }
    }
}
</script>

<style>

</style>
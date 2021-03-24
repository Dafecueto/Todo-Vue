<template>
  <div class="active-container">
      <TodoList :list="filterByActiveTask" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoList from '../components/TodoList';



export default {
    name: 'Active',

    components: { TodoList },

    computed: {
        ...mapState(["list"]),

        filterByActiveTask() {
            return this.list.filter(({completed}) => completed === false)
        }
    }

}
</script>

<style>

</style>

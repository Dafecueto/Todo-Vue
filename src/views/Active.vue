<template>
  <div class="active-container">
      <TodoList :list="getAllActive" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TodoList from '../components/TodoList';



export default {
    name: 'Active',

    components: { TodoList },

    computed: {
        ...mapGetters(["getAllActive"]),

        filterByActiveTask() {
            return this.list.filter(({completed}) => completed === false)
        }
    }

}
</script>

<style>

</style>

<template>
  <div class="home">
    <TodoList :list="getAll" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '../components/TodoList';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    TodoList,
  },
  computed: {
    ...mapGetters(["getAll"])
  }
}
</script>

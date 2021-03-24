<template>
  <div class="home">
    <TodoList :list="list" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '../components/TodoList';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    TodoList,
  },
  computed: {
    ...mapState(["list"])
  }
}
</script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todos</router-link> |
      <router-link to="/active">Activos</router-link> |
      <router-link to="/completed">Completed</router-link>
    </div>
    <div class="container">
      <div class="insert-bar">
            <TodoInsertBar />
      </div>
      <div class="menu">
        <Menu />
      </div>
      <div class="router-view">
        <router-view/>
      </div>
      <div class="items-bar">
        <ItemsBar />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu';
import ItemsBar from './components/ItemsBar';
import TodoInsertBar from './components/TodoInsertBar';

export default {
  components: { Menu, ItemsBar, TodoInsertBar }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-view {
  position: relative;
  margin-bottom: 30px;
}

.menu {
  margin-bottom: 15px;
}


.container {
  display: grid;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

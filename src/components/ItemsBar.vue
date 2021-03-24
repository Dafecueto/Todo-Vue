<template>
  <div class="pending-bar">
      <span>{{ pendingTasksCount }} tareas pendientes</span>
      <span><ClearCompletedButton /></span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ClearCompletedButton from './ClearCompletedButton';

export default {

name: "ItemsBar",
components: { ClearCompletedButton },
props: {
    pending: 0
},

computed: {
    ...mapState(["list"]),

    pendingTasksCount() {
        return this.list.reduce(
            (pendingCount, {completed}) => 
                completed ? pendingCount : ++pendingCount , 0
        )
    },
}

}
</script>

<style>


</style>
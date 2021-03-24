<template>
  <div class="list-item">
    <label><input :checked="isCompleted" type="checkbox" @change="completeTodo(element.name)" name="element" :id="element.name"><span :class="completedStyle">{{element.name}}</span></label>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { RemoveTodoButton } from './RemoveTodoButton';

export default {
    name : "Todo",
    components: { RemoveTodoButton },
    props: {
        element: {
            type: Object,
            reqired: true,
            default: () => ({name: "", completed: false}),
            validator: (element) => ["name", "completed"]
        },
    },

    computed: {
        isCompleted() {
            return this.element.completed
        },
        completedStyle() {
            return this.element.completed ? "completed" : "pending";
        }
    },

    methods: {
       ...mapActions(["completeTodo"]),
    },
}
</script>

<style>

    .pending {
        color: green;
        font-weight: bolder;
    }

    .completed {
        color: gray;
        text-decoration: line-through;
    }

</style>
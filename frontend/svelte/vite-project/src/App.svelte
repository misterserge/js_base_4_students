<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Todo from './lib/Todo.svelte'
</script>

<main>
  <h1>TODO list</h1>

  <div class="card">
    <Counter />
  </div>
  <hr>
  <div class="card">
    <Todo />
  </div>
</main>

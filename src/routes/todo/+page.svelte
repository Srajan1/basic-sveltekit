<script>
	export let data
</script>

<h1>todos</h1>

<form method="POST">
	<label>
		add a todo:
		<input
			name="description"
			autocomplete="off"
		/>
	</label>
</form>

<ul class="todos">
	{#each Object.entries(data) as [id, todo]}
		<li>{id} {todo}</li>
	{/each}
</ul>
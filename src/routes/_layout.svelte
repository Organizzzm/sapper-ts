<style>
main {
  background-color: #fff;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 56em;
  padding: 2em;
  position: relative;
}
</style>

<script>
import Nav from "../components/Nav.svelte";

export let segment;
</script>

<Nav segment="{segment}" />

<main>
  <slot />
</main>

<template>
  <div>
    <section class="section">
      <div class="container">
        <figure class="image is-128x128">
          <img id="app-icon" src="../assets/logo.png" class="is-rounded">
        </figure>
        <p>A nice description for this dnd bot.</p>
        <a class="button is-primary">Invite to server</a>
        <router-link :to="'Login'" class="button is-primary is-outlined">Login</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
</style>
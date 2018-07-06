<template>
  <section class="container">
    <div>
      <div v-if="loggedIn()" class="content">
        <h2>Logged in</h2>
        <nuxt-link class="button is-warning" to="/logout">
          <span class="icon"><i class="fa fa-sign-out"></i></span>
          <span>Logout</span>
        </nuxt-link>
      </div>
      <div v-if="!loggedIn()" class="content">
        <h2>Please Login</h2>
        <nuxt-link class="button is-primary" to="/login">
          <span class="icon"><i class="fa fa-sign-in"></i></span>
          <span>Login</span>
        </nuxt-link>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-info is-outlined" @click="pingPublic">ping public</button>
        </p>
        <p class="control">
          <button class="button is-link is-outlined" @click="pingPrivate">ping private</button>
        </p>
      </div>

      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              {{message}}
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      message: null
    }),
    methods: {
      loggedIn() {
        return this.$auth0.isAuthenticated();
      },
      async pingPublic() {
        const returnMessage = await this.$axios.$get('/api/v1/public');
        this.message = returnMessage;
      },
      async pingPrivate() {
        const returnMessage = await this.$axios.$get('/api/v1/private');
        this.message = returnMessage;
      }
    }
  };
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

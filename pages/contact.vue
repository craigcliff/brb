
<template>
  <section class="section is-medium">
    <div class="container has-text-centered">
      <h1 class="title">Contact Me</h1>
      <p>
        You can follow me on Twitter: <a href="https://twitter.com/craigcliff" target="_blank">@craigcliff</a>
      </p>
    </div>
  </section>
</template>

<script>
export default{
  data () {
    return {
      checked: false
    }
  },
  methods:{
    toggleShow() {
      this.checked = !this.checked;
    }
    
  }
  }
</script>
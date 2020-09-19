<template>
    <div>
        <h1 ref="myref">This is second new vue hook </h1>
        <p>My name is: {{name}}</p>
    </div>
</template>

<script>
 export default {
      data() {
          return {
              name: 'kaung',
          }
      },

      beforeCreate() {
          console.log(this.name)
      },

      created() {
          console.log('data and other rfunction', this.name)
      },
      mounted() {
          console.log(this.$refs.myref)
      }
 }
</script>
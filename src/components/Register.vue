<style type="text/css">
  .error{
    border: 1px solid red;
  }


</style>
<template>
  <div class="hello">
    <br/>
    <input type="text" value="" v-model="firstname" v-bind:class="{ error : isFirstnameValid }" placeholder="First Name"> 
    <br/><br/>
    <input type="text" value="" v-model="lastname" v-bind:class="{ error : isLastnameValid }" placeholder="Last Name">
    <br/><br/>
    <button @click="test()">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      firstname: "",
      lastname: "",
      isFirstnameValid: false
    }
  },
  methods: {
      validateFirstname() {
        //- Return true if the firstname is blank
        return _.isEmpty(this.firstname)
      },
      test(){
         this.isFirstnameValid = false
         this.isFirstnameValid = false
         if(_.isEmpty(this.firstname))
         {
            this.isFirstnameValid = true
         }
         if(_.isEmpty(this.lastname))
         {
            this.isLastnameValid = true
         }
      }
  },
  computed: {
    isFirstnameValid() { return this.validateFirstname() && this.isInitialize }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

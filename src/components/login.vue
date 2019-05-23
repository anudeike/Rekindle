<template>
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <h1>log into rekindle</h1>
                <input type="text" placeholder="email" v-model="email"><br>
                <input type="text" placeholder="password" v-model="password"><br>

                <b-button class="submit" @click="login">submit</b-button>

                <p>Don't have an account yet? Click <router-link to="/signup">here</router-link> to create one</p>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "login",
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            login: function (){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                  (user) => {
                      this.$router.replace('home')
                  },
                   (err) => {
                      alert('Oops. ' + err.message)
                  }
                );
                //go to the home route once you have entered in everything
                this.$router.replace('home');
            }
        }
    }
</script>

<style scoped>
    .outer {
        display: table;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .middle {
        display: table-cell;
        vertical-align: middle;
    }

    .inner {
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        /*whatever width you want*/
    }

    h1{
        font-family: Roboto, sans-serif;
        font-weight: lighter;
        color: whitesmoke;
        padding: 40px;
    }

    input{
        margin-bottom: 30px;
        padding: 0px 70px 0px 10px;
        color: whitesmoke;
    }

    p{
        color: whitesmoke;
        margin-top: 30px;
    }

    .submit{
        padding: 7px 100px 7px 100px;
    }

</style>
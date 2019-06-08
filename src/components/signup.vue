<template>
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <h1>sign up for rekindle</h1>
                <input type="email" v-model="email" placeholder="email"><br>
                <input type="password" v-model="password" placeholder="password"><br>
                <!--will add some type of comfirm password but could complicate things-->

                <b-button class="submit" @click="signUp">submit</b-button>
                <p>already have an account? Click <router-link to="/login">here</router-link> to log in.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase';
    export default {
        name: "signup",
        data(){
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            signUp: function(){
                //should set up the authentication - uses a javascript promise
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home');
                    },
                    (err) => {
                        alert('Oops.' + err.message)
                    }
                );
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

    .submit{
        padding: 7px 100px 7px 100px;
    }

    p{
        color: whitesmoke;
        margin-top: 30px;
    }
    *:focus{
        outline: none;
    }
</style>
<template>
    <div id="main">
        <b-navbar class="navigation-bar" dark>
            <b-navbar-brand href="#">Rekindle </b-navbar-brand>

            <!--not entirely sure what a b-collapse is-->
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#"><span class="nav-items" @click="toHome">home</span></b-nav-item>
                    <b-nav-item href="#"><span class="nav-items">browse</span></b-nav-item>
                    <b-nav-item href="#"><span class="nav-items">random</span></b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <button class="new-btn" @click="navToNewStory">new story</button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data(){
            return {

            }
        },
        methods: {
            navToNewStory: function () {
                console.log("i a, being called")
                this.$router.replace('new');
            },
            toHome: function () {
                this.$router.replace('home');
            }
        }
    }
</script>

<style scoped>
    .nav-items{
        color: whitesmoke;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        color: whitesmoke;
    }

    .navigation-bar{
        background-color: #2B2B2B;
    }

    .new-btn{
        font-family: Roboto, sans-serif;
        font-weight: lighter;
        background-color: #954DFF;
        color: whitesmoke;
        padding: 10px 40px 10px 40px;
        border-radius: 5px;
        outline: none;
    }

    .new-btn:hover{
        background-color: #7f43d8;
    }

    .new-btn:active{
        background-color: #6d39ba;
    }



</style>
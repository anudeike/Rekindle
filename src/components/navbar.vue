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
                    <b-nav-item><span>{{ email }}</span></b-nav-item>
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
        props: ["email"],
        data(){
            return {

            }
        },
        methods: {
            navToNewStory: function () {
                console.log("new story is being called");
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
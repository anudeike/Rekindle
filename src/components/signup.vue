<template>
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <h1>sign into rekindle</h1>
                <input type="email" placeholder="email"><br>
                <input type="text" placeholder="username"><br>
                <input type="password" placeholder="username"><br>
                <input type="password" placeholder="password"><br>

                <b-button class="submit">submit</b-button>
                <p>already have an account? Click <router-link to="/login">here</router-link> to log in.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "signup"
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
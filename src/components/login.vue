<template>
    <div class="outer">
        <div class="middle">
            <div class="inner">
                <h1>log into rekindle</h1>
                <input type="text" placeholder="username"><br>
                <input type="password" placeholder="username"><br>
                <input type="password" placeholder="password"><br>

                <b-button class="submit">submit</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {

            }
        },
        methods: {}
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
        padding-right: 70px;
    }

    .submit{
        padding: 7px 100px 7px 100px;
    }

</style>
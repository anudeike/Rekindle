<template>
    <div>

        <b-container>
            <b-row>
                <b-col cols="12">
                    <h1 class="display-1 white--text">
                        Welcome, {{ email }}
                    </h1>
                    <b-card title="Story Name" sub-title="By Auther McWriter" class="story-card">
                        <b-card-text>
                            Some example text that is supposed to be the content of the story
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        props:{
            email: String
        },
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
.story-card{
    max-width: 1000rem;
    color: white;
    background-color: transparent;
    box-shadow: 0px 0px 2px lightgrey;
    padding: 7px 0px 7px 40px;
}
.story-card:hover{
    box-shadow: 0px 0px 3px white;
}
</style>
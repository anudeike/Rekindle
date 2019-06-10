<template>
    <div>

        <b-container>
            <b-row>
                <b-col cols="12">
                    <h1 class="display-1 white--text">
                        Welcome, {{ email }}
                    </h1>
                    <div v-for="post in posts">
                        <b-card class="story-card">
                            <b-card-title>
                                {{ post.title }}
                            </b-card-title>
                            <b-card-sub-title>
                                a subtitle
                            </b-card-sub-title>
                            <b-card-text>
                                {{ post.content }}
                            </b-card-text>
                        </b-card>
                    </div>
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
                posts: []
            }
        },
        methods: {

        },
        created() {
            this.$http.get('https://rekindle-f3fdc.firebaseio.com/posts.json').then(function(data){
                //returns a data.json promise obj
                return data.json();
            }).then(function (data) {
                var postArray = [];
                for(let key in data){
                    data[key].id = key;
                    postArray.push(data[key]);
                }
                this.posts = postArray;
                console.log(data)
            })
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
    margin: 30px;
}
.story-card:hover{
    box-shadow: 0px 0px 3px white;
}
</style>
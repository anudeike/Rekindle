<template>
  <div class="about">

    <!--contains the main content that the user will type and submit their stuff into-->
    <div class="content">
      <v-form ref="form">
        <v-text-field v-model="model" label="Title"></v-text-field>
      </v-form>

      <v-textarea name="input-7-1" label="Default style" value="nigga" hint="Hint text"></v-textarea>
    </div>

  </div>
</template>

<style scoped>
  .content{
    margin: 20px;

  }
</style>

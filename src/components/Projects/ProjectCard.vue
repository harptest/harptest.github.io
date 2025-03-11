<template>
    <router-link :to="project.link" class= "project"> 
        <div class= "project-box">
            <h4 class="project-name">{{ project.name }}</h4> 
        </div>
        
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});

</script>

<style lang="css" scoped>
    .project{
        margin-bottom: 3%;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        text-decoration: none;
    }
    .project-box{
        width: 15rem;
        height: 15rem;
        border-radius: 10%;
        background: linear-gradient(to bottom, #54204d 0%,#7db9e8 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 1rem;
    }
    .project-name{
        color: white;
        
    }
</style>
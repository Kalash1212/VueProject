<template>
    <v-row>
        <v-col>
<v-btn v-on:click = 'onBtnClick' color = 'teal' dark class=""> Add New Cost <v-icon>mdi-plus</v-icon> </v-btn>
</v-col>
</v-row>
</template>

<script>
    export default{
        name: 'AddButton',
        methods: {
            onBtnClick(){
                this.$emit('show')
            }
        }
    }
</script>

<style lang="scss">
.btn{
    background-color: #16a99e;
    border: 1px solid #000;
    border-radius: 3px;
    color: white;
    padding: 7px 25px;
    display: inline-block;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        border-color: transparent;
        
    }
}
</style>
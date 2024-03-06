<template>
    <v-dialog v-model="dialog" max-width = "800px">
        <v-card class="text-left pa-8 form">
            <v-text-field placeholder='Date' v-model='date'></v-text-field>
            <v-text-field placeholder='Type' v-model='category'></v-text-field>
            <v-text-field placeholder='Amount' v-model='value'></v-text-field>
            <v-row>
                <v-col :cols = "8">
                    <v-btn v-on:click = 'onSaveClick' color = 'teal' block dark class=""> Save </v-btn>
                </v-col>
                <v-col :cols = "4">
                    <v-btn v-on:click = 'backHome' color = 'teal' block dark class=""> Back </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-dialog>
</template>

<script>
export default{
    name: 'AddPaymentForm',
    data(){
        return{
            dialog: false,
            ModalWindoWId: this.$store.getters.getModalWindowId,
            changingItem:'',
            id:'',
            date:'',
            category:'',
            value:'',
        }
    },
    mounted(){
        this.ModalWindoWId = this.$store.getters.getModalWindowId;
        if(this.$route.params.type && this.$route.params.value){
            this.category = `${this.$route.params.type}`;
            this.value = `${this.$route.params.value}`;
            this.onSaveClick();
            this.$router.replace('/')
        }
        else if (this.$route.params.type){
            this.category = `${this.$route.params.type}`;
            this.dialog = !this.dialog;
        };

        if (this.ModalWindoWId){
            this.changingItem = this.$store.getters.getPaymentsList[this.ModalWindoWId-1];
            this.id = this.changingItem.id
            this.date = this.changingItem.date
            this.category = this.changingItem.category
            this.value = this.changingItem.value
        }
    },
    computed:{
        getCurrentDate(){
            const today = new Date();
            const d = today.getDate()
            const m = today.getMonth()+1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    },
    methods:{
        PopUp(){
            this.dialog = !this.dialog
        },
        onSaveClick(){
            if (this.ModalWindoWId){
                const data = {
                id:this.id,
                date:this.date,
                category:this.category,
                value:+this.value,
            }
            this.$store.commit('changePaymentsList', data);
            this.$router.replace('/');
            this.$emit('show')
            }
            else{
            const data = {
                id:this.$store.getters.getPaymentsList.length+1,
                date:this.date||this.getCurrentDate,
                category:this.category,
                value:+this.value,
            }
            this.$store.commit('addToPaymentsList', data);
            this.$router.replace('/');
            this.$emit('show')
        }
        },
        backHome(){
            this.$router.replace('/');
            this.$emit('show')
        }
    }
}
</script>


<style lang='scss'>
</style>
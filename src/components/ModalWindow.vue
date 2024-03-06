<template>
    <div class="modalWindow" >
        <transition name="paymentFormTransition">
        <AddPaymentForm ref="AddPaymentFormComponent"
        v-on:show = 'PopupActive'></AddPaymentForm>
    </transition>
        <v-row>
            <v-col>
                <v-btn dark color = 'teal' x-small class="" @click="PopupActive">Редактировать</v-btn>
            </v-col>
            <v-col>
                <v-btn dark color = 'teal' x-small class="modalWindow__close" @click="$modal.hide()">Закрыть</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
            <v-btn block dark color = 'teal' x-small class="" @click="deleteItem">Удалить</v-btn>
            </v-col>
        </v-row>
    </div>
    </template>

    <script>
    import AddPaymentForm from '@/components/AddPaymentForm.vue'

    export default {
        components:{
       AddPaymentForm,
     },
    data(){
       return {
        ModalWindoWId: this.$store.getters.getModalWindowId
       }
     },
    methods:{
        PopupActive (){
         this.$refs.AddPaymentFormComponent.PopUp()
       },
        deleteItem(){
            this.$store.commit("deleteSelectedItem", this.ModalWindoWId);
            this.$modal.hide()
        },
    }
}
</script>

<style lang='scss'>
    .modalWindow{
        padding: 4px;
        background-color: white;
        border: 1px solid #000;
        width: 220px;
        height: 90px;
        box-shadow: 0px 4px 2px -2px rgb(0 0 0 / 25%), 0px 3px 3px 0px rgb(0 0 0 / 16%), 0px 2px 6px 0px rgb(0 0 0 / 14%);
        border-radius: 4px;

        &__close:hover{
            cursor: pointer;
        }
    }
    .paymentFormTransition-enter-active,.paymentFormTransition-leave-active{
    transition: opacity .4s;
  }
  .paymentFormTransition-enter,.paymentFormTransition-leave-to{
    opacity: 0;
}
</style>

    
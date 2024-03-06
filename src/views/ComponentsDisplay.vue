<template>
  <div>
  <v-app-bar app>
    <v-btn plain :ripple = 'false' to="/AddPayment/food/300">Еда</v-btn>
    <v-btn plain :ripple = 'false' to="/AddPayment/transport/200">Транспорт</v-btn>
    <v-btn plain :ripple = 'false' to="/AddPayment/medicine/100">Лекарства</v-btn>
  </v-app-bar> 
  <v-content>
    <v-container>
      <v-row>
        <v-col>
      <header>
        <div>My personal costs</div>
      </header>
         <addButton v-on:show = 'PopupActive'></addButton>
          <transition name="paymentFormTransition">
          <AddPaymentForm ref="AddPaymentFormComponent" class="AddPaymentForm" v-on:show = 'PopupActive' ></AddPaymentForm>
          </transition>
        <PaymentsDisplay></PaymentsDisplay>
      </v-col>
        <v-col>
          <GoogleChart> </GoogleChart>
        </v-col>
      </v-row>
      </v-container>
      </v-content>
      </div>
   </template>
   
   
   <script>
   import GoogleChart from '@/components/GoogleChart.vue';
   import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
   import AddPaymentForm from '@/components/AddPaymentForm.vue'
   import AddButton from '@/components/AddButton.vue'
   
   
   export default{
     name: 'ComponentsDisplay',
     components:{
       GoogleChart,
       AddButton,
       PaymentsDisplay,
       AddPaymentForm,
     },
     data(){
       return {
       }
     },
     methods:{
       PopupActive (){
         this.$refs.AddPaymentFormComponent.PopUp()
       },
     },
   }
   </script>
   
   
   <style lang='scss'>
    .AddPaymentForm{
      z-index: 2;
    }
     header{
       font-size: 32px;
       font-weight: bold;
       margin-bottom: 10px;
     }
     a{
      text-decoration: none;
      color: black;
      margin-left: 20px;
     }
     a:hover{
      color: #16a99e;
     }
     .paymentFormTransition-enter-active,.paymentFormTransition-leave-active{
    transition: opacity .4s;
  }
  .paymentFormTransition-enter,.paymentFormTransition-leave-to{
    opacity: 0;
}
   </style>
  
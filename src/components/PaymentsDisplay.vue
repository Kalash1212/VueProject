<template>
  <div class="costs-list">
    <v-row class = 'mt-4 costs-list__header'>
      <v-col :cols = "1">#</v-col>  
      <v-col :cols = "4">Date</v-col>
      <v-col :cols = "4">Category</v-col>
      <v-col :cols = "3">Value</v-col>
  </v-row>
    <v-row class="costs-list__item" v-for=" (item, indx) in renderArray" v-bind:key="indx" >
        <v-col :cols = "1">{{item.id}}</v-col>  
        <v-col :cols = "4">{{item.date}}</v-col>
        <v-col :cols = "4">{{item.category}}</v-col>
        <v-col :cols = "2">{{item.value}}</v-col>
        <v-col :cols = "1" class="costs-list__item__modalPoints" @click="$modal.show(item.id)"><v-icon>mdi-dots-vertical</v-icon></v-col>
        <transition name = 'modalTransition'>
        <ModalWindow class="costs-list__item__modalWindow" v-if="ModalWindoWId == item.id"></ModalWindow>
      </transition>
    </v-row>
  
  <v-row class="costs-list__footer">
    <span class="point" v-on:click="leftPage"><v-icon>mdi-chevron-left</v-icon></span>
    <v-col :cols = "1" class="point costs-list__pagination" v-for="i in paginationLength" v-on:click='selectPage(i)' v-bind:class="{ active: isActive(i) }">
      {{i}}
    </v-col>
    <span class="point" v-on:click="rightPage"><v-icon>mdi-chevron-right</v-icon></span>
  </v-row>
</div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow';

  export default{
    name: "PaymentsDisplay",
    components: { ModalWindow },
    data() {
        return { length: 1, 
                selectedPage: this.$store.getters.getselectedPage,
                ModalWindoWId: this.$store.getters.getModalWindowId,

        };
    },
    created() {
        this.paginationLength;
        this.renderArray;
    },
    mounted () {
  this.$modal.EventBus.$on('show', this.onShown)
  this.$modal.EventBus.$on('hide', this.onHide)
},

    methods: {
      onShown (id) {
        this.ModalWindoWId = id;
        this.$store.commit("changeModalWindowId", id);
      },
      onHide () {
        this.ModalWindoWId = ''
      this.$store.commit("changeModalWindowId", '');
      },
        selectPage(page) {
            this.selectedPage = page;
            this.$store.commit("changeSelectedPage", this.selectedPage);
        },
        isActive(page) {
            if (page == this.selectedPage) {
                return true;
            }
            else {
                return false;
            }
        },
        leftPage() {
            if (this.selectedPage > 1) {
                this.selectedPage--;
                this.$store.commit("changeSelectedPage", this.selectedPage);
            }
            else {
                this.selectedPage = this.length;
                this.$store.commit("changeSelectedPage", this.selectedPage);
            }
        },
        rightPage() {
            if (this.selectedPage < this.length) {
                this.selectedPage++;
                this.$store.commit("changeSelectedPage", this.selectedPage);
            }
            else {
                this.selectedPage = 1;
                this.$store.commit("changeSelectedPage", this.selectedPage);
            }
        }
    },
    computed: {
        paginationLength() {
            this.length = 0;
            for (let i = 0; i < this.$store.getters.getPaymentsList.length; i += 10) {
                this.length++;
            }
            return this.length;
        },
        renderArray() {
            return this.$store.getters.getPaymentsList.slice(this.selectedPage * 10 - 10, this.selectedPage * 10);
        }
    },
}
</script>

<style lang='scss'> 
  .costs-list{
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    &__item{
      height: 60px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      &__modalPoints{
        text-align: center;
      font-weight: bold;
      }

      &__modalPoints:hover{
        cursor: pointer;
      }

      &__modalWindow{
        position: absolute;
        left: 400px;
        top: 40px;
        z-index: 2;
      }
    }
    &__header{
      height: 60px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__footer{
      padding: 0 100px;
      height: 60px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__pagination{
      height: 60px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .active{
    color: #16a99e;
    font-weight: bold;
  }
  .modalTransition-enter-active,.modalTransition-leave-active{
    transition: opacity .4s;
  }
  .modalTransition-enter,.modalTransition-leave-to{
    opacity: 0;
}
.point:hover{
  cursor: pointer;
}
</style>

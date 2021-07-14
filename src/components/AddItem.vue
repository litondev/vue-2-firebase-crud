<template>
  <div class="container">
   <div class="card">

    <div class="card-header">
     <h3>Add Item</h3>
    </div>

    <div class="card-body">
     <form v-on:submit.prevent="addItem">
      <div class="form-group">
       <label>Item Name : </label>
       <input type="text" class="form-control" v-model="nama"/>
      </div>
      <div class="form-group">
       <label>Item Price: </label>
       <input type="text" class='form-control' v-model="price"/>
      </div>
      <div class="form-group">
       <input type="submit" class="btn btn-primary" value="Add Item"/>
      </div>
     </form>
    </div>

    {{items}}
   </div>
  </div>
</template>

<script>
import firebase from '../config/db.js'

export default {
 firestore(){
   return {
    items : firebase.firestore().collection('items'),
   }
 },
 data () {
  return {
   nama: '',
   price: '',
   items: [],
  }
 },
 methods:{
  addItem(){
   firebase.firestore().collection('items').add({
    name : this.nama,
    price : this.price
   })
   this.$router.push('/index')
  }
 }
}
</script>

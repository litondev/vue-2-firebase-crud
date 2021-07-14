<template>
 <div>
 <h1>Home</h1>
 <table>
  <tr>
   <td>Nama</td>
   <td><input type="text" v-model="nama"></td>
  </tr>
  <tr>
   <td>Price</td>
   <td><input type="text" v-model="price"></td>
  </tr>
  <tr>
   <Td colspan="2">
    <button @click="update()">Update</button>
   </td>
  </tr>
 </table>

 <table>
  <tr>
   <td>Nama</td>
   <td>Price</td>
   <td>Opsi</td>
  </tr>
  <tr v-for="a in items" :key="a.id">
   <td>{{a.name}}</td>
   <td>{{a.price}}</td>
   <td>
    <button @click="edit(a.id,a.name,a.price)">Edit</button>
    <button @click="hapus(a.id)">Hapus</button>
   </td>
  </tr>
 </table>
 </div>
</template>

<script>
import firebase from '../config/db'

export default {
 data () {
  return {
   items: [],
   nama: '',
   price: '',
   id: ''
  }
 },
 firestore(){
  return {
   items: firebase.firestore().collection("items")
  }
 },
 methods: {
  hapus(id){
   firebase.firestore().collection("items").doc(id).delete()
  },
  edit(id,nama,price){
   this.id = id
   this.nama = nama
   this.price = price
  },
  update(){
   firebase.firestore().collection("items").doc(this.id).set({
    name: this.nama,
    price: this.price
   })
  }
 }
}
</script>

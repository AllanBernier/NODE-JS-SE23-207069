<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

let name = "Toto"

let products = ref({})

onMounted( async () => {
    products.value = await getAll()     
})

const getAll = () => {
    return axios.get("http://localhost:3000/product").then((res) => {return res.data});
}

const deleteProduct = async (product) => {
    await axios.delete("http://localhost:3000/product/" + product.id)   
    products.value = await getAll()
}

</script>

<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>
                    <router-link to="/create">Create</router-link> |
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <th>{{ product.id }}</th>
                <th>{{ product.name }}</th>
                <th>{{ product.price }}</th>
                <th>
                    <router-link :to="'/edit/' + product.id">Edit</router-link> |
                    <button @click="deleteProduct(product)"> Delete</button>
                </th>
            </tr>
        </tbody>
    </table>
</template>


<style>

</style>
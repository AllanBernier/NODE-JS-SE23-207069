<script setup>

import ProductForm from '@/components/ProductForm.vue'
import router from '@/router'
import axios from 'axios'
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
let product = ref({})


onMounted( async() => {
    product.value = await axios.get("http://localhost:3000/product/" + route.params.id).then( (res) => {
        return res.data
    })
})

const editProduct = async (product) => {
    await axios.put("http://localhost:3000/product/" + route.params.id, product)
    router.push('/')
}




</script>

<template>
    <h1>Edit Page</h1>

    <product-form :product="product" @submit="editProduct"/>
</template>
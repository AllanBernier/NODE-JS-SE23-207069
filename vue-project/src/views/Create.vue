<script setup>
import axios from 'axios'
import router from '@/router'
import ProductForm from '@/components/ProductForm.vue'


const createProduct = async (product) => {
    await axios.post("http://localhost:3000/product", product )
    router.push('/')
}


</script>

<template>
    <div>
        Create Page
    </div>
    
    <product-form @submit="createProduct"/>
</template>

<style>
</style>
<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()


let props = defineProps({
    product : {
        type: String,
        default: {
            name : '',
            price : ''
        }
    },
})

</script>
<template>
<form >
    <div class="form-horizontal">
        <div class="form-group row">
            <label class="cool-form-label col-sm-2" for="name">Name</label>
            <div class="col-sm-8">
                <input v-model="product.name" class="form-control" value="" name="name" type="text">
            </div>

        </div>

        <div class="form-group row">
            <label class="cool-form-label col-sm-2" for="price">Price</label>
            <div class="col-sm-8">
                <input v-model="product.price" class="form-control" name="price" value="" type="number">
            </div>

        </div>
        
        <div class="form-group row">
            <label class="cool-form-label col-sm-2" for="price"></label>
            <div class="col-sm-8">
                <button @click.prevent="$emit('submit', product)" class="btn btn-default btn-success"> 
                    Edit                    
                </button>
            </div>

        </div>
    </div>
</form>

</template>

<style>
</style>
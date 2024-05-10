<script lang="ts" setup>
import { products } from "~/composables/constants/products";
import type { Product } from "~/types/products";

import { useRoute } from "vue-router";
import { ref } from "vue";
const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) : null;
const product = ref<Product | undefined>(products.find((item: Product) => item.id === id));
</script>
<template>
  <DetailProduct :product="product"/>
</template>

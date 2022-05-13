<template>
    <div class="">{{ title }}</div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    title: String,
});

const { title } = toRefs(props);
</script>

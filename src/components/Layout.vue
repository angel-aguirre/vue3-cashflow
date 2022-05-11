<template>
    <div class="flex justify-around items-center py-3.5 fixed w-screen">
        <slot name="header"></slot>
    </div>
    <div class="flex justify-around items-center py-3.5 min-h-screen">
        <slot name="resume"></slot>
    </div>
    <div
        class="flex justify-around items-center py-3.5 w-screen z-10 absolute flex-col bottom-0 bg-white rounded-3xl shadow-slide-panel"
    >
        <div
            @click="showMovements = !showMovements"
            class="flex justify-center items-center p-6 w-full box-border"
        >
            <div class="w-28 h-2 bg-dark-light rounded"></div>
        </div>
        <div class="h-4/6 w-full" v-show="showMovements">
            <slot name="movements"></slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showMovements = ref(false);
</script>

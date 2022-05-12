<template>
    <main class="flex justify-center items-center flex-col w-screen">
        <p class="m-0 text-center text-base">{{ labelToShow }}</p>
        <h1 class="m-0 text-center mt-3 text-2xl text-brand-green">
            {{ amountCurrency }}
        </h1>
        <div
            class="flex justify-center items-center w-full py-12 px-6 box-border"
        >
            <slot name="graphic"></slot>
        </div>
        <div class="">
            <slot name="action"></slot>
        </div>
    </main>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { mxCurrency } from '@/utilities/currencyFormat.js';

const props = defineProps({
    label: String,
    date: String,
    amount: Number,
    totalAmount: Number,
});

const amountToShow = computed(() => {
    return props.amount !== null ? props.amount : props.totalAmount;
});

const labelToShow = computed(() => {
    return props.label !== null ? props.label : props.date;
});

const amountCurrency = computed(() => {
    return mxCurrency.format(amountToShow.value);
});
</script>

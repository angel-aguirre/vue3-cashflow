<template>
    <div
        class="flex justify-between items-center w-full p-4 bg-soft-blue rounded-lg box-border"
    >
        <div class="w-full">
            <h4 class="m-0 mb-2 p-0">{{ title }}</h4>
            <p class="m-0 p-0">{{ description }}</p>
        </div>
        <div class="flex justify-between items-end flex-col">
            <img
                @click="remove"
                src="@/assets/img/trash-icon.svg"
                alt="Icono borrar"
            />
            <p
                :class="{
                    'text-red-600': isNegative,
                    'text-green-600': !isNegative,
                }"
            >
                {{ amountCurrency }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs, computed, defineEmits } from 'vue';
import { mxCurrency } from '@/utilities/currencyFormat.js';

const props = defineProps({
    id: Number,
    title: String,
    description: String,
    amount: Number,
});

const { id, title, description, amount } = toRefs(props);

const amountCurrency = computed(() => {
    return mxCurrency.format(amount.value);
});

const isNegative = computed(() => {
    return amount.value < 0;
});

const emit = defineEmits(['remove']);

const remove = () => {
    emit('remove', id.value);
};
</script>

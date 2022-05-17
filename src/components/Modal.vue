<template>
    <div class="z-10 absolute top-0 right-0 bottom-0 left-0 bg-white">
        <div class="flex justify-between items-center w-full p-6 box-border">
            <p class="m-0 text-2xl text-brand-blue">Nuevo movimiento</p>
            <img
                @click="close"
                src="@/assets/img/close-icon.svg"
                alt="Cerrar"
            />
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['close']);

const close = () => emit('close');
</script>

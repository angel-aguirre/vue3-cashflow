<template>
    <button
        @click="showModal = true"
        class="text-white text-xl bg-brand-blue border-none w-full py-6 px-14 rounded-3xl box-border"
    >
        Agregar movimiento
    </button>
    <teleport to="#app">
        <Modal @close="showModal = false" v-show="showModal"
            >Formulario del modal</Modal
        >
    </teleport>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
</script>

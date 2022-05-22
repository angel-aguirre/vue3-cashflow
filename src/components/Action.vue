<template>
    <button
        @click="showModal = true"
        class="text-white text-xl bg-brand-blue border-none w-full py-6 px-14 rounded-3xl box-border"
    >
        Agregar movimiento
    </button>
    <teleport to="#app">
        <Modal @close="showModal = false" v-show="showModal">
            <form @submit.prevent="submit" class="text-xl w-full">
                <div class="flex justify-between flex-col py-4 px-6">
                    <label class="mb-2">Titulo</label>
                    <input
                        v-model="title"
                        class="text-xl border-2 border-brand-blue rounded-lg p-2"
                        type="text"
                    />
                </div>
                <div class="flex justify-between flex-col py-4 px-6">
                    <label class="mb-2">Monto</label>
                    <input
                        v-model="amount"
                        class="text-xl border-2 border-brand-blue rounded-lg p-2 text-right"
                        type="number"
                    />
                </div>
                <div class="flex justify-between flex-col py-4 px-6">
                    <label class="mb-2">Descripcion</label>
                    <textarea
                        v-model="description"
                        rows="4"
                        class="text-xl border-2 border-brand-blue rounded-lg p-2"
                    ></textarea>
                </div>
                <div class="flex justify-between flex-col py-4 px-6">
                    <label class="flex items-center mt-2">
                        <input
                            v-model="movementType"
                            class="appearance-none w-5 h-5 text-brand-blue border-2 border-brand-blue rounded-[50%] checked:bg-brand-blue"
                            value="Ingreso"
                            type="radio"
                        />
                        <span class="mt-1 ml-2">Ingreso</span>
                    </label>
                    <label class="flex items-center mt-2">
                        <input
                            v-model="movementType"
                            class="appearance-none w-5 h-5 text-brand-blue border-2 border-brand-blue rounded-[50%] checked:bg-brand-blue"
                            value="Gasto"
                            type="radio"
                        />
                        <span class="mt-1 ml-2">Gasto</span>
                    </label>
                </div>
                <div class="py-0 px-6 pb-2">
                    <button
                        class="text-white text-xl bg-brand-blue border-none w-full py-6 px-14 rounded-[60px] box-border"
                    >
                        Agregar
                    </button>
                </div>
            </form>
        </Modal>
    </teleport>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);
const title = ref('');
const amount = ref(0);
const description = ref('');
const movementType = ref('Ingreso');

const emit = defineEmits(['create']);

const submit = () => {
    showModal.value = false;
    emit('create', {
        title: title.value,
        amount: movementType.value === 'Ingreso' ? amount.value : -amount.value,
        description: description.value,
        time: new Date(),
        id: new Date().getTime(),
    });
};
</script>

<template>
    <div class="max-h-full py-0 px-2 mb-3">
        <h2 class="mt-2 mr-4 mb-6 ml-4 text-brand-blue">Historial</h2>
        <div class="max-h-[68vh] flex flex-col gap-2 overflow-y-scroll">
            <Movement
                v-for="movement in movements"
                :key="movement.id"
                :id="movement.id"
                :title="movement.title"
                :description="movement.description"
                :amount="movement.amount"
                @remove="remove"
            />
        </div>
    </div>
</template>

<script setup>
import Movement from '@/components/Movements/Movement.vue';
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    movements: {
        type: Array,
        default: () => [],
    },
});

const { movements } = toRefs(props);

const remove = (id) => {
    console.log(id);
};
</script>

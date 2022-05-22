<template>
    <Layout>
        <template #header>
            <Header />
        </template>
        <template #resume>
            <Resume
                :label="label"
                :date="date"
                :amount="amount"
                :total-amount="totalAmount"
            >
                <template #graphic>
                    <Graphic :amounts="amounts" />
                </template>
                <template #action>
                    <Action @create="create" />
                </template>
            </Resume>
        </template>
        <template #movements>
            <Movements @remove="remove" :movements="movements" />
        </template>
    </Layout>
</template>

<script setup>
import Layout from '@/components/Layout.vue';
import Header from '@/components/Header.vue';
import Resume from '@/components/Resume/Index.vue';
import Graphic from '@/components/Resume/Graphic.vue';
import Action from '@/components/Action.vue';
import Movements from '@/components/Movements/Index.vue';
import { ref, computed, onMounted } from 'vue';

const label = 'Ahorro total';
const date = '11  de Mayo de 2022';
const amount = null;

const movements = ref([]);

onMounted(() => {
    const movs = JSON.parse(localStorage.getItem('movements'));

    if (Array.isArray(movs)) {
        movements.value = movs.map((m) => {
            return { ...m, time: new Date(m.time) };
        });
    }
});

const amounts = computed(() => {
    console.log('amounts', movements.value);
    const lastDays = movements.value
        .filter((m) => {
            const today = new Date();
            const oldDate = today.setDate(today.getDate() - 30);
            return m.time > oldDate;
        })
        .map((m) => m.amount);

    return lastDays.map((m, i) => {
        const lastMovements = lastDays.slice(0, i);
        return lastMovements.reduce((suma, movement) => {
            return suma + movement;
        }, 0);
    });
});

const totalAmount = computed(() => {
    return movements.value.reduce((suma, mov) => {
        return suma + mov.amount;
    }, 0);
});

const create = (movement) => {
    movements.value.push(movement);
    save();
};

const remove = (id) => {
    movements.value = movements.value.filter((m) => m.id !== id);
    save();
};

const save = () => {
    localStorage.setItem('movements', JSON.stringify(movements.value));
};
</script>

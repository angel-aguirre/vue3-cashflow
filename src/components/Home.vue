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
                <template #graphic>Graphic</template>
                <template #action>Action</template>
            </Resume>
        </template>
        <template #movements>
            <Movements />
        </template>
    </Layout>
</template>

<script setup>
import Layout from '@/components/Layout.vue';
import Header from '@/components/Header.vue';
import Resume from '@/components/Resume/Index.vue';
import Movements from '@/components/Movements.vue';

const label = 'Ahorro total';
const date = '11  de Mayo de 2022';
const amount = 1000;
const totalAmount = 100000;
</script>

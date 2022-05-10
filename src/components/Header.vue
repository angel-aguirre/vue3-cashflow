<template>
    <header class="flex justify-around items-center w-screen">
        <img
            @click="reload"
            class="w-12"
            src="@/assets/img/cashflow-icon.svg"
            alt="Logo"
        />
        <h1 class="text-brand-green mt-2 text-xl">
            <span class="text-brand-blue">Cash</span>Flow
        </h1>
        <span class="w-12"></span>
    </header>
</template>

<script setup>
function reload() {
    window.location.reload();
}
</script>

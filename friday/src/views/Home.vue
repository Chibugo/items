<template>
    <div>
        <abooutHome />
        <beforeCard />
        <aboutCard />
        <afterCard />
    </div>
</template>

<script>
import abooutHome from '@/components/aboutHome.vue'
import beforeCard from '@/components/beforeCard'
import aboutCard from '@/components/aboutCard'
import afterCard from '@/components/afterCard'
export default {
components: {
    abooutHome, beforeCard, aboutCard, afterCard
}
}
</script>

<style>

</style>

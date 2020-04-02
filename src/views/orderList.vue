<template>
    <div class="orderList"> 
        <list-table></list-table>
        <turn-page></turn-page>
    </div>
</template>

<script>
import listTable from '../components/orderlist/listTable'
import turnPage from '../components/orderlist/turnPage'
    export default {
        components: {
            listTable,
            turnPage
        }
    }
</script>

<style>

</style>
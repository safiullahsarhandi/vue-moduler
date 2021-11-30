<template>
    <div>
        <!-- <Topbar v-if="topbar" @toggle-sidebar="toggleSidebar" :extended="sidebarShown" />
        <Sidebar v-if="sidebarShown" :extended="sidebarShown" /> -->
        <vue-snotify></vue-snotify>
        <slot />
    </div>
</template>
<style lang="sass">
@import "~vue-snotify/styles/material.scss";
</style>
<script>
// import Sidebar from "@/components/layout/Sidebar.vue";
// import Topbar from "@/components/layout/Topbar.vue";
// import { mapMutations, mapActions } from 'vuex';

export default {
    // components: { Sidebar, Topbar },
    props: {
        topbar: {
            type: Boolean,
            default: true
        },
        sidebar: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            sidebarShown: false,
        };
    },

}
</script>
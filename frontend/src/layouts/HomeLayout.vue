<template>
    <q-layout class="main" view="hHh lpr fFf">
        <q-header>
            <q-page-sticky expand position="top">
            <q-toolbar class="bg-primary text-white">
                <q-avatar>
                    <q-img src="https://www.michaelmerin.ml/img/vector2.png" />
                </q-avatar>
                <q-toolbar-title class="gradient__color">
                    Camelot
                </q-toolbar-title>
                <q-avatar size="30px" round dense >
                    <q-img 
                        src="https://placeimg.com/500/300/nature"
                        style="height: 30px; max-width: 30px;"
                    /> 
                </q-avatar> 
                <q-btn-dropdown flat :label="full_name">
                    <q-list>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                            <q-item-label>Profile</q-item-label>
                        </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                            <q-item-label>Log-out</q-item-label>
                        </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
                <q-btn flat icon="group_add"/>
            </q-toolbar>
            </q-page-sticky>
        </q-header>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import EssentialLink    from 'components/EssentialLink.vue'

export default
{
    name: 'HomeLayout',
    components: {
        EssentialLink
    },
	data: () =>
	({
		package_data: { version: '0.0.0' },
		leftDrawerOpen: false,
		navigation: [],
        tab: '',
        full_name: "Michael Merin",
	}),
    mounted()
    {
    },
    methods:
    {
    },
}
</script>

<style lang="scss">

    .gradient__color{
        text-transform: uppercase;
        font:20 px;
        font-weight: 600;
        background: -webkit-linear-gradient(90deg, $accent, $secondary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>

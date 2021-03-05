<template>
    <q-layout class="main bg__ground" view="hHh lpr fFf">
        <q-header>
            <q-page-sticky expand position="top">
            <q-toolbar class="bg-primary text-white q-px-xl padding__resoponsive">
                <q-avatar>
                    <q-img src="https://www.michaelmerin.ml/img/vector2.png" />
                </q-avatar>
                <q-toolbar-title class="logo__style gradient__color">
                   <div class="gt-xs">Camelot</div> 
                </q-toolbar-title>
                <q-avatar size="30px" round dense class="gt-xs">
                    <q-img 
                        src="https://placeimg.com/500/300/nature"
                        style="height: 30px; max-width: 30px;"
                    /> 
                </q-avatar> 
                <q-btn-dropdown flat :label="full_name" class="q-ml-sm margin__resoponsive">
                    <q-list>
                        <q-item clickable v-close-popup @click="$router.push({name: 'front_landing'})">
                        <q-item-section>
                            <q-item-label>Profile</q-item-label>
                        </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup @click="$router.push({name: 'front_landing'})">
                        <q-item-section>
                            <q-item-label>Log-out</q-item-label>
                        </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
                
                <q-btn flat icon="notifications">
                    
                    <q-badge v-if="notification_number != 0" color="secondary" floating>{{notification_number}}</q-badge>
                </q-btn>
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
        notification_number: 1,
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
        background: -webkit-linear-gradient(90deg, $accent, $secondary);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

</style>
<style scope>

    .logo__style{
         text-transform: uppercase;
        font:20px;
        font-weight: 600;
    }
    @media screen and (max-width: 800px) {
        .padding__resoponsive{
            padding-left: 10px;
            padding-right: 10px;
        }
        .margin__resoponsive{
            margin: 0;
        }
    }
</style>

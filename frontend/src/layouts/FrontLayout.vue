<template>
    <q-layout class="main" view="hHh lpr fFf">
       <div class="row">
      <div class="col-md-7 col-0 gt-sm paddin__left">
        <div>
          <q-img
            src="https://www.michaelmerin.ml/img/vector2.png"
            style="height: 150px; max-width: 250px"
            class="rounded-borders"
          />
        </div>
        <div class="max__width">
          <h6 class="q-mt-xl">When You’re Good at Building your Bussiness or Marketing Career or Both...</h6>
          <h1 class="q-mt-lg">You’ll be blessed in the  long term</h1>
          <a  href="" tabindex="0" class="q-mt-xl my__hover q-btn inline q-btn-item non-selectable q-btn--flat q-btn--rectangle text-black q-focusable q-hoverable q-btn--no-uppercase">
            <h6><span class="material-icons">keyboard_arrow_right</span>Wait... There’s More!</h6>
          </a>
        </div>
      </div>
      <div class="col-md-5 col-12">
        <div class="q-mx-auto q-pt-xl max__width">
          <q-page-container>
              <router-view />
          </q-page-container>
        </div>
      </div>
    </div>
    </q-layout>
</template>
<script>
import EssentialLink    from 'components/EssentialLink.vue'

export default
{
    name: 'FrontLayout',
    components: {
        EssentialLink
    },
	data: () =>
	({
		package_data: { version: '0.0.0' },
		leftDrawerOpen: false,
		navigation: [],
        tab: '',
        // route_name: 'front_dashboard'
	}),
    mounted()
    {
      // this.navigation = navigation;    
    },
    methods:
    {
    },
}
</script>

<style scoped>
  .row{
    padding: 100px;
    height: 100vh;
    background: #fff;
  }
  
  .paddin__left{
    padding-left: 10%;
  }
  .max__width{
    max-width:450px;
  }

  h1{
    font-weight: 800;
  }

  .my__hover{
   transition: all .2s linear;
  }
  .my__hover:hover{
    transform: translateX(10px);
  }

  @media screen and (max-width: 1023px) {
    .row{
      padding-left: 50px;
      padding-right: 50px;
    }
  }
  
  @media screen and (max-width: 599px) {
    .row{
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>

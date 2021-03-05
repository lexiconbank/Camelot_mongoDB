<template>
  <div class="bg__ground">
    <div class="__margin">
    </div>
    <q-tabs
        v-model="tab"
        dense
        active-color="primary"
        class="bg-white text-grey-6 navigation__bar"
    >
      <q-tab name="dashboard" icon="dashboard" label="Dashboard" />
      <q-tab name="wallet" icon="account_balance_wallet" label="Wallet" />
      <q-tab name="invite" icon="qr_code_scanner" label="Invite Friend"/>
      <q-tab name="nobility" icon="local_activity" label="Nobilities"/>
      <q-tab name="monarchy" icon="schema" label="Monarchy"/>
    </q-tabs>
    <q-tab-panels v-model="tab" animated class="q-mt-xl bg__ground">
      <q-tab-panel name="dashboard" class="component__layout">
        <u-q-dashboard></u-q-dashboard>
      </q-tab-panel>

      <q-tab-panel name="wallet" class="component__layout__smaller">
       <u-q-wallet></u-q-wallet>
      </q-tab-panel>

      <q-tab-panel name="invite" class="component__layout__smaller">
        <u-q-invite></u-q-invite>
      </q-tab-panel>

      <q-tab-panel name="nobility" class="component__layout">
        <u-q-dashboard></u-q-dashboard>
      </q-tab-panel>
      
      <q-tab-panel name="monarchy" class="component__layout">
        <u-q-dashboard></u-q-dashboard>
      </q-tab-panel>
    </q-tab-panels>
  </div>
  
 
</template>

<script>
import UQDashboard from "../../components/UQDashboard";
import UQWallet from "../../components/UQWallet";
import UQInvite from "../../components/UQInvite";
export default {
  components: {
    UQDashboard,
    UQWallet,
    UQInvite,
  },
  data: () => ({
    tab: 'dashboard'
  }),
  mounted() {},
  methods: {},
};
</script>
<style scope>
  .__margin
  {
      height:50px;
  }
  .navigation__bar
  {
      height: 80px;
      box-shadow: 0 0 10px 0px #bbbb;
  }
  .navigation__bar i
  {
    font-size: 30px;
  }
  .component__layout
  {
    max-width: 1000px;
    margin: auto;
  }
  .component__layout__smaller
  {
    max-width: 800px;
    margin: auto;
  }
</style>    
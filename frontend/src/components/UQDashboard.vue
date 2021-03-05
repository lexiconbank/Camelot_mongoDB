<template>
    <div>
        <div class="row" >
            <div class="col-12 col-md-5">
                <div class="q-ma-md home__qcard bg-white text-center">
                    <h5 class="q-pt-xl text-grey-7 word__wrap">{{ bitcoin_wallet_value }} BTC</h5>
                    <p class="q-pt-xs text-grey-7 word__wrap">{{ bitcoin_wallet_value_php}} PHP <span class="material-icons word__wrap">keyboard_arrow_right</span> {{ bitcoin_wallet_value_usd}} USD</p>
                    <h6 class="q-pt-sm text-accent word__wrap">Bitcoin Wallet</h6>
                    <div class="q-pt-lg">
                        <q-btn-group spread class="btn__style__group">
                            <q-btn icon-right="qr_code" label="Recieve" class="btn__style__right q-btn--flat" />
                            <q-btn icon-right="send" label="Send" class="btn__style__left q-btn--flat" />
                        </q-btn-group>
                    </div>
                </div>
                <div class="q-ma-md home__qcard bg-white text-center">
                        <h5 class="q-pt-xl text-grey-7 word__wrap">{{ uniq_wallet_value }} UNIQ</h5>
                        <p class="q-pt-xs text-grey-7 word__wrap">{{ uniq_wallet_value_php}} PHP <span class="material-icons word__wrap">keyboard_arrow_right</span> {{ uniq_wallet_value_usd}} USD</p>
                        <h6 class="q-pt-sm text-secondary">Uniq Wallet</h6>
                        <div class="q-pt-lg">
                            <q-btn-group spread class="btn__style__group">
                                <q-btn icon-right="shopping_bag" label="Buy" class="btn__style__right q-btn--flat" />
                                <q-btn icon-right="send" label="Send" class="btn__style__left q-btn--flat" />
                            </q-btn-group>
                        </div>
                </div>
                <div class="q-ma-md home__qcard bg-white">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div class="q-ma-md home__qcard bg-white">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            <div class="col-12 col-md-7">
                <div class="q-ma-md home__qcard bg-white">
                    <div class="q-px-xl">
                        <h1 class="q-pt-xl text-bold text-accent text-uppercase gradient__color">{{ current_nobility }}</h1>
                        <h6 class="q-pt-xs text-grey-7">Your current nobility</h6>
                        <h6 class="q-pt-sm text-grey-7 text-right">Your next target</h6>
                        <h5 class="q-pt-xs text-bold text-grey-6 text-uppercase text-right">{{ target_nobility }}</h5>
                    </div>
                    <div class="q-pt-lg">
                        <q-btn-group spread class="btn__style__group">
                            <q-btn icon-right="info" label="Nobility" class="btn__style__right q-btn--flat" />
                            <q-btn icon-right="trending_up" label="Accelerate" class="btn__style__left q-btn--flat" />
                        </q-btn-group>
                    </div>
                </div>
                <div  v-show="verification_status == 'unverified' || verification_status == 'onprocess' " @click="$router.push({name: 'front_landing'})"  :class="`cursor-pointer q-ma-md home__qcard ${verification_status == 'unverified'  ? 'bg-secondary' : 'bg-accent'}`">
                    <div class="row q-pa-lg">
                        <div class="col-12 col-sm-2 kyc__info__icon text-center gt-xs">
                            <q-icon name="help_outline" :color="`${verification_status == 'unverified'  ? 'grey' : 'white'}`"/>
                        </div>
                        <div v-if="verification_status == 'unverified'" class="col-12 col-sm-10 q-px-md">
                            <h6 class="text-grey">Unverified Account</h6>
                            <p class="text-grey">Your account is not verified yet, get verified in KYC first.</p>
                        </div>
                        <div v-else class="col-10 q-px-md">
                             <h6 class="text-white">Verification is on process</h6>
                            <p class="text-white">Your account verification is under review. This process usually takes an average of around 2-3 business days. Thank you for your patience.</p>
                        </div>
                    </div>
                </div>
                <div class="q-ma-md home__qcard bg-white">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div class="q-ma-md home__qcard bg-white">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import { postDashboard } from '../references/url';

export default
{
    data:() =>(
    {
        form_data:
        {
            // email: '',
            // password: '',
            // user_name: 'snake_snake',
            // gender_options:'',
            // is_empty: '',
        },
        bitcoin_wallet_value : "0.00000000",
        bitcoin_wallet_value_php: "0.00",
        bitcoin_wallet_value_usd: "0.00",
        uniq_wallet_value : "0.00000000",
        uniq_wallet_value_php: "0.00",
        uniq_wallet_value_usd: "0.00",
        current_nobility: "Non Pledger",
        target_nobility: "Pledger",
        //unverified onprocess verified 
        verification_status: "unverified",
        

    }),
    mounted()
    {
        
    },

    methods:
    {
        // async loginUser()
        // {
        //     this.$q.loading.show();

        //     let login = await this.$_post(postLoginUser, this.form_data); //request

        //     if(login)
        //     {
        //         this.$q.dialog({ title: `Success Message`, message: "Login Successful" });
        //     }
        //     this.$q.loading.hide();
        // }
    }
}
</script>

<style lang="scss">
    
    .kyc__info__icon i
    {
        font-size: 50px;
    }
    
    .home__qcard:hover .btn__style__group
    {
        border-radius: 0 0 0 0;
    }
    .btn__style__group
    {
        border-radius: 0 0 10px 10px;
        box-shadow: none;
        transition: all .2s linear;
        height: 50px;
    }
    
    .btn__style__left
    {
        border-top: 2px solid $light;
        border-left: 2px solid $light;
        color: grey;
        box-shadow: none;
    }

    .btn__style__right
    {
        border-top: 2px solid $light;
        color: grey;
        box-shadow: none;
    }

    @media screen and (max-width: 800px) 
    {
        .home__qcard
        {
            margin-left: 0;
            margin-right: 0;
        }
    }

    @media screen and (max-width: 1000px) 
    {
        .home__qcard
        {
            margin-top: 30px;
            margin-bottom: 30px;
        }
    }
    
</style>
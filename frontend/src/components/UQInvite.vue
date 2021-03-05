<template>
    <div>
        <div class="q-pa-xl home__qcard bg-primary text-center">
            <h1 class="gradient__color text-bold referral__code__style">{{referral_code}}</h1>
            <q-btn color="grey" class="q-mt-md responsive__btn__copy" outline unelevated icon="file_copy" label="Copy Referral Code"  @click="copyReferralCode()" />
        </div>
        <div class="row q-mt-xl">
            <div class="col-12 col-sm-4 q-mb-lg">
                <div class="qr__code q-mx-auto">
                    <q-img :src="qr_code_url"/>
                </div>    
            </div>
            <div class="col-12 col-sm-8">
                <div class="style__font__hiw text-uppercase">How it works!</div>
                <q-list>
                    <q-item  class="q-mt-sm">
                        <q-item-section avatar>
                            <q-icon name="looks_one" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Share your referral code</q-item-label>
                            <q-item-label caption lines="2">Share your referral link or sign up code to friends.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item  class="q-mt-sm">
                        <q-item-section avatar>
                            <q-icon name="looks_two" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Help Friends Sign Up</q-item-label>
                            <q-item-label caption lines="2">Help them to verify their account and get your reward.</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item  class="q-mt-sm">
                        <q-item-section avatar>
                            <q-icon name="looks_3" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label>Get Rewards</q-item-label>
                            <q-item-label caption lines="2">Get your reward in every referred accounts.</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </div>
</template>

<script>

// import { postDashboard } from '../references/url';
import { copyToClipboard } from 'quasar';

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
        referral_code: "LGRTJU1W",
        //sample 
        qr_code_url :"https://pngimg.com/uploads/qr_code/qr_code_PNG24.png",
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
        copyReferralCode(){
            copyToClipboard(this.referral_code)
        .then(() => {
            this.$q.notify({
            message: 'Copied to Clipboard',
            color: 'accent'
            })
        })
        .catch(() => {
            this.$q.notify({
            message: 'Copying Failed',
            color: 'negative'
            })
        })
        }
    }
}
</script>

<style lang="scss" scoped>
    .referral__code__style{
            letter-spacing: 10px;
            margin-right:-10px;
    }

    .style__font__hiw{
        font-size: 18px;
        letter-spacing: 10px;
    }
    .qr__code{
        max-width: 200px;
    }
    @media screen and (max-width: 400px) 
    {
        .referral__code__style{
            font-size: 30px;
            letter-spacing: 5px;
            margin-right: -5px;
        }
    }

    
    @media screen and (max-width: 600px) 
    {
        .responsive__btn__copy{
            width: 100%;
        }
    }
</style>

<template>
    <div>
        
        <div :class="`q-my-md home__qcard bg-white cursor-pointer style__hover ${toggle_btc ? 'max__height' : ''}`"  @click='toggle_btc = !toggle_btc'>
            <div>
                <h1 class="q-my-lg text-bold text-uppercase text-grey-5 text-center">Bitcoin</h1>
                <div v-show="toggle_btc">
                    <div class="q-pb-md wallet__font__style text-center text-uppercase text-grey">Wallet</div>
                    <div class="row q-mx-lg line__style">
                        <div class="col-12 col-md-4">
                            <div class="row q-pa-lg">
                                <div class="q-pa-sm col-sm-6 col-md-12 col-xs-12 text-center">
                                    <q-btn color="grey" class="button__style__wallet" unelevated icon="qr_code" label="Receive" />
                                </div>
                                <div class="q-pa-sm col-sm-6 col-md-12 col-xs-12 text-center">
                                    <q-btn color="grey" class="button__style__wallet" outline unelevated icon="send" label="Send" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 q-pt-lg col-md-8 text-right ">
                            <div class="q-pr-xl responsive__right__padding">
                                <h4 class="text-primary word__wrap">{{ bitcoin_wallet_value }} <span class="text-uppercase text-subtitle1 text-grey-7" >btc</span> </h4>
                                <div class="text-uppercase text-grey-7 text-subtitle1 word__wrap">{{ bitcoin_wallet_value_php }} php</div>
                                <div class="text-uppercase text-grey-7 text-subtitle1 word__wrap">{{ bitcoin_wallet_value_usd }} usd</div>
                            </div>
                        </div>
                    </div>
                    <q-btn icon-right="subject" label="transaction" @click="full_height_modal_btc = true" class="full-width q-py-xs text-grey-7 line__style" unelevated />
                </div>
            </div>
        </div>
        <div :class="`q-my-md home__qcard bg-white cursor-pointer style__hover ${toggle_uniq ? 'max__height' : ''}`"  @click='toggle_uniq = !toggle_uniq'>
            <div>
                <h1 class="q-my-lg text-bold text-uppercase text-grey-5 text-center">Uniq</h1>
                <div v-show="toggle_uniq">
                    <div class="q-pb-md wallet__font__style text-center text-uppercase text-grey">Wallet</div>
                    <div class="row q-mx-lg line__style">
                        <div class="col-12 col-md-4">
                            <div class="row q-pa-lg">
                                <div class="q-pa-sm col-sm-6 col-md-12 col-xs-12 text-center">
                                    <q-btn color="grey" class="button__style__wallet" unelevated icon="shopping_bag" label="Buy" />
                                </div>
                                <div class="q-pa-sm col-sm-6 col-md-12 col-xs-12 text-center">
                                    <q-btn color="grey" class="button__style__wallet" outline unelevated icon="send" label="Send" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 q-pt-lg col-md-8 text-right ">
                            <div class="q-pr-xl responsive__right__padding">
                                <h4 class="text-primary word__wrap">{{ uniq_wallet_value }} <span class="text-uppercase text-subtitle1 text-grey-7" >uniq</span> </h4>
                                <div class="text-uppercase text-grey-7 text-subtitle1 word__wrap">{{ uniq_wallet_value_php }} php</div>
                                <div class="text-uppercase text-grey-7 text-subtitle1 word__wrap">{{ uniq_wallet_value_usd }} usd</div>
                            </div>
                        </div>
                    </div>
                    <q-btn icon-right="subject" label="transaction" @click="full_height_modal_uniq = true" class="full-width q-py-xs text-grey-7 line__style" unelevated />
                </div>
            </div>
        </div>
        <div :class="`q-my-md home__qcard bg-white cursor-pointer style__hover ${toggle_eth ? 'max__height' : ''}`"  @click='toggle_eth = !toggle_eth'>
            <div>
                <h1 class="q-my-lg text-bold text-uppercase text-grey-5 text-center">Etherium</h1>
                <div v-show="toggle_eth">
                    <div class="q-pb-md wallet__font__style text-center text-uppercase text-grey">Wallet</div>
                    <div class="row q-mx-lg line__style">
                        <div class="col-12 col-md-4">
                            <div class="row q-pa-lg">
                                <div class="q-pa-sm col-sm-6 col-md-12 col-xs-12 text-center">
                                    <q-btn color="grey" class="button__style__wallet" unelevated icon="qr_code" label="Receive" />
                                </div>
                                <div class="q-pa-sm col-sm-6 col-md-12 col-xs-12 text-center">
                                    <q-btn color="grey" class="button__style__wallet" outline unelevated icon="send" label="Send" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 q-pt-lg col-md-8 text-right ">
                            <div class="q-pr-xl responsive__right__padding">
                                <h4 class="text-primary word__wrap">{{ eth_wallet_value }} <span class="text-uppercase text-subtitle1 text-grey-7" >btc</span> </h4>
                                <div class="text-uppercase text-grey-7 text-subtitle1 word__wrap">{{ eth_wallet_value_php }} php</div>
                                <div class="text-uppercase text-grey-7 text-subtitle1 word__wrap">{{ eth_wallet_value_usd }} usd</div>
                            </div>
                        </div>
                    </div>
                    <q-btn icon-right="subject" label="transaction" @click="full_height_modal_eth = true" class="full-width q-py-xs text-grey-7 line__style" unelevated />
                </div>
            </div>
        </div>
        <q-dialog
        v-model="full_height_modal_btc"
        full-height
        >
        <q-card class="column full-height" style="width: 300px">
            <q-card-section>
                <div class="text-h6 text-primary text-bold text-uppercase">Bitcoin Wallet</div>
                <div class="text-p text-primary">Transaction</div>
            </q-card-section>

            <q-card-section class="col q-pt-none">
            <!-- something here -->
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-accent">
            <q-btn flat label="OK" v-close-popup></q-btn>
            </q-card-actions>
        </q-card>
        </q-dialog>
        <q-dialog
        v-model="full_height_modal_uniq"
        full-height
        >
        <q-card class="column full-height" style="width: 300px">
            <q-card-section>
                <div class="text-h6 text-primary text-bold text-uppercase">Uniq Wallet</div>
                <div class="text-p text-primary">Transaction</div>
            </q-card-section>

            <q-card-section class="col q-pt-none">
            <!-- something here -->
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-accent">
            <q-btn flat label="OK" v-close-popup></q-btn>
            </q-card-actions>
        </q-card>
        </q-dialog>
        <q-dialog
        v-model="full_height_modal_eth"
        full-height
        >
        <q-card class="column full-height" style="width: 300px">
            <q-card-section>
                <div class="text-h6 text-primary text-bold text-uppercase">Etherium Wallet</div>
                <div class="text-p text-primary">Transaction</div>
            </q-card-section>

            <q-card-section class="col q-pt-none">
            <!-- something here -->
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-accent">
            <q-btn flat label="OK" v-close-popup></q-btn>
            </q-card-actions>
        </q-card>
        </q-dialog>
    </div>
</template>

<script>

// import { postDashboard } from '../references/url';

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
        toggle_btc : false,
        bitcoin_wallet_value: "0.00000000",
        bitcoin_wallet_value_php: "0.00",
        bitcoin_wallet_value_usd: "0.00",
        full_height_modal_btc: false,
        toggle_uniq : false,
        uniq_wallet_value: "0.00000000",
        uniq_wallet_value_php: "0.00",
        uniq_wallet_value_usd: "0.00",
        full_height_modal_uniq: false,
        toggle_eth : false,
        eth_wallet_value: "0.00000000",
        eth_wallet_value_php: "0.00",
        eth_wallet_value_usd: "0.00",
        full_height_modal_eth: false,
        

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

<style lang="scss" scoped>
        .style__hover:hover h1
        {
             background: -webkit-linear-gradient(90deg, $accent, $secondary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .style__hover
        {
            min-height: 0px;
            overflow: hidden;
        }

        .max__height
        {
            min-height: 300px;
            transition: min-height 0.25s ease-in;
        }
        .wallet__font__style
        {
            font-size: 20px;
            letter-spacing: 20px;
            margin-right:-20px;
            margin-top: -25px;
        }    
        
        .button__style__wallet
        {
            width: 200px;
            height: 50px;
        }

        .line__style
        {
            border-top: 2px solid $light;   
        }
        
        @media screen and (max-width: 1023px)
        {
            .button__style__wallet
            {
                width: 100%;
                height: auto;

            }
            .row
            {
                padding-left: 0 ;
                padding-right: 0 ;
            }
            .responsive__right__padding{
                padding: 0;
            }
        }

        .word__wrap
        {
           word-wrap: break-word;
        }

</style>

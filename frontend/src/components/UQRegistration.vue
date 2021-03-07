<template>
    <div>
	    <!-- content -->
	    <div class='content text-left'>
	    	<q-form @submit="registerUser()">

                <div class="field">
                    <div>
                        <q-input value="https://www.camelot.com" readonly outlined dense>
                        <template v-slot:prepend>
                            <q-icon name="lock" color="positive" />
                            <div class="text-caption" style="color:#21BA45">secure</div>
                        </template>
                        </q-input>
                    </div>
                </div>
                
		     	<div class="field q-mt-lg">
                    <q-input outlined v-model="form_data.full_name" label="Full Name" dense/>
                </div>
                
                <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.email" label="Email" dense/>
		        </div>

                <div class="field q-mt-md">
                    <q-select
                        label="Country"
                        outlined
                        dense
                        v-model="form_data.country"
                        use-input
                        hide-selected
                        fill-input
                        input-debounce="0"
                        :options="country_options"
                        :option-label="countryNameEn"
                        @filter="filterFn"
                        @input-value="setModel"
                    >
                    {{country_name}}
                    <template v-slot:prepend>
                        <img :src="'https://www.countryflags.io/' + form_data.country.countryCode + '/flat/32.png'" v-if="form_data.country.countryCode"/>
                    </template>

                    <template v-slot:option="scope">
                        <q-item
                            v-bind="scope.itemProps"
                            v-on="scope.itemEvents"
                        >
                        
                        <q-item-section side>
                            <img :src="'https://www.countryflags.io/' + scope.opt.countryCode + '/flat/32.png'" />
                        </q-item-section>

                        <q-item-section>
                            <q-item-label v-html="'+' +  scope.opt.countryNameEn" />
                        </q-item-section>
                        </q-item>
                    </template>

                        <template v-slot:no-option>
                        <q-item>
                            <q-item-section class="text-grey">
                            No results
                            </q-item-section>
                        </q-item>
                        </template>
                    </q-select>
		        </div>

                <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.currency" label="Currency" dense/>
		        </div>

                <div class="field q-mt-md">

                    <div class="row">

                        <div class="col col-md-3">
                            <q-input outlined v-model="form_data.contact_code" label="contact code" dense/>
                        </div>

                        <div class="col-3 col-md-9">
                            <q-input 
                            outlined
                            dense
                            v-model="form_data.contact"
                            type="number"
                            placeholder="xxxxxxxx"
                            onKeyPress="if(this.value.length>=20) return false;"
                            >
                            </q-input>
                        </div>

                    </div>

                    <div class="error-field" ref="error_contact">
                    </div>
		        </div>

		        <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.password" label="Password" dense :type="isPwd ? 'password' : 'text'">
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </q-input>
                </div>

		        <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.confirm_password" label="Confirm Password" dense :type="isPwd_confirm ? 'password' : 'text'">
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd_confirm ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd_confirm = !isPwd_confirm"
                            />
                        </template>
                    </q-input>
                </div>

                <div class="field q-mt-xl">
                    <q-input outlined v-model="form_data.referral_code" label="Referral Code" hint="Example: KRPT01" dense/>
		        </div>


                <div class="q-mt-lg">
                    <q-checkbox v-model="form_data.isAgree" color="accent" ></q-checkbox>
                    <label>I agree to Camelot's 
                        <a
                            href=""
                            tabindex="0"
                            class="my__hover non-selectable  text-black q-focusable q-btn--no-uppercase"
                        >Terms of Service</a>
                         and 
                        <a
                            href=""
                            tabindex="0"
                            class="my__hover non-selectable text-black q-focusable q-btn--no-uppercase"
                        >Privacy Policy</a>
                    </label>
                </div>
                <div class="q-mt-sm"><q-btn type="submit" color="primary" unelevated class="full-width">Create Account</q-btn></div>
                <div class="q-mt-xs"><q-btn type="button" color="primary" outline class="full-width">Back</q-btn></div>
	   		</q-form>
	    </div>
        <u-q-otp :propmt="prompt"/>
    </div>
</template>

<script>
import { postRegistrationUser } from '../references/url';
import   country_code_list      from 'country-codes-list';

const stringOptions = (country_code_list.all('all')).filter(v => v.countryNameEn)

export default
{
    components : {
    'u-q-otp' : require( './Modal/UQOtp.vue').default
    },

    props: ['prompt'],
    data:() =>(
    {
        form_data:
        {
            full_name       : '',
            email           : '',
            country         : {},
            country_string  : '',
            currency        : '',
            contact_code    : '',
            password        : '',
            confirm_password: '',
            referral_code   : '',
            isAgree         : false,
        },
        isPwd: false,
        isPwd_confirm: false,
        country_name: '',
        contact_code: '',
        country_options: stringOptions
    }),
    mounted()
    {
        this.form_data.country= 
        {
            countryCallingCode: "355",
            countryCode: "AL",
            countryNameEn: "Albania",
            currencyCode: "ALL",
            currencyNameEn: "Albanian lek",          
        }
    },
    methods:
    {
        async registerUser()
        {
            this.$q.loading.show();
            this.form_data.country_string = this.form_data.country.countryNameEn;
            let register = this.$_post(postRegistrationUser, this.form_data);
            if(register)
            {
                this.$q.dialog({ title: `Success Message`, message: "Successfully Registered" });
            }
            this.$q.loading.hide();
        },

        filterFn (val, update, abort) 
        {
            update(() => 
            {
                const needle = val.toLocaleLowerCase();
                this.country_options = stringOptions.filter(v => v.countryNameEn.toLowerCase().indexOf(needle) > -1);
            })
        },

        setModel (val) 
        {
            this.form_data.country      = val;
            this.form_data.country_string      = this.form_data.country.countryNameEn;
            this.form_data.currency     = this.form_data.country.currencyCode;
            this.form_data.contact_code = '+' + this.form_data.country.countryCallingCode;
            this.country_name           = this.form_data.country.countryNameEn;
        }
    }
}
</script>

<style scoped>
    .my__hover:hover{
        text-decoration: none ;
    }
</style>
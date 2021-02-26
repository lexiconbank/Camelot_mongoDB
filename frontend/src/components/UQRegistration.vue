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
                    <q-input outlined v-model="form_data.contact_number" label="Contact Number" placeholder="09xx-xxx-xxxx" dense/>
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
                    <q-input outlined v-model="form_data.country" label="Country" dense/>
		        </div>
                <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.currency" label="Currency" dense/>
		        </div>
                <div class="field q-mt-xl">
                    <q-input outlined v-model="form_data.referra_code" label="Referral Code" hint="Example: KRPT01" dense/>
		        </div>
                <div class="q-mt-lg">
                    <q-checkbox v-model="isAgree" color="accent" ></q-checkbox>
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
                <div class="q-mt-xs"><q-btn type="button" color="primary"  outline class="full-width">Back</q-btn></div>
	   		</q-form>
	    </div>
    </div>
</template>

<script>
import { postRegistrationUser } from '../references/url';

export default
{
    data:() =>(
    {
        form_data:
        {
            full_name: '',
            email: '',
            password: '',
            confirm_password: '',
        },
        isAgree: false,
        isPwd: false,
    }),
    mounted()
    {
        
    },
    methods:
    {
        async registerUser()
        {
            this.$q.loading.show();
            let register = this.$_post(postRegistrationUser, this.form_data);
            if(register)
            {
                this.$q.dialog({ title: `Success Message`, message: "Successfully Registered" });
            }
            this.$q.loading.hide();
        }
    }
}
</script>

<style scoped>
    .my__hover:hover{
        text-decoration: none ;
    }
</style>
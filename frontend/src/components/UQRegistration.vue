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
                    <q-input outlined v-model="form_data.full_name" label="Full Name" :rules="[val => !!val || 'Field is required']" dense/>
                </div>
                <div class="field q-mt-xs">
                    <q-input outlined v-model="form_data.email" label="Email" :rules="[
                        val => !!val || 'Field is required',
                        val => /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/.test(val) || 'Invalid Email.',
                    ]" dense/>
		        </div>
                <div class="field q-mt-xs">
                    <q-input outlined v-model="form_data.contact_number" type="number" label="Contact Number" placeholder="09xx-xxx-xxxx" :rules="[val => !!val || 'Field is required']" dense/>
		        </div>
		        <div class="field q-mt-xs">
                    <q-input outlined v-model="form_data.password" label="Password" dense :type="isPwd ? 'password' : 'text'" :rules="[
                        val => !!val || 'Field is required',
                        val => val.length >= 8 || 'Password must be 8 characters.',
                        val => /[a-z]/.test(val) && /\d/.test(val) && /[A-Z]/.test(val) || 'Must include uppercase letter and a number.',
                    ]">
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </q-input>
                </div>
		        <div class="field q-mt-xs">
                    <q-input outlined v-model="form_data.confirm_password" label="Confirm Password" dense :type="iscPwd ? 'password' : 'text'" :rules="[
                      val => !!val || 'Field is required',
                      val => val == form_data.password || 'Password is not the same',
                    ]">
                        <template v-slot:append>
                            <q-icon
                                :name="iscPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="iscPwd = !iscPwd"
                            />
                        </template>
                    </q-input>
                </div>
                <div class="field q-mt-xs">
                    <q-input outlined v-model="form_data.country" label="Country" dense :rules="[val => !!val || 'Field is required']"/>
		        </div>
                <div class="field q-mt-xs">
                    <q-input outlined v-model="form_data.currency" label="Currency" dense :rules="[val => !!val || 'Field is required']"/>
		        </div>
                <div class="field q-mt-lg">
                    <q-input outlined v-model="form_data.referral_code" label="Referral Code" hint="Example: KRPT01" dense :rules="[val => !!val || 'Field is required']"/>
		        </div>
                <div class="q-mt-lg">
                    <q-checkbox v-model="isAgree" color="accent" :rules="[val => !!val || 'Field is required']"></q-checkbox>
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
                <div class="q-mt-xs"><q-btn type="button" color="primary"  outline class="full-width" @click="$router.push({name: 'front_landing'})">Back</q-btn></div>
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
            contact_number: '',
            password: '',
            country: '',
            referral_code: '',
        },
        confirm_password: '',
        isAgree: false,
        isPwd: true,
        iscPwd: true
    }),
    mounted()
    {
        
    },
    methods:
    {
        async registerUser()
        {
            if (this.isAgree == true)
            {
                let register = await this.$_post(postRegistrationUser, this.form_data);
                
                if(register)
                {
                    this.$q.dialog({ title: `Success Message`, message: "Successfully Registered" });
                }
            }
            else
            {
                this.$q.dialog({ title: `Important`, message: "Please make sure you agreed and read Camelot's terms and policy." });
            }
        }

       
    }
}
</script>

<style scoped>
    .my__hover:hover
    {
        text-decoration: none ;
    }
</style>
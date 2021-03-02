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
		        <!-- <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.password" label="Password" dense :type="isPwd ? 'text' : 'password'">
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </q-input>
                </div>
                 <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.confirm_password" label="Confirm Password" dense :type="isPwd ? 'text' : 'password'">
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </q-input>
                </div> -->

                 <!-- Password -->
                <div class="field q-mt-md">
                    <div>
                        <q-input  
                            :bg-color="!$q.dark.isActive? 'white':'grey-7'"  
                            :color="!$q.dark.isActive? 'blue-grey-14':'white'"
                            @input="password_validations" 
                            v-model="form_data.password" 
                            :type="isPwd ? 'text' : 'password'" 
                            label="Password" 
                            outlined  
                            :rules="[
                            val => !!val || '* Field is required',
                            val => val.length >= 8 || 'Password must be 8 characters.',
                            val => /[a-z]/.test(val) && /\d/.test(val) && /[A-Z]/.test(val) || 'Must have Uppercase & Number',
                            ]"
                        >
                            <template v-slot:append>
                              <q-icon
                                :name="isPwd ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                              />
                            </template>
                        </q-input>
                        <div :class="this.form_data.password.length < 8 ? 'text-center' : 'text-center'" v-if="typed">
                            <div v-if="is_weak == true" class="lnu_container_weak">
                               
                            </div>
                            <transition name="fade">
                                <div v-if="is_strong" class="lnu_container_strong">
                                    
                                </div>
                            </transition>
                            <transition name="fade">
                                <div v-if="is_very_strong" class="lnu_container_very_strong">
                                    
                                </div>
                            </transition>
                        </div>
                    </div>
               </div>
               <!-- Password -->

               <!-- Confirm Password -->
               <div class="field q-mt-md">
                    <div>
                        <q-input  
                            :bg-color="!$q.dark.isActive? 'white':'grey-7'"  
                            :color="!$q.dark.isActive? 'blue-grey-14':'white'"
                            v-model="form_data.confirm_password" 
                            :type="isConfirmPwd ? 'text' : 'password'" 
                            label="Confirm Password" 
                            outlined
                            :rules="[
                            val => !!val || '* Field is required',
                            val => val == this.form_data.password || 'Password did not match'
                            ]"
                        >
                            <template v-slot:append>
                              <q-icon
                                :name="isConfirmPwd ? 'visibility' : 'visibility_off'"
                                class="cursor-pointer"
                                @click="isConfirmPwd = !isConfirmPwd"
                              />
                            </template>
                        </q-input>
                    </div>
               </div>
               <!-- Confirm Password -->
                <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.country" label="Country" dense/>
		        </div>
                
                <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.currency" label="Currency" dense/>
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
                <!-- <div class="q-mt-xs"><q-btn type="button" color="primary"  outline class="full-width">Back</q-btn></div> -->
                 <a  href="http://localhost:8080/#/documentation/" tabindex="0" class="my__hover q-mt-sm q-btn inline full-width q-btn-item non-selectable q-btn--flat q-btn--rectangle text-black q-focusable q-hoverable q-btn--no-uppercase">
                       <div>Back</div>
                    </a>
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
            // this.$q.loading.show();
            if (this.isAgree == true)
            {
                let register = await this.$_post(postRegistrationUser, this.form_data);
                console.log(register);
                if(register)
                {
                    this.$q.dialog({ title: `Success Message`, message: "Successfully Registered" });
                }
            }
            else
            {
                this.$q.dialog({ title: `Important`, message: "Please make sure you agreed and read Camelot's terms and policy." });
            
            }
            // this.$q.loading.hide();
        }

       
    }
}
</script>

<style scoped>
    .my__hover:hover{
        text-decoration: none ;
    }
</style>
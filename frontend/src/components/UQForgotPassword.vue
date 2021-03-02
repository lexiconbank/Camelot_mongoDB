<template>
    <div>

	    <!-- content -->
	    <div class='content text-left'>
	    	<q-form @submit="registerUser()">
                <div class="field">
                    <div>
                            <q-item>
                                <q-item-section avatar>
                                    <q-icon color="red" name="warning"/>
                                </q-item-section>
                                    <q-item-section style="font-weight: bold;">Please check that you are visiting</q-item-section>
                                </q-item>
                        <q-input value="https://www.camelot.com" readonly outlined dense>
                        <template v-slot:prepend>
                            <q-icon name="lock" color="positive" />
                            <div class="text-caption" style="color:#21BA45">secure</div>
                        </template>
                        </q-input>
                    </div>
                </div>
                
		     	
                <div class="field q-mt-md">
                    <q-input outlined v-model="form_data.email" label="Enter Your Email" dense/>
		        </div>
             
		       
             
                <div class="q-mt-sm"><q-btn type="submit" color="primary" unelevated class="full-width">Submit</q-btn></div>
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
    data: () =>
    ({
        form_data:
        {
            email: '',
        }
    }),
    methods:
    {
        async sendForgotPasswordLink()
        {
            this.$q.loading.show();

            let forgot_link_obj = await this.$_post(postForgotPassword, this.form_data);

            if (forgot_link_obj.data.status != 'not matched') {
                this.$router.push({name: 'front_email_sent'});
            }else{
                this.$q.dialog({ title: `Invalid Email`, message: forgot_link_obj.data.message});
            }

            this.$store.commit('user/getForgotPasswordEmail', this.form_data.email);

            this.$q.loading.hide();
        }
    }
}
</script>
<template>
    <div>

	    <!-- content -->
	    <div class='content text-left'>
	    	<q-form @submit="loginUser()">
                <div class="field">
                    <div>
                        <q-input value="https://www.camelot.com" readonly outlined >
                        <template v-slot:prepend>
                            <q-icon name="lock" color="positive" />
                            <div class="text-caption" style="color:#21BA45">secure</div>
                        </template>
                        </q-input>
                    </div>
                </div>
                <div class="field q-mt-lg">
                    <div><q-input v-model="form_data.email" placeholder="Enter Email" outlined ></q-input></div>
                </div>
                <div class="field q-mt-md">
                    <div>
                        <q-input outlined v-model="form_data.password" placeholder="Enter Password" :type="isPwd ? 'password' : 'text'" >
                            <template v-slot:append>
                                <q-icon
                                    :name="isPwd ? 'visibility_off' : 'visibility'"
                                    class="cursor-pointer"
                                    @click="isPwd = !isPwd"
                                    
                                />
                            </template>
                        </q-input>
                    </div>
                </div>
                
                <div class="q-mt-lg">
                    <a href="" tabindex="0" class="my__hover q-btn inline full-width text-right text-caption q-btn-item non-selectable q-btn--flat q-btn--rectangle text-black q-focusable q-hoverable q-btn--no-uppercase">
                      <div>Forgot password?</div>
                    </a>
                    <q-btn type="submit" color="primary" unelevated class="full-width q-mt-xs">Login</q-btn>
                    <a  href="" tabindex="0" class="my__hover q-mt-sm q-btn inline full-width q-btn-item non-selectable q-btn--flat q-btn--rectangle text-black q-focusable q-hoverable q-btn--no-uppercase">
                       <div>Create an account</div>
                    </a>
                 </div>
	   		</q-form>
	    </div>
    </div>
</template>

<script>
import { postLoginUser } from '../references/url';

export default
{
    data:() =>(
    {
        form_data:
        {
            email: '',
            password: '',
            user_name: 'snake_snake',
            gender_options: [],
            is_empty: '',

        },
        isPwd : true,
    }),
    mounted()
    {
        
    },

    methods:
    {
        async loginUser()
        {
            this.$q.loading.show();

            let login = await this.$_post(postLoginUser, this.form_data); //request

            if(login)
            {
                this.$q.dialog({ title: `Success Message`, message: "Login Successful" });
            }
            this.$q.loading.hide();
        }
    }
}
</script>

<style scoped>
    .my__hover:hover{
        text-decoration: underline ;
    }
</style>
const MDB_USER = require('../models/MDB_USER');
const referral_code     = require('referral-codes');
const one_time_passcode = require('referral-codes');

module.exports = class AccountClass
{
    constructor(user_information)
    {   
        this.user_information = user_information;
        this.mdb_user         = new MDB_USER();
    }

    async validateRegistration()
    { 
        let res = {};
        if(this.user_information.full_name.trim() == '' || this.user_information.password.trim() == '' || this.user_information.email.trim() == '')
        {
            res.status      = "error";
            res.message     = "You need to fill up all fields in order to proceed.";
        }
        else if(this.user_information.confirm_password !== this.user_information.password)
        {
            res.status      = "error";
            res.message     = "The password you entered didn't match.";
        }
        else
        {
            return res = await this.registerUser()
        }
    }

    async registerUser()
    {
        let res = {};
        try
        {
            res.status               = "success";
            let referral_code        = await this.generateReferralCode();
            this.user_information.personal_referral_code = referral_code[0];
            console.log(await this.generateOTP());
            let is_email_exist      = await this.mdb_user.findByEmail(this.user_information.email);
            res.data                = is_email_exist ? 'exist' : await this.mdb_user.add(this.user_information);
        }
        catch (error)
        {
            res.status  = "error";
            res.message = error.message;
        }

        return res;
    }

    async generateReferralCode()
    {
        let code = referral_code.generate({
            length: 5,
            prefix: "camelot",
        });

        return code
    }
    
    async generateOTP()
    {
        let otp = one_time_passcode.generate({
            length: 6,
        });

        return otp;
    }

    async authenticate()
    {
        let res = {};
        try
        {
            let user_data = 
            {
                email: this.user_information.email,
                password: this.user_information.password
            }

            let user = await this.mdb_user.findByUsernameAndPassword(user_data);

            if(user)
            {
                res.status = "success";
            }
            else
            {
                res.status  = "error",
                res.message = "Invalid Credentials";
            }
        }
        catch(error)
        {
            res.status = "error",
            res.message = error.message;
        }

        return res;
    }

}



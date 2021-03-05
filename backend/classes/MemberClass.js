const MDB_USER = require('../models/MDB_USER');
const User  = require('../models/MDB_USER').User;

module.exports = class MemberClass
{
    constructor(user_information)
    {
        this.mdb_user = new MDB_USER();
        this.user_information = user_information;
    }

    async validate()
    { 
        // let res = {};
        // let isEmailExist = await this.mdb_user.findByEmail(this.user_information.email);
        // let isNumberExist = await this.mdb_user.findByNumber(this.user_information.contact_number);

        // if(this.user_information.full_name.trim() == '' || this.user_information.email.trim() == '' || this.user_information.contact_number.trim() == '' || this.user_information.password.trim() == '' || this.user_information.country.trim() == '' || this.user_information.referral_code.trim() == '' )
        // {
        //     res.status      = "error";
        //     res.message     = "You need to fill up all fields in order to proceed.";
        // }
        // else if(isEmailExist)
        // {
        //     res.status      = "error";
        //     res.message     = "Your Email is already exists.";
        // }
        // else if(isNumberExist)
        // {
        //     res.status      = "error";
        //     res.message     = "Your Number is already exists.";
        // }
        // else
        // {
        //     res.status = "success";
        //     res.message     = "Congratulation!";
        // }
        // return res;
    }


    
}

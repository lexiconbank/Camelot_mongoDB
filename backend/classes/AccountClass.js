const MDB_USER = require('../models/MDB_USER');
const User  = require('../models/MDB_USER').User;
const axios  = require('axios');

module.exports = class AccountClass
{
    constructor(user_information)
    {
        this.mdb_user = new MDB_USER();
        this.user_information = user_information;
    }

    async validate()
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
            res.status = "success";
        }

        return res;
    }

    static async validateUserRegistration(full_name, email, contact_number, password, confirm_password)
    {
        let result = {
            is_success   : true
        }

        let mdb_user    = new MDB_USER();
        email           = await mdb_user.findByEmail(email);
        username       = await mdb_user.findByUsername(username);

        if(username != null)
        {
            result.is_success   = false;
            result.error        = 'username is already in use';
            return result;
        }else
        if(email != null)
        {
            result.is_success   = false;
            result.error        = 'email is already in use.';
            return result;
        }else
        if(password != confirm_password)
        {
            result.is_success   = false;
            result.error        = 'password not match';
            return result;
        }
        return result;
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
                res.status = "error",
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

    async create()
    {
        let res = {};
        try
        {
            res.status = "success";

            let add_form =
            { 
                full_name: this.user_information.full_name,
                email: this.user_information.email,
                password: this.user_information.password
            }

            await this.mdb_user.add(add_form);
        }
        catch (error)
        {
            res.status = "error";
            res.message = error.message;
        }

        return res;
    }
}



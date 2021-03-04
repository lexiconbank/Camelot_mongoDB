const AccountClass = require('../classes/AccountClass');

let account_class = new AccountClass();

module.exports =
{
    async login(req, res)
    {
        let email           = req.body.email;
        let password        = req.body.password;

        let authenticate    = await new AccountClass({email:email, password:password}).authenticate();
        
        if(authenticate.status == "success")
        {
            res.send(true);
        }
        else if(authenticate.status == "error")
        {
            res.status(400).send({ message: authenticate.message })
        }
    },

    async validateRegistration(req, res)
    {
        let user_information =
        {
            full_name       : req.body.full_name,
            email           : req.body.email,
            country         : req.body.country,
            currency        : req.body.currency,
            contact_code    : req.body.contact_code,
            password        : req.body.password,
            confirm_password: req.body.confirm_password,
            referral_code   : req.body.referral_code,
            isAgree         : false,
            date_created    : Date.now()
        }

        let account_class      = new AccountClass(user_information);
        let account_validation = await account_class.validateRegistration();

        if(account_validation.status == "success")
        {
            res.status(200).send({ message: account_validation });
        }
        else if(account_validation.status == "error")
        {
            res.status(400).send({ message: account_validation.message });
        }
    },
}
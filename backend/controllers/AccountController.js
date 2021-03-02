const AccountClass = require('../classes/AccountClass');

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

    async registration(req, res)
    {
        let user_information =
        {
            full_name: req.body.full_name,
            email: req.body.email,
            contact_number: req.body.contact_number,
            password: req.body.password,
            country: req.body.country,
            referral_code: req.body.referral_code,

        }

        let account_class = new AccountClass(user_information);
no
        let account_validation = await account_class.validate();

        if(account_validation.status == "success")
        {
            let registration_create =await account_class.create();

            if (registration_create.status == "error") {
                res.status(400).send({ message: account_validation.message })
            } else if (registration_create.status == "success") {
                res.json(registration_create.data).status(200);
            }
        }
        else if(account_validation.status == "error")
        {
            res.status(400).send({ message: account_validation.message });
        }
        res.send(true);

       

    },
}
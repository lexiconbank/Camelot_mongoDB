const MONGOOSE  = require('../config/mongo');
const MODEL     = require('./MODEL');
const Schema    = MONGOOSE.Schema;

const schema    = new Schema({

    full_name : 
    {
        type:       String,
        required:   true
    },
    email: 
    {
        type:       String,
        required:   true
    },
    password: 
    {
        type:       String,
        required:   true
    },

    password: 
    {
        type:       String,
        required:   true
    },

    confirm_password: 
    {
        type:       String,
        required:   true
    },

    referral_code: 
    {
        type:       String,
        required:   true
    },

    isAgree: 
    {
        type:       String,
        required:   true
    },

    personal_referral_code:
    {
        type :  String,
        required: true
    },

    date_created:
    {
        type    : Date,
        required:   true
    }
});

class MDB_USER extends MODEL
{
    constructor ()
    {
        super('users', schema);
    }
    
    async findByUsernameAndPassword(info)
    {
        const res = await this.collection.findOne({ email: info.email, password: info.password });
        return res ? res : null;
    }

    async findByEmail(email)
    {
        const res = await this.collection.findOne({ email : email});
        return res ? res : null;
    }
    
}

module.exports = MDB_USER;
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
    contact_number: 
    {
        type:       String,
        required:   true
    },
    password: 
    {
        type:       String,
        required:   true
    },
    country: 
    {
        type:       String,
        required:   true
    },
    referral_code: 
    {
        type:       String,
        required:   true
    },
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

    async findByEmail(info)
    {
        const res = await this.collection.findOne({ email: info});
        return res ? res : null;
    }

    async findByNumber(info)
    {
        const res = await this.collection.findOne({contact_number: info});
        return res ? res : null;
    }
}

module.exports = MDB_USER;
const MONGOOSE  = require('../config/mongo');
const MODEL     = require('./MODEL');
const Schema    = MONGOOSE.Schema;

const schema    = new Schema({
    title : 
    {
        type:       String,
        required:   true
    },

    price: 
    {
        type:       Number,
        required:   true
    },
    
    rank_number: 
    {
        type:       Number,
        required:   true
    },

    direct: 
    {
        type:       Number,
        required:   true
    },

    rank: 
    {
        type:       String,
        required:   true
    },

    bonus: 
    {
        type:       Number,
        required:   true
    },

    max_income_per_day: 
    {
        type:       Number,
        required:   true
    },

    perks: 
    {
        type:       String,
        required:   true
    },

    details: 
    {
        type:       String,
        required:   true
    },

    badge_color: 
    {
        type:       String,
        required:   true
    },

    date_created: 
    {
        type:       Date,
        required:   true
    },

    date_updated: 
    {
        type:       Date,
        required:   true
    },
});

class MDB_NOBILTY extends MODEL
{
    constructor ()
    {
        super('nobility', schema);
    }

    async findByTitle(title)
    {
        const res = await this.collection.findOne({ title: title });
        return res ? res : null;
    }
}

module.exports = MDB_NOBILTY;
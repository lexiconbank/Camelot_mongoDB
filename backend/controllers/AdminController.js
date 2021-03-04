const AdminClass = require('../classes/AdminClass');

let admin_class = new AdminClass();

module.exports = {
    
    async postNobilities(req, res)
    {

        let nobility_info = {
            title           : req.body.title,
            price           : req.body.price,
            rank_number     : req.body.rank_number,
            direct          : req.body.direct,
            rank            : req.body.rank,
            bonus           : req.body.bonus,
            max_income_per_day : req.body.max_income_per_day,
            perks           : req.body.perks,
            details         : req.body.details,
            badge_color     : req.body.badge_color,
            date_created    : Date.now(),               
            date_updated    : Date.now()
        }

        let response = await admin_class.postNobilities(nobility_info);
        if (response.status == 'success') {
            res.status(200).json(response);
        } else {
            res.status(400).send(response);
        }        
    },

    async getNobilities(req, res)
    {
        let response = await admin_class.getNobilities();

        if (response.status == 'success') {
            res.status(200).json(response.data);
        } else {
            res.status(400).send(response);
        }  
    },

    async removeNobilties(req, res)
    {
        let response = await admin_class.removeNobilties(req.body.id);

        if (response.status == 'success') {
            res.status(200).json(response);
        } else {
            res.status(400).send(response);
        }          
    },

    async updateNobilities(req, res)
    {
        let nobilities_info = {
            title           : req.body.title,
            price           : req.body.price,
            rank_number     : req.body.rank_number,
            direct          : req.body.direct,
            rank            : req.body.rank,
            bonus           : req.body.bonus,
            max_income_per_day : req.body.max_income_per_day,
            perks           : req.body.perks,
            details         : req.body.details,
            badge_color     : req.body.badge_color,
            date_updated    : Date.now()
        }

        let response = await admin_class.updateNobilities(req.body.id, nobilities_info);

        if (response.status == 'success') {
            res.status(200).json(response);
        } else {
            res.status(400).send(response);
        }  
    }
    
}

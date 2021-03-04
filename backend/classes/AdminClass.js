const MDB_NOBILITY = require('../models/MDB_NOBILITY');

module.exports = class AdminClass
{

    constructor(admin_information = null)
    {
        this.admin_information = admin_information;
        this.mdb_nobilty = new MDB_NOBILITY();
    }

    async postNobilities(admin_information)
    {
        let res = {};

        try {
            res.status = "success";
            let is_title_exist = await this.mdb_nobilty.findByTitle(admin_information.title);
            res.data = is_title_exist ? res.status = 'Title Exist!' : await this.mdb_nobilty.add(admin_information);
        }
        catch (error) {
            res.status = "error";
            res.message = error.message;
        }

        return res;        
    }

    async getNobilities()
    {
        let res = {};

        try {
            res.status = "success";
            let query_result = await this.mdb_nobilty.docs();
            res.data = query_result;
        }
        catch (error) {
            res.status = "error";
            res.message = error.message;
        }

        return res;          
    }

    async removeNobilties(id)
    {
        let res = {};

        try 
        {
            res.status = "success";
            let query_result = await this.mdb_nobilty.delete(id);
            res.data = query_result;
        }
        catch (error) {
            res.status = "error";
            res.message = error.message;
        }

        return res;   
    }

    async updateNobilities(id, info)
    {
        let res = {};

        try
        {   
            res.status = "success";

            let is_title_exist = await this.mdb_nobilty.findByTitle(info.title);
            res.data = is_title_exist ? res.status = 'Title Exist!' : await this.mdb_nobilty.update( id , info);

        }
        catch (error)
        {
            res.status = "error";
            res.message = error.message;
        }

        return res
    }
}
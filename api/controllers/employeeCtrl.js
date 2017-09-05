let Employee = require('../../models/employee')

module.exports = {
    findAll: function(req,res,next){
        Employee.find({},(err,result)=>{
            if(err) return res.status(500).send('Erro ao consultar banco');
            if(!result) return res.status(404).send('Nenhum funcionario encontrado');

            res.json(result);
        })
    }
}
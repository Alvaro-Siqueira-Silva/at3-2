module.exports = (app)=>{
    const database = require('../config/database')()

        const produto = require('../models/produto')

    app.get('/produtos', async(req,res)=>{
        var resultado = await produto.find().limit().sort({'_id':-1})
        res.render('produtos.ejs',{dados:resultado})
    })
    app.get('/excluir',async(req,res)=>{
        var id = req.query.id
        var excluir = await produto.findOneAndRemove({_id:id})
        res.redirect('/produtos')   
    })
}
//PRIMEIRA FORMA

// MODELS

all(callback){
  db.query(`
    SELECT * FROM callbacks
  ` , (err, results)=>{
    if(err) throw `Database is ${err}`

    callback(results.rows)
  })
}

//CONTROLLERS
const models = require('...')

module.esports = {
  create(req, res){
    models.all(function(results){
      return res.render(''project/create' , { results })
    }
  }
}

//SEGUNDA FORMA USANDO PROMESSAS

//models
all(){
  db.query(`
  SELECT * FROM callbacks
  `)
}

//CONTROLLERS
const models = require('...')

create(req, res){
  models.all()
  .then(function(results){
    const project = results.rows
    
    return res.render('project/create' , { project })
  }).catch(function(err){
    throw new Error(err)
  })
}

//TERCEIRA E MELHOR FORMA
//USANDO ASYNC-AWAIT

//models
all(){
  db.query(`
    SELECT * FROM callbacks
  `)
}

//controllers
const models = require('...')

module.exports ={
  async create(req, res){
    let results = await models.all()
    const products = results.rows
    
    return res.render('products/create' , { products })
  }
}

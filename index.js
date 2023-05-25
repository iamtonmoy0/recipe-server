const express = require('express');
const cors = require('cors');
const chefs = require('./data/chef.json')
const recipes = require('./data/recipe.json') 
const app = express();
app.use(cors());
const port = 3000;

//root location
app.get('/',(req,res)=>{
	res.send('welcome to site')
}
)
//get all chef
app.get('/chefs',(req,res)=>{
	res.send(chefs)
})
// chef get by id
app.get('/chefs/:id',(req,res)=>{
	const id=parseInt(req.params.id);
	const chef=chefs.find(c=>c.id===id);
	res.send(chef);
})
//get all recipe 
app.get('/recipe',(req,res)=>{
	res.send(recipes)
})
//get recipe by id
app.get('/recipe/:id',(req,res)=>{
	const id = parseInt(req.params.id);
	if(id !== 0){
		const chefsRecipe = recipes.filter(n => parseInt(n.chef_id) === id);
                res.send(chefsRecipe)
	}
})

//listening port 
app.listen(port)

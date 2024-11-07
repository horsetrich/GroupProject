const Cake = require('../models/cake');

//GET /api/projects
exports.getAllCakes = async (req, res) => {
    try{
        const cakes = await Cake.find();
        res.json(cakes);
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getCakeById = async (req, res) => {
    try{
        const cakes = await Cake.findById(req.params.id);

        if(cakes === null){
            return res.status(404).json({message: 'Project not found'});
        }
        
        res.json(cakes);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.createCake = async (req, res) => {
    const cakes = new Cake({
        style: req.body.style,
        cakeFlavour: req.body.cakeFlavour,
        frostingFlavour: req.body.frostingFlavour,
        size: req.body.size,
        price: req.body.price
    });

    try{
        const newCake = await cakes.save();
        res.status(201).json(newCake);
    }catch(errors){
        res.status(400).json({message: error.message});
    }
}

exports.updateCake = async(req, res) => {
    try{
        const cake = await Cake.findById(req.params.id);

        if(cake === null){
            return res.status(404).json({message: 'Project not found'});
        }

        if(req.body.style != null){
            cake.style = req.body.style;
        }
        
        if(req.body.cakeFlavour != null){
            cake.cakeFlavour = req.body.cakeFlavour;
        }

        if(req.frostingFlavour != null){
            cake.frostingFlavour = req.body.frostingFlavour;
        }

        if(req.size != null){
            cake.size = req.body.size;
        }

        if(req.price != null){
            cake.price = req.body.price;
        }

        const updateCake = await cake.save();
        res.json(updateCake);

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.deleteCake = async(req, res) => {
    try{
        const cake = await Cake.findById(req.params.id);

        if(cake === null){
            return res.status(404).json({message: 'Project not found'});
        }

        await Cake.findByIdAndDelete(req.params.id);
        res.json({message: 'Project deleted successfully'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
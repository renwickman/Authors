const Author = require('../models/author.js');

module.exports = {

    index: function(req, res){
        Author.find()
            .then(author => {
                console.log(author)
                res.json(author)
            })
            .catch(err =>{
                console.log("We have an error!", err);
                res.json(err)
        })
    },

    create: function(req, res){
        console.log('creating author')
        let author = new Author()
            author.name = req.body.name;
            author.save()
                .then(author => {
                    res.json(author)
                })
                .catch(err =>{
                    res.json(err)
        })
    },

    show: function(req, res){
        console.log('show author')
        Author.findOne({_id: req.params.id})
            .then(author => {
                res.json(author)
            })
            .catch(err => {
                res.json(err)
            })

    },

    update: function(req, res){
        Author.findOne({_id: req.params.id})
            .then(author=>{
                author.name = req.body.name;
                author.save()
                .then(author => {
                    res.json(author)
                })
                .catch(err => {
                    console.log("We have an error!", err);
                    res.json(err)
                })
            })
            .catch(err => {
                console.log("We have an error!", err);
                res.json(err)
        })
    },



    delete: function(req, res){
        Author.remove({_id: req.params.id})
        .then(author => {
            res.json(author);
        })
        .catch(err => {
            console.log("We have an error!", err);
                for (var key in err.errors) {
                    req.flash('registration', err.errors[key].message);
                }
            res.json(err);
        })
    }
}
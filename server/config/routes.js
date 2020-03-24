  
const author = require("../controllers/authors.js");

module.exports = function(app){

    app.get("/authors", (req, res)=> {
        console.log('in /authors')
        author.index (req, res);
        })
    
    app.get("/author/new", (req, res)=> {
        author.new (req, res);
    })

    app.post("/authors", (req, res)=> {
        author.create (req, res);
    })

    app.get("/authors/:id", (req, res) => {
        author.show(req, res);
    })

    app.put("/authors/:id", (req, res)=> {
        author.update (req, res);
    })

    app.delete("/authors/:id", (req, res)=> {
       author.delete (req, res);
    })
};
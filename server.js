const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Movie = require('./backend/models/movie');

// ----- DB Connection -----
const dbOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true };
mongoose.connect("mongodb+srv://bz:bz@cluster0-li9qp.mongodb.net/sample_mflix?retryWrites=true&w=majority", dbOptions);
mongoose.connection.on('connected', function () {
    console.log("Connected to DB");
});
mongoose.connection.on('error', function (err) {
    console.log("Error while connecting to DB: " + err);
});


const app = express();

app.use(express.static(__dirname + '/dist/AtlasMovie'));
app.use(express.json());
app.use(cors());


app.get('/api/movies', async (req, res) => {
    let cond = {};
    if(req.query.year){
        cond.year = +req.query.year;  // {year: 2000} parseInt
    }
    let options = {skip:0, limit:12};
    try{
        let moviesList = await Movie.find(cond, null, options);
        res.json(moviesList);
    }catch{
        res.status(500).json([]);
    }

    /*Movie.find(cond, null, options, (err, data)=>{

    })*/    
});

app.get('/api/movies/:id', async (req, res)=>{
    let id = req.params.id;
    let objId = mongoose.Types.ObjectId(id);
    console.log(id);
    console.log(objId);
    try{
        let movie = await Movie.findById(objId);
        res.json(movie);
    }catch{
        res.status(500).json({});
    }
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server started listening at ${PORT} port.`));

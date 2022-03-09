const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];
const urlencodedParser = express.urlencoded({extended: false});
const jsonParser = express.json();

const database = require('./database');
database.connectDatabase();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();  // передаем обработку запроса методу app.post("/postuser"...
});


app.post('/api/login', jsonParser, (req, res) => {
    ;(async () => {

        //console.log(req.body.password);

        const { rows } = await database.query('SELECT * FROM login(\'' + req.body.login + '\',\'' + req.body.password + '\')')

        //console.log(rows);
        
        if (rows.toString() == []){
            res.json([{
                valid: false
            }])
            
        }else{
            res.json(rows);
        }

    })().catch(err => {
        res.json(err.toString())
    })

});

app.post('/api/plan', jsonParser , (req, res) => {

    ;(async () => {

        const { rows } =
            await database.query('SELECT monthly_reaped, monthly_quota FROM plan WHERE account_id = ' + req.body.user_id + ';')


        res.json(rows);


    })().catch(err => {
        res.json(err.stack)
    })

})

app.post('/api/country_plan', (req, res) => {
    ;(async () => {

        const { rows } =
            await database.query('SELECT country.id, country.name, country.reapings_plan FROM country')

        console.log(rows);

        res.json(rows);


    })().catch(err => {
        res.json(err.stack)
    })

});

app.post('/api/reapers_plan', jsonParser, (req, res) => {
    ;(async () => {

        console.log(req.body.country_id);

        if(req.body.country_id == undefined){
            return
        }



        const { rows } =
            await database.query('SELECT * FROM get_reapers_plan(' +  req.body.country_id + ')')

        console.log(rows);

        res.json(rows);

    })().catch(err => {
        res.json(err.stack)
    })

});

app.post('/api/add_report', jsonParser, (req, res) => {
    ;(async () => {

        let quer = 'SELECT * FROM makeReport(' +
            req.body.worker_id + ',' +
            req.body.participant_id  + ',\'' + req.body.comment + '\')';

        console.log(quer);

        const { rows } =
            await database.query(quer);

        
        res.json({ok: true});


    })().catch(err => {
        console.log(err.stack);
        res.json({ok: false, error: err.stack})
    })

});



app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
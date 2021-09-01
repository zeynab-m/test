'use strict';
const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const router = require('../routers/router');
const {bindDbName,responseFormat,errorHandler} = require('../middleWares');
const fixture = require('../../fixtures/initialData');



module.exports.createServer =async function ()  {

        const app = express();

        const server =http.createServer(app).listen(process.env.PORT || 1508, () => {
            console.log(`Listening on 1508`);
        })

        // app.use(bodyParser.urlencoded({extended: true}));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use('/public', express.static('public'))
        app.use(bindDbName.addDbName);
        app.use(responseFormat.responseFormat);
        app.use(router)
        errorHandler(app);


        await fixture().init()

        return server;

}




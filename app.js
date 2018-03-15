'use strict'
const express = require('express'),
	app = express(),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	routes = require('./routes/index'),
	//faviconURL = `${__dirname}/public/img/favicon-node.png`,
	publicDir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views`,
	port = (process.env.PORT || 3000)



app
	.set('views', viewDir)
	.set('view engine', 'pug')
	.set('port', port)
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(morgan('dev'))
	.use(publicDir)
	.use(routes)




module.exports = app
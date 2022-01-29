#!/usr/bin/nodejs

// initialize express and app class object
var express = require('express');
var app = express();

// initialize handlebars templating engine
var hbs = require('hbs');
app.set('view engine', 'hbs');

var https = require('https');
app.set('trust proxy', 1); // trust first proxy

// initialize the built-in library 'path'
var path = require('path');
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'static')));
app.use("/views", express.static(__dirname + '/views'));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/education', function(req, res){
    res.render('education');
});

app.get('/experience', function(req, res){
    res.render('experience');
});

app.get('/projects', function(req, res){
    res.render('projects');
});

app.get('/activities', function(req, res){
    res.render('activities');
});

// listener - keeps node 'alive.'
var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});
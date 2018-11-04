var express = require("express");
var router  = express.Router();
var Event = require("../models/event");

//INDEX - show all events
router.get("/", function(req, res){
    // Get all events from DB
    Event.find({}, function(err, allEvents){
       if(err){
           console.log(err);
       } else {
          res.render("events/index",{events:allEvents});
       }
    });
});

//CREATE - add new event to DB
router.post("/", isLoggedIn, function(req, res){
    // get data from form and add to events array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newEvent = {name: name, image: image, description: desc, author: author}
    // Create a new event and save to DB
    Event.create(newEvent, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to events page
            res.redirect("/events");
        }
    });
});

//NEW - show form to create new event
router.get("/new", isLoggedIn, function(req, res){
   res.render("events/new"); 
});

// SHOW - shows more info about one event
router.get("/:id", function(req, res){
    //find the event with provided ID
    Event.findById(req.params.id).populate("comments").exec(function(err, foundEvent){
        if(err){
            console.log(err);
        } else {
            console.log(foundEvent)
            //render show template with that event
            res.render("events/show", {event: foundEvent});
        }
    });
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;


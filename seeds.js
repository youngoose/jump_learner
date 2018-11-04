var mongoose = require("mongoose");
var Event = require("./models/event");
var Comment   = require("./models/comment");
 
var data = [
    {
        name: "Local Hack Day", 
        image: "https://images.unsplash.com/photo-1520110120835-c96534a4c984?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=e74f5d0bd06282eabb168c6df7469b35",
        description: "Local Hack Day is a global hackathon uniting thousands of students. Participants across 100+ distributed campuses are able to connect with their local communities and other hackers around the world through digital workshops & mini-events, social media, and a global livestream. (https://localhackday.mlh.io)"
    }
]
 
function seedDB(){
   //Remove all events
   Event.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed events!");
        Comment.remove({}, function(err) {
            // if(err){
            //     console.log(err);
            // }
            // console.log("removed comments!");
            //  //add a few events
            // data.forEach(function(seed){
            //     Event.create(seed, function(err, event){
            //         if(err){
            //             console.log(err)
            //         } else {
            //             console.log("added a event");
            //             //create a comment
            //             Comment.create(
            //                 {
            //                     text: "I'm looking forward to attend this event !!",
            //                     author: "SpiderMan"
            //                 }, function(err, comment){
            //                     if(err){
            //                         console.log(err);
            //                     } else {
            //                         event.comments.push(comment);
            //                         event.save();
            //                         console.log("Created new comment");
            //                     }
            //                 });
            //         }
            //     });
            // });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;
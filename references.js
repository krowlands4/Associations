var mongoose    = require("mongoose");
    Post        = require("./models/post.js");
    User        = require("./models/user.js");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });





// User.create({
//     email: "kenny@gmail.com",
//     name: "Ken Kenif",
// });

Post.create({
    title: "How to make the best burger part 4",
    content: "Quisque in posuere erat, et auctor tortor."
}, function(err,post){
    User.findOne({email:'kenny@gmail.com'}, function(err,foundUser){
        if(err){
            console.log(err);
        }   else{
            foundUser.posts.push(post);
            foundUser.save(function(err,data){
                if(err){
                    console.log(err);
                }   else{
                    console.log(data);
                }
            });
        }
    });
}); 

// Find User
// find all posts for that user

// User.findOne({email:"kenny@gmail.com"}).populate("posts").exec(function(err,user){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(user);
//   }
// });
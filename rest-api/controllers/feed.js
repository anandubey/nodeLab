const Post = require('../models/post')

exports.getPosts = (req, res, next) => {
    res.json({
        posts: [{
            title: 'First Post',
            content: 'This is the dummy post!'
        }]
    });
};

exports.createPost = (req, res, next) =>{

    if (!req.file){
        console.log("No image found!");
    }

    const imageUrl = req.file.path;
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post({
        title: title,
        content: content,
        imageUrl: imageUrl,
        creator: {name: 'Maximilian'},
    });

    post.save().then( result => {
        console.log(result);
        res.status(201).json({
            message: 'Post created successfully',
            post: result
        });
    }).catch(err =>{
        console.log(err);
    })
    
    
};
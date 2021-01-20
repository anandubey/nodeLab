exports.getPosts = (req, res, next) => {
    res.json({
        posts: [{
            title: 'First Post',
            content: 'This is the dummy post!'
        }]
    });
};

exports.createPost = (req, res, next) =>{

    const title = req.body.title;
    const content = req.body.content;
    //create a post in db
    res.status(201).json({
        message: 'Post created successfully',
        post: {id: new Date().toISOString(), title: title, content: content}
    });
};
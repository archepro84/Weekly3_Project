const express = require("express");
const Post = require("../schemas/post");
const router = express.Router();


// 게시글 데이터를 입력 받는 함수
router.post('/post', async (req, res) => {
    console.log(req.body);
    const {postId, user, password, title, content, comment, createdAt} = req.body;

    isExist = await Post.find({postId});
    if (isExist.length == 0) {
        await Post.create({postId, user, password, title, content, comment, createdAt});
    }
    console.log(isExist.length);
    res.send({result: "success"})
})

// 모든 게시글 데이터를 반환하는 함수
router.get('/posts', async (req, res) => {
    // console.log(req.body);
    json_data = await Post.find()
    // console.log(json_data);
    res.send({result: json_data})
})


module.exports = router
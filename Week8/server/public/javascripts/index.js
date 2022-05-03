var express = require("express");
var router= express.Router();

let post_list=[
    {
        title:"hi" , desc:"a",tag:["123"]},
        {title:"hi" , desc:"a",tag:["123"],
    }
];

let users ={
    admin:{username: "admin",  name: " Some Admin" , password: "password123" },
    alice:{username: "alice",  name: " Alice User" , password: "horse" },

}

router.get('/test',function(req,res,next){
    res.send('This is a test');
});

router.get('/posts',function(req,res,next){
    res.json(post_list);
});

router.post('/new',function(req,res,nexr){
    console.log(req.body);
    post_list.push(req.body);
});


router.post('/login',function(req,res,nexr){
    console.log(req.body);
    if ("username" in req.body && 'password' in req.body){
        if(req.body.username in users && users[req.body.username].password==req.body.password){
        console.log("success");
        res.sendStatus(200);

    } else {
        users[req.body.username]={username:req.body.username,name:req.body.name,password}
        console.log("bad login");
        res.sendStatus(401);
      }
     } else {
        console.log("bad request");
        res.sendStatus(400);
     }

});




function new_post(){
    let title=document.getElementById('post-title').value;
    let desc=document.getElementById('post-content').value;
    let tags=document.getElementById('post-tags').value.split(" ");

    add_post(title,desc,tags);

    let new_p{title:title ,desc :desc,tags :tags};
    post_list

}

function update_posts(){
    reset_posts();
    for ( let post of post_list){
        addpost(post.title,post.desc,)
    }
}

function reset_posts(){
    let container=document.getElementsByTagName('main')[0];
    while(container.children.length > 1){
        container.children[1].remove();
    }
}

function add_post(title,desc,tags){
    let post=document.createElement('div');
    post.classList.add("post");

    let votes=document.createElement('div');
    post.classList.add("votes");

    let votes_plus=documents.createElement('button');
    votes_plus.innerText='+';

    let votes_minus=documents.createElement('button');
    votes_minus.innerText='-';

    let votes_p=documents.createElement('p');
    votes_p.innerHtml='<span class="count">0</span><br />votes';

    votes.appendChild(votes_plus);
    votes.appendChild(votes_p);
    votes.appendChild(votes_minus);

    let content=document.createElement('div');
    content.classList.add("content");

    content.innerHTML=`<h3><a href="post">${title}</a></h3>
    <p>${desc}</p>;`
    //<span class="tag">Tag1</span><span class="tag">Tag2</span><span class="date">${new Date().toLocaleString()}</span>`;
    for (let tag of tags){
        let t=document.createElement('span');
        t.classlist.add('tag');
        t.innerText=tag;
        content.appendChild(t);
    }


        let d=document.createElement('span');
        d.classlist.add('date');
        d.innerText=new Date().toLocaleString();
        content.appendChild(t);

    post.appendChild(votes);
    post.appendChild(content);
    document.getElementbyTagName('main')[0].appendChild(post);





}



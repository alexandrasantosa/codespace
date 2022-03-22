function new_post(){
    let title=document.getElementById('post-title').value;
    let desc=document.getElementById('post-content').value;
    let tags=document.getElementById('post-tags').value.split(" ");

    add_post(title,desc,tags);
}

function

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

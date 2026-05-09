function submitForm(form){
let name = form.name.value;
let email = form.email.value;
let comment = form.comm.value;

alert("Name: "+name+"\n Email:"+email+"\n Comment: "+comment);
makeComment(name, comment)
}

function makeComment(name, comment){
    const comment_container = document.createElement("div");
    const comment_inner =`<span class="comment_name">${name}</span> commented \n${comment}`;

    comment_container.classList
}


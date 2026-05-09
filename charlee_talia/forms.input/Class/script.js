function submitForm(form){
    let name = form.name.value;
    let email = form.email.value;
    let comment = form.comm.value;

    alert(" name: "+name+"\n email: " +email+ "\n comm: "+comment);
}

function makeComment(name, comment){

    const comment_container = document.createElement("div");
    const comment_inner = `span class="comment_name">${name}</span> commented \n ${comment}`;

    comment_container.classList.add("comment");
    comment_container.innerHTML = comment_inner;

    const current_div = document.getElementbyId("form");
    document.body.insertBefore(comment_container, current_div);

}














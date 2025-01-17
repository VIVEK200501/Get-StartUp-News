function addPost(){
    console.log("We are in this method");
    const  inputBox=document.getElementById('postInput');
    if (!inputBox) {
        console.error("Textarea element not found!");
        return;
      }



    const postsContainer=document.getElementById('postsContainer');

    //Get the Users Input
    const userPost=inputBox.value.trim();

    //Ensure the Input is not Empty
    if(userPost===""){
        alert("Please Write Something");
        return;
    }

    //Create a new div to display the post
    const postDiv=document.createElement('div');
    postDiv.textContent=userPost;


    //Append the new post to the container
    postsContainer.appendChild(postDiv);


    

    inputBox.value="";


}
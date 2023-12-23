var likeButton = document.getElementById("like_button");
var isDrawing = false;

likeButton.addEventListener("click", function() {
    likeButton.classList.toggle("liked");
    if (isDrawing) {
        isDrawing = false;
        deteteAllFollowers();
        document.removeEventListener("mousemove", createFollowerElement);
    } else {
        isDrawing = true;
        document.addEventListener("mousemove", createFollowerElement);
    }
});

function createFollowerElement(event) {
    if (isDrawing) {
        var followerElement = document.createElement("div");
        followerElement.className = "follower";
        followerElement.style.left = event.pageX + "px";
        followerElement.style.top = event.pageY + "px";
        document.body.appendChild(followerElement);
    }
}

function deteteAllFollowers(){
    let followers = document.getElementsByClassName("follower");
    while(followers.length) {
        followers[0].parentNode.removeChild(followers[0]);
    }
}

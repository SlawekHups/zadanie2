console.log("Witam wszystkich !!");

let btnphoto = document.querySelector(".btnphoto");
let photo = document.querySelector(".photo");

btnphoto.addEventListener("click", () => {
     photo.remove();
});

let btncontent = document.querySelector(".btncontent");
let content = document.querySelector(".content");

btncontent.addEventListener("click", () => {
     content.remove();
});

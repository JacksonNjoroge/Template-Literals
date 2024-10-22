const profiles = [
  {
    imageUrl: "Assets/Ada.jpeg",
    profileName: "Ada Wong",
    title: "UI Designer",
    description:
      "We create entertainment and experiences that bring people together. With our community, we use art, culture, technology, and gaming to create meaningful connections.",
  },
  {
    imageUrl: "Assets/osama.jpeg",
    profileName: "Osama Bin Laden",
    title: "UX Designer",
    description:
      "We create entertainment and experiences that bring people together. With our community, we use art, culture, technology, and gaming to create meaningful connections.",
  },
  {
    imageUrl: "Assets/Nasty.jpeg",
    profileName: "Nasty Cee",
    title: "Mobile Designer",
    description:
      "We create entertainment and experiences that bring people together. With our community, we use art, culture, technology, and gaming to create meaningful connections.",
  },
  {
    imageUrl: "Assets/niggah.jpeg",
    profileName: "Black Niggah",
    title: "Web Designer",
    description:
      "We create entertainment and experiences that bring people together. With our community, we use art, culture, technology, and gaming to create meaningful connections.",
  },
];
function displayProfiles({imageUrl, profileName, title, description}) {
  return `<div class="profile-card">
    <div class="profile-image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <h1>${profileName}</h1>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="like" title="Like">
    <i class='bx bx-heart'></i> 
    <span id="increment"></span>
    </div>
    </div>`;
}

let cardContainer = document.getElementById("card-container");

let profileCard = profiles.map((item)=>{
    return displayProfiles(item);
});
cardContainer.innerHTML = profileCard;

// for(let i = 0; i<profiles.length; i++){
//     cardContainer.innerHTML += displayProfiles(profiles[i]);
// }



  let likes = document.getElementsByClassName("like");
  

  for(let like of likes){
    let likeInc =like.querySelector("span");
  likeInc.innerHTML = "";
    let i = like.querySelector("i")
      like.addEventListener('click', function liking() {
        if (i.classList.contains('bxs-heart')) {
          i.setAttribute('class', 'bx bx-heart'); // Unliked
          likeInc.textContent--;
            if(likeInc.textContent == 0){
            likeInc.innerHTML = "";
            } 
              localStorage.setItem('like', like); 
              localStorage.getItem("like")
        } else {
          i.setAttribute('class', 'bx bxs-heart'); //liked 
          likeInc.textContent++;
        }
      }
  )}


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

function displayProfiles({imageUrl, profileName, title, description}, index) {
  let storedLikes = localStorage.getItem(`likes-${index}`) || 0;
  return `<div class="profile-card" data-index="${index}">
    <div class="profile-image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <h1>${profileName}</h1>
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="like" title="Like">
      <i class='bx ${storedLikes > 0 ? 'bxs-heart' : 'bx-heart'}'></i> 
      <span id="increment">${storedLikes > 0 ? storedLikes : ''}</span>
    </div>
  </div>`;
}

let cardContainer = document.getElementById("card-container");

let profileCard = profiles.map((item, index) => {
  return displayProfiles(item, index);
}).join("");
cardContainer.innerHTML = profileCard;

let likes = document.getElementsByClassName("like");

for (let like of likes) {
  let likeInc = like.querySelector("span");
  let i = like.querySelector("i");
  let profileIndex = like.closest('.profile-card').dataset.index; // Get the index of the profile

  like.addEventListener('click', function liking() {
    let likeCount = localStorage.getItem(`likes-${profileIndex}`) || 0;
    likeCount = parseInt(likeCount);
    
    if (i.classList.contains('bxs-heart')) {
      // Unlike
      i.setAttribute('class', 'bx bx-heart');
      likeCount--;
      if (likeCount <= 0) {
        likeCount = 0;
        likeInc.innerHTML = "";
      } else {
        likeInc.textContent = likeCount;
      }
    } else {
      // Like
      i.setAttribute('class', 'bx bxs-heart');
      likeCount++;
      likeInc.textContent = likeCount;
    }

    localStorage.setItem(`likes-${profileIndex}`, likeCount);
  });
}

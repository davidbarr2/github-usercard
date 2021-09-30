import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

function fetchCardData(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(res => {
    const cards = document.querySelector('div .cards')
    cards.appendChild(githubCard(res))
  })
  .catch(err => console.log(err))
}

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];
followersArray.push('tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell')
followersArray.forEach( username => {
  fetchCardData(username)
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function githubCard(user){
  //create and classes
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card')
  const userImg = document.createElement('img')
  const cardInfoDiv = document.createElement('div')
  cardInfoDiv.classList.add('card-info')
  const nameHeader = document.createElement('h3')
  nameHeader.classList.add('name')
  const usernameP = document.createElement('p')
  usernameP.classList.add('username')
  const locationP = document.createElement('p')
  const linkP = document.createElement('p')
  const linkAnchor = document.createElement('a')
  const followersP = document.createElement('p')
  const followingP = document.createElement('p')
  const bioP = document.createElement('p')

  //hierarchy
  cardDiv.appendChild(userImg)
  cardDiv.appendChild(cardInfoDiv)
    cardInfoDiv.appendChild(nameHeader)
    cardInfoDiv.appendChild(usernameP)
    cardInfoDiv.appendChild(locationP)
    cardInfoDiv.appendChild(linkP)
      linkP.appendChild(linkAnchor)
    cardInfoDiv.appendChild(followersP)
    cardInfoDiv.appendChild(followingP)
    cardInfoDiv.appendChild(bioP)


  //add in user data
  userImg.setAttribute('src', user.data.avatar_url)
  nameHeader.textContent = user.data.nameHeader
  usernameP.textContent = user.data.login
  locationP.textContent = user.data.location
  linkAnchor.setAttribute('href', user.data.html_url)
  linkAnchor.textContent = user.data.html_url
  followersP.textContent = `Followers: ${user.data.followers}`
  followingP.textContent = `Following: ${user.data.following}`
  bioP.textContent = `Bio: ${user.data.bio}`

  return cardDiv
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

const links = {
  github: 'LucasDiias',
  youtube: 'channel/UCiYj2TaHZuI-p9BxB89Rh_w',
  instagram: 'diias.luc',
  facebook: 'diias.luc',
  twitter: 'AkrM0rgan'
}

function changeLinks() {
  for (let li of socialMedia.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${links[social]}`
  }
}

changeLinks()

function getGithubUserInfo() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      title.textContent = `${data.name} | DoWhile 2021`
      userPic.src = data.avatar_url
      userName.textContent = data.name
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
    })
}

getGithubUserInfo()

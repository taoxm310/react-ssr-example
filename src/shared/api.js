import fetch from 'isomorphic-fetch';

export function fetchPopularRepos(language = 'all') {
  const encodeURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  return fetch(encodeURI)
    .then((data) => data.json())
    .then((repos)=> repos.items)
    .catch((error) => {
      console.warn(error)
      return null
    })
}
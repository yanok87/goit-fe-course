const weatherApi = 'https://api.apixu.com/v1/current.json?key=fbd0a2089b144587a6675044190708'

export function fetchWeather(coords){
  return fetch(`${weatherApi}&q=${coords}`)
  .then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json()
    } else {
      let err = new Error(res.statusText)
      err.response = res
      throw err
    }
  })
  .catch(err => err)
}




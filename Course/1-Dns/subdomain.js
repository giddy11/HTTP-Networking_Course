async function Fet() {
    const bootdevAPIDomain = 'api.boot.dev'

    // don't touch below this line
    const apiKey = generateKey()
    console.log(apiKey)
    const items = await getItemData(apiKey, bootdevAPIDomain)

    logItems(items)
}

Fet()

async function getItemData(apiKey, bootdevAPIDomain) {
  const response = await fetch(`https://${bootdevAPIDomain}/v1/courses_rest_api/learn-http/items`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

function generateKey() {
  const characters = 'ABCDEF0123456789'
  let result = ''
  for (let i = 0; i < 16; i++){
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

function logItems(items) {
  for (item of items) {
    console.log(item.name)
  } 
}
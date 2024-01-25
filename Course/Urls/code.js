const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items';

async function fetchData() {
  const apiKey = generateKey();
  const items = await getData(itemURL, apiKey);
  logItems(items);
}

// Call the async function
fetchData();

async function getData(url, apiKey) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function generateKey() {
  const characters = 'ABCDEF0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name);
  }
}

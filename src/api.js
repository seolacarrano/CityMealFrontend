const BASE_URL = "http://localhost:3030";

function get(url) {
  return fetch(`${BASE_URL}${url}`, {
    headers: {
      'Accept': "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function post(url, data) {
  return fetch(`${BASE_URL}${url}`, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json"
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function put(url, data, token) {
  return fetch(`${BASE_URL}${url}`, {
    method: "PUT",
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json",
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}


export { get, post, put };

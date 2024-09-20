import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getMotivation = (motivation) => {
  console.log("GET request: ", motivation);
  return instance.get('/motivation', motivation);
}

export const createMotivation = (motivation) => {
  console.log("POST request: ", motivation);
  return instance.post('/motivation', motivation);
}

export const updateMotivation = (motivation) => {
  console.log("PUT request: ", motivation);
  return instance.put('/motivation', motivation);
}

export const deleteMotivation = (motivation) => {
  console.log("DELETE request: ", motivation);
  const email = motivation.email;
  const id = motivation.id;
  return instance.delete(`/motivation?email=${email}&motivationId=${id}`, motivation);
}
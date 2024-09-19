const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application.json',
  }
});

export const getMotivation = (motivation) => {
  return instance.get('/motivation', motivation);
}

export const createMotivation = (motivation) => {
  return instance.post('/motivation', motivation);
}

export const updateMotivation = (motivation) => {
  return instance.put('/motivation', motivation);
}

export const deleteMotivation = (motivation) => {
  return instance.delete('/motivation', motivation);
}
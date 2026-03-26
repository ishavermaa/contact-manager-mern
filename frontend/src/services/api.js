import axios from "axios";

const API = "http://localhost:5000/api/contacts";

export const getContacts = (search = "") =>
  axios.get(`${API}?search=${search}`);

export const createContact = (data) =>
  axios.post(API, data);

export const deleteContact = (id) =>
  axios.delete(`${API}/${id}`);
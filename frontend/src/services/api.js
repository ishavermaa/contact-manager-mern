import axios from "axios";

const API = "https://contact-manager-mern-t1ia.onrender.com/api/contacts";

export const getContacts = (search = "") =>
  axios.get(`${API}?search=${search}`);

export const createContact = (data) =>
  axios.post(API, data);

export const deleteContact = (id) =>
  axios.delete(`${API}/${id}`);
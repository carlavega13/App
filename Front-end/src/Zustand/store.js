import { create } from "zustand";
import { HOST } from "../HOST";
import axios from "axios";

const store = create((set) => ({
  user: {},
  users: [],
  login: async (userLog) => {
    const response = await axios.post(`${HOST}login`, userLog);
    set((state) => ({ user: response.data }));
  },
  getUsers: async (id) => {
    const response = await axios(`${HOST}getUsers/${id}`);
    set((state) => ({ users: response.data }));
  },
}));

export default store;

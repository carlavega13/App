import { create } from "zustand";
import { HOST } from "../HOST";
import axios from "axios";
import { notifyError, notifySuccess } from "../ToastNotification/toast";
const store = create((set) => ({
  user: {},
  users: [],
  login: async (userLog) => {
    try {
      const response = await axios.post(`${HOST}login`, userLog);
      set((state) => ({ user: response.data }));
    } catch (error) {
      console.log(error.message);
    }
  },
  getUsers: async (id) => {
    try {
      const response = await axios(`${HOST}getUsers/${id}`);
      set((state) => ({ users: response.data }));
    } catch (error) {
      console.log(error.message);
    }
  },
  bringOneUser: async (id) => {
    try {
      const response = await axios(`${HOST}getOneUser/${id}`);
      set((state) => ({
        users: state.users.map((user) =>
          user.id == id ? response.data : user
        ),
      }));
    } catch (error) {
      console.log(error.message);
    }
  },
  putUser: async (info) => {
    try {
      const response = await axios.put(`${HOST}putUser`, info);
      notifySuccess("Tu perfil fue actualizado.")
      set((state) => ({ user: response.data }));
    } catch (error) {
      console.log(error.message);
      notifyError(error.message)
    }
  },
}));

export default store;

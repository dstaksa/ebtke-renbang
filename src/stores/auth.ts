import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import UserInfoService from "@/core/services/UserInfoService";

export interface User {
  name: string;
  surname: string;
  email: string;
  role: string;
  password: string;
  api_token: string;
}

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    UserInfoService.saveData(JSON.stringify(authUser));
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(user.value.api_token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: User) {
    if (
      credentials.email == "pengusul@mail.com" &&
      credentials.password == "Pengusul@123"
    ) {
      setAuth({
        name: "User Pengusul",
        surname: "Pengusul",
        email: "pengusul@mail.com",
        role: "pengusul",
        password: "Pengusul@123",
        api_token: "test123",
      });
    } else if (
      credentials.email == "dei.ebtke@mail.com" &&
      credentials.password == "Ebtke@123"
    ) {
      setAuth({
        name: "User DEI",
        surname: "DEI",
        email: "dei.ebtke@mail.com",
        role: "dei",
        password: "Ebtke@123",
        api_token: "test123",
      });
    } else if (
      credentials.email == "ppk@mail.com" &&
      credentials.password == "Ppk@123"
    ) {
      setAuth({
        name: "User PPK",
        surname: "PPK",
        email: "ppk@mail.com",
        role: "ppk",
        password: "Ppk@123",
        api_token: "test123",
      });
    } else if (
      credentials.email == "penyedia@mail.com" &&
      credentials.password == "Penyedia@123"
    ) {
      setAuth({
        name: "User Penyedia",
        surname: "Penyedia",
        email: "penyedia@mail.com",
        role: "penyedia",
        password: "Penyedia@123",
        api_token: "test123",
      });
    } else if (
      credentials.email == "pengawas@mail.com" &&
      credentials.password == "Pengawas@123"
    ) {
      setAuth({
        name: "User Pengawas",
        surname: "Pengawas",
        email: "pengawas@mail.com",
        role: "pengawas",
        password: "Pengawas@123",
        api_token: "test123",
      });
    } else {
      setError({
        message: "Email atau password salah!",
      });
    }
    // return ApiService.post("login", credentials)
    //   .then(({ data }) => {
    //     setAuth(data);
    //   })
    //   .catch(({ response }) => {
    //     setError(response.data.errors);
    //   });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: User) {
    return ApiService.post("register", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("forgot_password", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
      });
  }

  function verifyAuth() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      ApiService.post("verify_token", { api_token: JwtService.getToken() })
        .then(({ data }) => {
          setAuth(data);
        })
        .catch(({ response }) => {
          setError(response.data.errors);
          purgeAuth();
        });
    } else {
      purgeAuth();
    }
  }

  return {
    errors,
    user,
    isAuthenticated,
    login,
    logout,
    register,
    forgotPassword,
    verifyAuth,
  };
});

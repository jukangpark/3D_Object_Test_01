import { atom } from "recoil";

export const cameraProperty = atom({
  key: "perspectiveCamera",
  default: true,
});

export const isLoggedInState = atom({
  key: "isLoggedIn",
  default: false,
});

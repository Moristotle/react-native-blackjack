import http from "../../http-service";
import { BaseUrl } from "../../api-config";

export async function getProfile() {
  return await http.get(BaseUrl.profile);
}

export async function getProfileById(id) {
  return await http.get(`${BaseUrl.profile}/${id}`);
}

export async function postProfile(newProfile) {
  return await http.post(BaseUrl.profile, newProfile);
}

export async function putProfile(editedProfile) {
  return await http.put(`${BaseUrl.profile}${profile.id}`, editedProfile);
}

export async function deleteProfile(id) {
  return await http.delete(`${BaseUrl.profile}${id}`);
}

export async function getProfileByName(name) {
    return await http.get(`${BaseUrl.profile}?name=${name}`);
}

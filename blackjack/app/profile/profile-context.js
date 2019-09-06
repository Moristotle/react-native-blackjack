import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { getProfileByName, getProfile, postProfile } from "./profile-service";


export const ProfileProvider = ({ children }) => {
    const store = useLocalStore(() => ({
        /*observables*/
        profiles: [],
        profile: {
            id: "",
            name: "",
            totalScore: 0,
            highScore: 0,
        },
        isLoading: false,   

        async getProfile() {
            store.isLoading = true;
            try {
                const {data} = await getProfile();
                console.log(data);
                store.profiles = data;
            } catch (e) {
                alert(e.message);
            }
            store.isLoading = false;
        },
        async getProfileByName(name) {
            store.isLoading = true;
            try {
                const {data} = await getProfileByName(name);
                console.log(data);
                store.profile = data;
            } catch(e) {
                alert(e.message);
            }
            store.isLoading = false;
        },

        async addProfile(newProfile) {
            store.isLoading = true;
            try {
                const {data} = await postProfile(newProfile);
                store.profile = data;
            } catch(e) {
                alert(e.message);
            }
            store.isLoading = false;
        }
    }));

    return <profileContext.Provider value={store}>{children}</profileContext.Provider>
};

export const profileContext = createContext();
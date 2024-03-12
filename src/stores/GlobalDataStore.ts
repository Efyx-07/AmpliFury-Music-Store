import { defineStore } from 'pinia';

const hostName: ImportMetaEnv = import.meta.env.VITE_BACKEND_URL;

type State = {
    hostName: ImportMetaEnv;
    companyName: string;
    currency: string;
}

export const useGlobalDataStore = defineStore('globalData', {

    state: (): State => ({
        hostName: hostName,
        companyName: 'AmpliFury',
        currency: '$',
    })
})
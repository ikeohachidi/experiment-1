import { defineStore } from 'pinia'

export const useWallet = defineStore('wallet', {
    state: () => {
        return {
            money: 'N2' 
        }
    }
})


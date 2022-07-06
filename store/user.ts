import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
    state: () => {
        return {
            username: 'ikeohachidi',
            users: []
        }
    },
    actions: {
        async fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const body = await response.json();

                this.users = body;
            } catch(e) {
                console.log(e)
            }
        }
    }
})


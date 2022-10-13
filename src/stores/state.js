import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'


export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        tot: 0,
        items: useStorage('item', [])
    }),

    getters: {
        
    },

    actions: {
        addItem(item) {
            if (!this.items.includes(item)) {
                this.items.push(item)
            } else {
                item.store.occurrences += 1
            }

            this.tot++
        },

        removeItem(item) {
            item.store.occurrences -= 1
            this.tot--
        },

        removeItemIndex(item) {
            this.items.splice(item, 1)
        }
    },
})


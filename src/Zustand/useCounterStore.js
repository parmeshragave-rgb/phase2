import { create } from "zustand"

const useCounterStore=create((set) => ({
    count:0,
    theme:false,
    increment: () =>set((state) => ({count:state.count+1})),
    decrement:() => set((state) => ({count:state.count-1})),
    clear: () => set((state) => ({count:0})),
    toggle:() => set((state) => ({theme:!state.theme}))

}))

export default useCounterStore
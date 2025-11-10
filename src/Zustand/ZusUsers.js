import { create } from 'zustand'
import axios from 'axios'

const ZusUsers = create((set) => ({
  users: [],
  loading: false,
  error: '',

  fetchUsers: () => {
    set({ loading: true, error: '' })
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        set({ users: res.data, loading: false })
      })
      .catch((err) => {
        set({ error: err.message, loading: false })
      })
  },
}))

export default ZusUsers

const actions = {
    async setUsers({commit}) {
      const users = window.localStorage.getItem("users")
      if (users) {
        commit('SET_USERS', JSON.parse(users))
      } else {
        try {
          await fetch('https://randomuser.me/api/?results=100')
          .then(data => data.json())
          .then(data => {
            commit('SET_USERS', data.results)
            window.localStorage.setItem(
              'users',
              JSON.stringify(data.results))
           })
        } catch (error) {
          console.log('error')
        }
      }
    }
  }
  
  export default actions
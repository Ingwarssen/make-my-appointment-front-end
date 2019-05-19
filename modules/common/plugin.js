export default ({ app, store }) => {
  const mapNameSpaceHelper = (storeName, params) => {
    const { dispatch } = store

    const fetchAll = (...actions) => {
      const tasks = actions.map(action => {
        return dispatch(`${storeName}/${action}`, params)
      })

      return Promise.all(tasks)
    }

    const fetch = async (...actions) => {
      for (let action of actions) {
        await dispatch(`${storeName}/${action}`, params)
      }
    }
    return {
      fetchAll,
      fetch
    }
  }

  app.$mapNameSpaceHelper = mapNameSpaceHelper
}

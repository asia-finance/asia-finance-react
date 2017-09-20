export default {
  kv: (state = {}, { type }) => {
    switch (type) {
      case 'KV_EXAMPLE_ACTION':
        return {
          ...state
        }
      default:
        return state
    }
  }
}

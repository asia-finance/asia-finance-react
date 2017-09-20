export default {
  bv: (state = {}, { type }) => {
    switch (type) {
      case 'BV_EXAMPLE_ACTION':
        return {
          ...state
        }
      default:
        return state
    }
  }
}

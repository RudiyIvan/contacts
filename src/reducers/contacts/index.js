// TODO: replace by a server response
const response = [
  {id: 1, firstName: 'John', lastName: 'Doe', email: 'John_Doe@epam.com'},
  {id: 2, firstName: 'Jane', lastName: 'Doe', email: 'Jane_Doe@epam.com'},
];

const contact = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      }
    case 'UPDATE_CONTACT':
      return {
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email
      }
    default:
      return state
  }
}

const contacts = (state = response, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        contact(undefined, action)
      ]
    case 'UPDATE_CONTACT':
      return state.map((item) => {
        if(item.id === action.id) {
          return contact(undefined, action)
        }

        return Object.assign({}, item)
      })
    case 'REMOVE_CONTACT':
      return state.filter((item) => (item.id !== action.id))
    default:
      return state
  }
}

export default contacts
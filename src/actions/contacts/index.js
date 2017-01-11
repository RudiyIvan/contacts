export const addContact = (firstName, lastName, email) => {
  return {
    type: 'ADD_CONTACT',
    id: Date.now(),
    firstName,
    lastName,
    email
  }
}

export const updateContact = (id, firstName, lastName, email) => {
  return {
    type: 'UPDATE_CONTACT',
    id,
    firstName,
    lastName,
    email
  }
}

export const removeContact = (id) => {
  return {
    type: 'REMOVE_CONTACT',
    id
  }
}
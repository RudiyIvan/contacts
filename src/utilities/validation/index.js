export const email = (email) => {
  if (!email) {
    return 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Invalid email address'
  }
}

export const firstName = (firstName) => {
  if (!firstName) {
    return 'First name is required'
  }
}

export const lastName = (lastName) => {
  if (!lastName) {
    return 'Last name is required'
  }
}
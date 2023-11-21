function FirstNameValidation(firstname) {
  if (firstname !== null && firstname.length > 2) return true
  else return false
}

function LastNameValidation(lastname) {
  if (lastname !== null && lastname.length > 2) return true
  else return false
}

function BirthdateValidation(birthdate) {
  // it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
  var optimizedBirthday = birthdate.replace(/-/g, '/')

  //set date based on birthday at 01:00:00 hours GMT+0100 (CET)
  var myBirthday = new Date(optimizedBirthday)

  // set current day on 01:00:00 hours GMT+0100 (CET)
  var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00'

  // calculate age comparing current date and borthday
  var myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000)

  if (myAge < 18) {
    return false
  } else {
    return true
  }
}
function StartdateValidation(startdate) {
  if (dateIsValid(new Date(startdate))) {
    return true
  } else {
    return false
  }
}

function dateIsValid(date) {
  return date instanceof Date && !isNaN(date)
}

function StreetValidation(street) {
  if (street !== null && street.length > 2) return true
  else return false
}
function CityValidation(city) {
  if (city !== null && city.length > 2) return true
  else return false
}
function ZipValidation(zip) {
  if (zip > 0) return true
  else return false
}
function DepartmentValidation(department) {
  if (department) return true
  else return false
}
function StateValidation(state) {
  if (state) return true
  else return false
}

export const errorMessages = {
  lastName: 'Enter a last name with at least 2 letters',
  firstName: 'Enter a first name with at least 2 letters',
  birthdate: 'Enter a birth date (18 years old required)',
  startdate: 'Enter a start date',
  zip: 'Enter a Zip Code',
  street: 'Enter a street with at least 2 letters',
  city: 'Enter a city with at least 2 letters',
  department: 'Select a department',
  state: 'Select a state',
}

export function FormValidation(Employee) {
  let isValid = true
  let inputValidation = {
    firstname: true,
    lastname: true,
    birthdate: true,
    startdate: true,
    street: true,
    city: true,
    state: true,
    zip: true,
    department: true,
  }
  if (!FirstNameValidation(Employee.firstname)) {
    isValid = false
    inputValidation.firstname = false
  }
  if (!LastNameValidation(Employee.lastname)) {
    isValid = false
    inputValidation.lastname = false
  }
  if (!BirthdateValidation(Employee.birthdate)) {
    isValid = false
    inputValidation.birthdate = false
  }
  if (!StartdateValidation(Employee.startdate)) {
    isValid = false
    inputValidation.startdate = false
  }
  if (!StreetValidation(Employee.street)) {
    isValid = false
    inputValidation.street = false
  }
  if (!CityValidation(Employee.city)) {
    isValid = false
    inputValidation.city = false
  }
  if (!StateValidation(Employee.state)) {
    isValid = false
    inputValidation.state = false
  }
  if (!ZipValidation(Employee.zip)) {
    isValid = false
    inputValidation.zip = false
  }
  if (!DepartmentValidation(Employee.department)) {
    isValid = false
    inputValidation.department = false
  }
  if (!isValid) {
    return inputValidation
  } else return true
}

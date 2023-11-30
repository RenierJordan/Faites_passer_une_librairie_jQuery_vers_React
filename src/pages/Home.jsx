import '../styles/Home.css'
import { NavLink } from 'react-router-dom'
import { Modal } from 'simple-modal-jr-lib'
import { useState } from 'react'
import Select from 'react-select'
import { states } from '../mocks/states'
import { departments } from '../mocks/departments'
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { useDispatch } from 'react-redux'
import { create } from '../features/employeesSlice'
import { FormValidation, errorMessages } from '../functions/formValidation'

function Home() {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [zipCode, setZipCode] = useState(null)
  const [selectedDepartment, setSelectedDepartment] = useState('')

  const validationTrue = {
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

  const [inputValidation, setInputValidation] = useState(validationTrue)

  const handleSave = () => {
    const currentEmployee = {
      firstname: firstName,
      lastname: lastName,
      birthdate: birthDate.toDateString(),
      startdate: startDate.toDateString(),
      street: street,
      city: city,
      state: selectedState.value,
      zip: zipCode,
      department: selectedDepartment.label,
    }
    if (FormValidation(currentEmployee) == true) {
      setInputValidation(validationTrue)
      updateEmployee(currentEmployee)
      setIsOpen(true)
    } else {
      setInputValidation(FormValidation(currentEmployee))
    }
  }

  const updateEmployee = (currentEmployee) => {
    dispatch(create(currentEmployee))
  }

  return (
    <>
      <div>
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="container">
          <NavLink to="/employees">View Current Employees</NavLink>
          <h2>Create Employee</h2>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            {!inputValidation.firstname && (
              <span className="input-error">{errorMessages.firstName}</span>
            )}
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
            />
            {!inputValidation.lastname && (
              <span className="input-error">{errorMessages.lastName}</span>
            )}
            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker
              onChange={setBirthDate}
              value={birthDate}
              calendarAriaLabel
              clearAriaLabel
            />
            {!inputValidation.birthdate && (
              <span className="input-error">{errorMessages.birthdate}</span>
            )}

            <label htmlFor="start-date">Start Date</label>
            <DatePicker
              onChange={setStartDate}
              value={startDate}
              calendarAriaLabel
              clearAriaLabel
            />
            {!inputValidation.startdate && (
              <span className="input-error">{errorMessages.startdate}</span>
            )}

            <fieldset className="address">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                onChange={(e) => setStreet(e.target.value)}
              />
              {!inputValidation.street && (
                <span className="input-error">{errorMessages.street}</span>
              )}

              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
              {!inputValidation.city && (
                <span className="input-error">{errorMessages.city}</span>
              )}

              <label htmlFor="state">
                State
                <Select
                  id="state"
                  options={states}
                  selected={selectedState}
                  onChange={(e) => setSelectedState(e)}
                ></Select>
              </label>
              {!inputValidation.state && (
                <span className="input-error">{errorMessages.state}</span>
              )}

              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                onChange={(e) => setZipCode(e.target.value)}
              />
              {!inputValidation.zip && (
                <span className="input-error">{errorMessages.zip}</span>
              )}
            </fieldset>

            <label htmlFor="department">
              Department
              <Select
                id="department"
                options={departments}
                selected={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e)}
              />
            </label>
            {!inputValidation.department && (
              <span className="input-error">{errorMessages.department}</span>
            )}
          </form>
          <button className="button-save" onClick={handleSave}>
            Save
          </button>
        </div>

        {isOpen && <Modal setIsOpen={setIsOpen} text={'Employee Created !'} />}
      </div>
    </>
  )
}

export default Home

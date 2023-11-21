import '../styles/EmployeeList.css'
import { NavLink } from 'react-router-dom'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
function EmployeeList() {
  const data = useSelector((state) => state.employees?.employeesList)

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstname', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'lastname',
        header: 'Last Name',
      },
      {
        accessorFn: (originalRow) => new Date(originalRow.startdate), //convert to date for sorting and filtering
        header: 'Start Date',
        Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
      },
      {
        accessorKey: 'department',
        header: 'Department',
      },
      {
        accessorFn: (originalRow) => new Date(originalRow.birthdate), //convert to date for sorting and filtering
        header: 'Date of Birth',
        Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
      },
      {
        accessorKey: 'street',
        header: 'Street',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'zip',
        header: 'Zip Code',
      },
    ],
    []
  )
  const table = useMaterialReactTable({
    columns,
    data,
  })
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <NavLink to="/"> Home</NavLink>
      <MaterialReactTable table={table} />;
    </div>
  )
}

export default EmployeeList

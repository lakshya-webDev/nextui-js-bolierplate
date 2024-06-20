import { title } from '@/components/primitives';
import TableComponent from '@/components/TableComponent';
import { APP_URL } from 'utils/constants';
import MetData from "../../data/metaData.json"

async function getEmployees() {
  const res = await fetch(`${APP_URL}/employees`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export const metadata = {
  title: MetData['employees'].title,
  description: MetData['employees'].description,
}

export default async function Employees() {
  const data = await getEmployees()
  const columns = [
    { name: "ID", uid: "id" },
    { name: "NAME", uid: "employee_name" },
    { name: "SALARY", uid: "employee_salary" },
    { name: "AGE", uid: "employee_age" },
    { name: "ACTIONS", uid: "actions" },
  ];

  console.log("EMPLOYEES DATA SERVER COMPONENT:", data, ">>END: EMPLOYEES DATA SERVER COMPONENT")
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block w-full  justify-start">
        <h1 className={title()}>Employees</h1>
      </div>
      <div className="my-10 w-full">
        <TableComponent columns={columns} employeesData={data.employees} />
      </div>
    </section>
  );
}

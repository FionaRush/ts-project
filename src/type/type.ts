export interface DepartmentItem { label: string, id: number }

export interface QueryForm {
  name: string;
  departmentId: number;
}

interface EmployeeInfo {
  id: number;
  key: number;
  name: string;
  department: string;
  hiredate: string;
  level: string;
}
export type EmployeeTable = EmployeeInfo[] | undefined

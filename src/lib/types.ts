export interface IFormInput {
    name: string
    surname: string
    age: number
    salary: number
}
  
export interface IUser extends IFormInput {
    id: number | string
}
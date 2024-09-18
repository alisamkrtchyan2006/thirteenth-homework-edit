import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { IFormInput } from "../lib/types"
import { addUser } from "../lib/Api"

export const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const navigate = useNavigate()

    const onSubmit = (data: IFormInput) => {
        addUser(data).then(() => navigate('/'))
    }

  return <>
        <h2 className="add">Add User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="first-block">
                <label>Name</label>
                <input className="first" 
                    {...register("name", { required: "Name is required" })} />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="second-block">
                <label>Surname</label>
                <input className="second" 
                    {...register("surname", { required: "Surname is required" })} />
                {errors.surname && <p className="error">{errors.surname.message}</p>}
            </div>
            <div className="third-block">
                <label>Age</label>
                <input className="third" type="number" 
                    {...register("age", { required: "Age is required" })} />
                {errors.age && <p className="error">{errors.age.message}</p>}
            </div>
            <div className="fourth-block">
                <label>Salary</label>
                <input className="fourth" type="number" 
                    {...register("salary", { required: "Salary is required" })} />
                {errors.salary && <p className="error">{errors.salary.message}</p>}
            </div>
            <button className="submit" type="submit">Add User</button>
        </form>
    </>
}

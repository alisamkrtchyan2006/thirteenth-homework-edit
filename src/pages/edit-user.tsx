import { useForm } from "react-hook-form"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { IFormInput, IUser } from "../lib/types"
import { getUser, updateUser } from "../lib/Api"

export const EditUser = () => {
    const { id } = useParams<{ id: string }>()

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>()
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getUser(id).then((data) => reset(data))
        }
    }, [id, reset])

    const onSubmit = (data: IFormInput) => {
        if (id) {
            const userData: IUser = {
                ...data,
                id: id,
            }
            updateUser(id, userData).then(() => navigate('/'))
        }
    }

  return <>
        <h3 className="edit-title">Edit User</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="first-block">
                <label>Name</label>
                <input className="first" {...register("name", { required: "Name is required" })} />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="second-block">
                <label>Surname</label>
                <input className="second" {...register("surname", { required: "Surname is required" })} />
                {errors.surname && <p className="error">{errors.surname.message}</p>}
            </div>
            <div className="third-block">
                <label>Age</label>
                <input className="third" {...register("age", { required: "Age is required" })} />
                {errors.age && <p className="error">{errors.age.message}</p>}
            </div>
            <div className="fourth-block">
                <label>Salary</label>
                <input className="fourth" {...register("salary", { required: "Salary is required" })} />
                {errors.salary && <p className="error">{errors.salary.message}</p>}
            </div>
            <button className="change" type="submit">Save Changes</button>
        </form>
    </>
}

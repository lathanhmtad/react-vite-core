import { useEffect, useState } from "react"
import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { fetchAllUserApi } from "../services/apiService"

const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([])

    useEffect(() => {
        console.log(">> run useEffect")
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUserApi()
        setDataUsers(res.data)
    }

    // lift-up state
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser}/>
            <UserTable
                dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage
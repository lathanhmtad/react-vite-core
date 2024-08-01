import { useEffect, useState } from "react"
import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { fetchAllUserApi } from "../services/apiService"

const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(2)
    const [total, setTotal] = useState(0)

    // empty array => run once
    // not empty => next value !== prev value
    useEffect(() => {
        // console.log(">> run useEffect")
        loadUser()
    }, [current, pageSize])

    const loadUser = async () => {
        const res = await fetchAllUserApi(current, pageSize)
        if (res.data) {
            setDataUsers(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }
    }

    // lift-up state
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                current={current}
                pageSize={pageSize}
                total={total}
                loadUser={loadUser}
                dataUsers={dataUsers} 
                setCurrent={setCurrent}
                setPageSize={setPageSize}
                />
        </div>
    )
}

export default UserPage
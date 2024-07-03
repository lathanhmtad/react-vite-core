import { Space, Table, Tag } from 'antd';
import { fetchAllUserApi } from '../../services/apiService';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([])

    useEffect(() => {
        console.log(">> run useEffect")
        loadUser()
    }, [])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ]

    const loadUser = async () => {
        const res = await fetchAllUserApi()
        setDataUsers(res.data)
    }

    console.log(">>> run")

    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    return (
        <Table
            rowKey="_id"
            columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable
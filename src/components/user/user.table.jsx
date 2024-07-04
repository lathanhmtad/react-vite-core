import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Table } from 'antd'
import UpdateUserModal from './update.user.modal'
import { useState } from 'react'

const UserTable = (props) => {
    const { dataUsers } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => <a>{record._id}</a>
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: "20px" }}>
                    <EditOutlined onClick={() => {
                        setDataUpdate(record)
                        setIsModalUpdateOpen(true)
                    }} style={{ color: "orange", cursor: "pointer" }} />
                    <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
                </div>
            )
        }
    ]


    return (
        <>
            <Table
                rowKey="_id"
                columns={columns} dataSource={dataUsers} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
        </>
    )
}

export default UserTable
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { notification, Popconfirm, Table } from 'antd'
import UpdateUserModal from './update.user.modal'
import { useState } from 'react'
import ViewUserDetails from './view.user.details'
import { deleteUserApi } from '../../services/apiService'

const UserTable = (props) => {
    const { dataUsers, loadUser } = props

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)

    const [dataDetails, setDataDetails] = useState(null)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)

    const handleDeleteUser = async (id) => {
        const res = await deleteUserApi(id)
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xóa user thành công"
            })
            await loadUser()
        }
        else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => <a
                onClick={() => {
                    setIsDetailsOpen(true)
                    setDataDetails(record)
                }}>
                {record._id}
            </a>
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

                    <Popconfirm
                        title="Xóa người dùng"
                        description="Bạn chắc chắc xóa user này ?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
                    </Popconfirm>

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
                loadUser={loadUser}
                setDataUpdate={setDataUpdate}
            />

            <ViewUserDetails
                loadUser={loadUser}
                dataDetails={dataDetails}
                setDataDetails={setDataDetails}
                isDetailsOpen={isDetailsOpen}
                setIsDetailsOpen={setIsDetailsOpen}
            />
        </>
    )
}

export default UserTable
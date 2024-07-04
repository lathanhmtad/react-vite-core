import { Table } from 'antd'

const UserTable = (props) => {
    const {dataUsers} = props

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

    return (
        <Table
            rowKey="_id"
            columns={columns} dataSource={dataUsers} />
    )
}

export default UserTable
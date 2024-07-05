import { Input, Modal, notification } from 'antd'
import { useEffect, useState } from 'react'
import { updateUserApi } from '../../services/apiService'

const UpdateUserModal = (props) => {

    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen, setDataUpdate, dataUpdate, loadUser } = props

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])

    const handleSubmit = async () => {
        const res = await updateUserApi(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhập thành công"
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName('')
        setPhone('')
        setId('')
        setDataUpdate(null)
    }

    return (
        <Modal
            maskClosable={false}
            title="Update a User" open={isModalUpdateOpen}
            onOk={handleSubmit}
            okText={"SAVE"}
            onCancel={resetAndCloseModal}
        >
            <div style={{ display: 'flex', gap: "15px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input value={id}
                        disabled
                    />
                </div>

                <div>
                    <span>Full name</span>
                    <Input value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </div>

                <div>
                    <span>Phone Number</span>
                    <Input value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
            </div>
        </Modal>
    )
}

export default UpdateUserModal
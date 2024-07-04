import { Button, Input, Modal, notification } from 'antd'
import { useState } from 'react'
import { createUserApi } from '../../services/apiService'

const UpdateUserModal = (props) => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const {isModalUpdateOpen, setIsModalUpdateOpen, setDataUpdate, dataUpdate} = props
   
    const handleSubmit = async () => {
        const res = await createUserApi(fullName, email, password, phone)
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tạo user thành công"
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
        setEmail('')
        setPassword('')
        setPhone('')
    }

    console.log(">>>> check dataUpdate", dataUpdate)
  
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
                    <span>Full name</span>
                    <Input value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password} onChange={e => setPassword(e.target.value)} />
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
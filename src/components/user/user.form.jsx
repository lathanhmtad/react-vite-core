import { Button, Input, Modal, notification } from 'antd'
import { useState } from 'react'
import { createUserApi } from '../../services/apiService'

const UserForm = (props) => {
    const { loadUser } = props

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false)

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
        setIsModalOpen(false)
        setFullName('')
        setEmail('')
        setPassword('')
        setPhone('')
    }

    return (
        <div className='user-form' style={{ margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button onClick={() => setIsModalOpen(true)} type='primary' size='large'>Create User</Button>
            </div>

            <Modal
                maskClosable={false}
                title="Create User" open={isModalOpen}
                onOk={handleSubmit}
                okText={"CREATE"}
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
        </div>
    )
}

export default UserForm
import { Button, Drawer, notification } from "antd"
import { useState } from "react"
import { handleUploadFile, updateUserAvatarApi } from "../../services/apiService"

const ViewUserDetails = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const {
        dataDetails,
        setDataDetails,
        isDetailsOpen,
        setIsDetailsOpen,
        loadUser
    } = props

    const handleOnChangeFile = e => {
        console.log("check even ", e)
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
        }

        const file = e.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleUpdateUserAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar")

        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded
            const resUpdateAvatar = await updateUserAvatarApi(newAvatar, dataDetails._id,
                dataDetails.fullName, dataDetails.phone)

            if (resUpdateAvatar.data) {
                setIsDetailsOpen(false)
                setSelectedFile(null)
                setPreview(null)
                await loadUser()

                notification.success({
                    message: 'Update user avatar',
                    description: 'Cập nhập avatar thành công'
                })
            } else {
                notification.error({
                    message: 'Error Update Avatar',
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }

        } else {
            notification.error({
                message: 'Error Upload file',
                description: JSON.stringify(resUpload.message)
            })
        }
    }

    return (
        <Drawer
            width="40vw"
            title="Chi tiết user"
            onClose={() => {
                setDataDetails(null)
                setIsDetailsOpen(false)
            }}
            open={isDetailsOpen}
        >
            {dataDetails ? <>
                <p>Id: {dataDetails._id}</p>
                <br />
                <p>Full name: {dataDetails.fullName}</p>
                <br />
                <p>Email: {dataDetails.email}</p>
                <br />
                <p>Phone number: {dataDetails.phone}</p>
                <br />
                <p>Avatar: </p>
                <br />
                <div style={{
                    marginTop: "10px",
                    height: "100px",
                    width: "150px",
                    border: "1px solid #ccc"
                }}>
                    <img
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetails.avatar}`} />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: 'block',
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>Upload Avatar</label>
                    <input
                        // onChange={handleOnChangeFile}
                        onChange={e => handleOnChangeFile(e)}
                        type="file" id="btnUpload" hidden />
                </div>

                {preview &&
                    <>
                        <div style={{
                            marginTop: "10px",
                            height: "100px",
                            marginBottom: "15px",
                            width: "150px",
                        }}>
                            <img
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                src={preview} />
                        </div>
                        <Button
                            onClick={() => handleUpdateUserAvatar()}
                            size="large" type="primary">Save</Button>
                    </>
                }
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>}

        </Drawer>
    )
}

export default ViewUserDetails
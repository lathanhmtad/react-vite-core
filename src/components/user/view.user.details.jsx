import { Button, Drawer } from "antd"

const ViewUserDetails = (props) => {
    const {
        dataDetails,
        setDataDetails,
        isDetailsOpen,
        setIsDetailsOpen
    } = props

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
                <div>
                    <img
                        height={100} width={150}
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
                    <input type="file" id="btnUpload" hidden />
                </div>
                {/* <Button type="primary" size="large">Upload avatar</Button> */}
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>}

        </Drawer>
    )
}

export default ViewUserDetails
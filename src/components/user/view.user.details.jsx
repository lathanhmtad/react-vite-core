import { Drawer } from "antd"

const ViewUserDetails = (props) => {
    const {
        dataDetails,
        setDataDetails,
        isDetailsOpen,
        setIsDetailsOpen
    } = props

    console.log(isDetailsOpen)

    return (
        <Drawer title="Chi tiết user"
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
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>}

        </Drawer>
    )
}

export default ViewUserDetails
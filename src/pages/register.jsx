import { Button, Input, Form } from "antd"

const RegisterPage = () => {
    const [form] = Form.useForm()

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        >

            <div style={{
                margin: "50px",
                // display: "flex",
                // gap: "15px",
                // flexDirection: "column"
            }}>
                <Form.Item
                    label="Full Name"
                    name="fullName"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name="phone"
                >
                    <Input />
                </Form.Item>
                <div>
                    <Button onClick={() => form.submit()} type="primary">Register</Button>
                </div>
            </div>
        </Form>
    )
}

export default RegisterPage
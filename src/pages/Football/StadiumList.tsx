import {
    AppstoreAddOutlined,
    DeleteFilled,
    EditFilled,
    EnvironmentFilled,
    GlobalOutlined,
    StarFilled,
} from "@ant-design/icons"
import { Stadiums } from "./IStadimList"
import { useEffect, useState } from "react"
import { IStadium } from "../../types/interfaces"
import { Button, Form, Input, InputNumber, Modal } from "antd"

const StadiumList = () => {
    const [stad, setStad] = useState<IStadium[]>([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [form] = Form.useForm()
    const [isEditMode, setIsEditMode] = useState(false)
    const [currentStadium, setCurrentStadium] = useState<IStadium | null>(null)

    const getStadium = () => {
        setStad(Stadiums)
    }

    const showModal = () => {
        setIsEditMode(false)
        form.resetFields()
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        form.resetFields()
        setIsModalOpen(false)
        setIsEditMode(false)
        setCurrentStadium(null)
    }

    const handleEditClick = (stadium: IStadium) => {
        setIsEditMode(true)
        setCurrentStadium(stadium)
        form.setFieldsValue(stadium)
        setIsModalOpen(true)
    }

    const handleDelete = (id: number) => {
        setStad(prev => prev.filter(st => st.id !== id))
    }

    const handleSubmit = (values: IStadium) => {
        if (isEditMode && currentStadium) {
            setStad(prev =>
                prev.map(st => st.id === currentStadium.id ? { ...currentStadium, ...values } : st)
            )
        } else {
            const newStadium: IStadium = {
                id: Date.now(),
                ...values,
            }
            setStad(prev => [...prev, newStadium])
        }

        form.resetFields()
        setIsModalOpen(false)
        setIsEditMode(false)
        setCurrentStadium(null)
    }

    useEffect(() => {
        getStadium()
    }, []);
    return (
        <div className="bg-[#F5F7FA]">
            <div className="container mx-auto py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <select
                            name="stadium"
                            className="text-[#8A94AD] bg-white py-1 px-4 rounded-lg outline-0"
                        >
                            <option value="1" className="rounded-lg">
                                Sort by: Best reviewed and lowest price
                            </option>
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <Button icon={<GlobalOutlined />} className="border rounded-lg">
                            Xaritada ko‘rish
                        </Button>
                        <Button
                            icon={<AppstoreAddOutlined />}
                            className="border rounded-lg"
                            onClick={showModal}
                        >
                            Qo‘shish
                        </Button>
                    </div>
                </div>

                <Modal
                    title={isEditMode ? "Edit Stadium" : "Add New Stadium"}
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                        <Form.Item
                            label="Stadium Name"
                            name="stadium_name"
                            rules={[{ required: true, message: "Enter the name of stadium!" }]}
                        >
                            <Input placeholder="Turan Stadium" />
                        </Form.Item>

                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: "Enter the address!" }]}
                        >
                            <Input placeholder="Qaraqalpaqstan, Nukus" />
                        </Form.Item>

                        <Form.Item
                            label="Picture stadium (URL)"
                            name="picture"
                            rules={[{ required: true, message: "Enter the picture URL!" }]}
                        >
                            <Input placeholder="https://picture.com/stadium.jpg" />
                        </Form.Item>

                        <div className="grid grid-cols-2 py-2 gap-4">
                            <Form.Item
                                label="Rate"
                                name="rate"
                                rules={[{ required: true, message: "Enter the rate!" }]}
                            >
                                <InputNumber min={0} max={5} step={0.1} className="w-full" />
                            </Form.Item>

                            <Form.Item
                                label="Ticket ($)"
                                name="price"
                                rules={[{ required: true, message: "Enter the ticket price!" }]}
                            >
                                <InputNumber min={0} className="w-full" />
                            </Form.Item>
                        </div>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="w-full">
                                {isEditMode ? "Save Changes" : "Add Stadium"}
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>

                <div className="py-4 grid grid-cols-4 gap-4">
                    {stad.map((item) => (
                        <div key={item.id} className="shadow hover:scale-105 duration-700 rounded-lg cursor-pointer">
                            <div className="rounded-[10px_10px_0px_0px] overflow-hidden w-full h-[140px] relative">
                                <img
                                    src={item.picture}
                                    alt={item.stadium_name}
                                    className="object-cover w-full h-full absolute z-1"
                                />
                                <div className="absolute z-2 right-2 top-2 flex gap-2">
                                    <button
                                        onClick={() => handleEditClick(item)}
                                        className="bg-orange-300 px-2 py-1 rounded-2xl hover:scale-110 duration-500 text-white"
                                    >
                                        <EditFilled />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 px-2 py-1 rounded-2xl hover:scale-110 duration-500 text-white"
                                    >
                                        <DeleteFilled />
                                    </button>
                                </div>
                            </div>
                            <div className="px-2 relative z-1">
                                <p className="py-2 px-1 text-xl font-bold text-[#31374A]">
                                    {item.stadium_name}
                                </p>
                                <p className="pb-2 px-1 text-lg font-bold text-[#31374A]">
                                    <EnvironmentFilled /> {item.address}
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="pb-2 px-1 text-lg font-bold text-[#31374A]">
                                        {item.rate} <StarFilled />
                                    </p>
                                    <p className="pb-2 px-1 text-lg font-bold text-[#31374A]">
                                        {item.price} $
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StadiumList

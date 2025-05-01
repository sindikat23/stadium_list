import { AlipayCircleOutlined, CalendarFilled, EnvironmentOutlined, HeartFilled, RocketFilled, SearchOutlined, SkinOutlined, SunOutlined, TrophyFilled, UserOutlined } from '@ant-design/icons'
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className='navbar-top bg-[#F5F7FA]'>
                <div className='container mx-auto py-4'>
                    <div className="grid grid-cols-7 items-center">
                        <div className="flex justify-between items-center col-span-4">
                            <div className='flex items-center gap-4'>
                                <img src={logo} alt="logo_ball" width={44} />
                                <p className='text-[25px] font-medium'>StreetSport</p>
                            </div>
                            <ul className="flex items-center gap-4 text-[16px] font-bold cursor-pointer">
                                <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Football</li>
                                <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Tennis</li>
                                <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Valleyboll</li>
                                <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Basketball</li>
                                <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Table Tennis</li>

                            </ul>
                        </div>
                        <div className="flex justify-end items-center gap-2 text-2xl col-span-3">
                            <SunOutlined className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                            <AlipayCircleOutlined className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                            <EnvironmentOutlined className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                            <SkinOutlined className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                            <UserOutlined className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-4'>
                <ul className="flex items-center gap-8 text-[16px] font-bold cursor-pointer">
                    <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Asosiy sahifa</li>
                    <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Arizalarim</li>
                    <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>To`lovlarim</li>
                    <li className='text-[#525B75] hover:text-[#3874FF] duration-500'>Profil</li>
                </ul>
            </div>
            <div className='bg-[#F5F7FA]'>
                <div className='container mx-auto py-6 flex justify-center gap-10'>
                    <div className="flex items-center gap-2 text-lg font-bold text-[#222834] hover:text-[#3874FF] duration-500">
                        <HeartFilled />
                        <p>Football</p>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-bold text-[#222834] hover:text-[#3874FF] duration-500">
                        <RocketFilled />
                        <p>Tennis</p>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-bold text-[#222834] hover:text-[#3874FF] duration-500">
                        <TrophyFilled />
                        <p>Baketball</p>
                    </div>
                </div>
                <div className='container mx-auto pb-6'>
                    <div className='my-bg flex items-center justify-center'>
                        <div className='bg-white flex items-center gap-50 py-6 px-10 rounded-4xl'>
                            <div className="flex items-center gap-2 text-lg font-bold text-[#8A94AD] hover:text-[#3874FF] duration-500 cursor-pointer">
                                <EnvironmentOutlined className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                                <p>Manzil kiriting</p>
                            </div>
                            <div className="flex items-center gap-2 text-lg font-bold text-[#8A94AD] hover:text-[#3874FF] duration-500 cursor-pointer">
                                <CalendarFilled className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                                <p>Sana tanlang</p>
                            </div>
                            <div className="flex items-center gap-2 text-lg font-bold text-[#8A94AD] hover:text-[#3874FF] duration-500 cursor-pointer">
                                <SearchOutlined className='hover:scale-110 hover:bg-blue-200 p-1 duration-700 bg-white rounded-4xl' />
                                <p>Qidirish</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10 ">
        <nav className="flex justify-between items-center sm:px-16 p-6 py-4">
            <Link href='/' className="flex items-center justify-center" >
                <Image
                src='/logo.svg'
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
                />

            </Link>
            <div className="flex gap-4 items-center">
              <div className="hidden md:flex gap-3 ">
              <a href="" className=" text-gray-500 hover:text-black">Services</a>            
              <a href="" className=" text-gray-500 hover:text-black">About us</a>            
              <a href="" className=" text-gray-500 hover:text-black">Help</a>            
            </div>
            <CustomButton
            title="sign in"
            btnType = "button"
            containerStyles="text-white bg-blue-500 rounded-full  min-w-[130px]"
            />
            </div>
            
        </nav>
      
    </header>
  )
}
 
export default Navbar

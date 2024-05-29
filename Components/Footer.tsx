import Image from "next/image"
import Link from "next/link"
import { footerLinks } from "../Constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
        <Image
        src="/logo.svg"
        alt="logo"
        width={118}
        height={20}
        className="object-fit"
        />
        <p className="text-base text-gray-700">CarHub <br />All the rights reserved </p>
        </div>
       <div className="footer__links">
        {footerLinks.map((link)=>(
          <div key={link.title}
          className="footer__link"
          >
            <h3 className="font-bold">{link.title}</h3>
            {link.links.map((link)=>(
              <Link href={link.url} key={link.title} className="text-gray-500">
                {link.title}

              </Link>
            ))}
          </div>
        ))}
       </div>
       

      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        
        <p>@2024 CarHub. All rights reserved</p>
        <div className="footer_copyrights-link gap-4">
          <Link href='/' className="text-gray-500">
            Privacy policy
          </Link>
          <Link href='/' className="text-gray-500">
            Terms Of Use 
          </Link>
        </div>

       </div>
    
    </footer>
  )
}

export default Footer

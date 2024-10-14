import { FaSquareXTwitter } from "react-icons/fa6"
import { SiGmail } from "react-icons/si"

const Footer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col text-[1.3rem] font-semibold gap-4 xl:flex-row xl:items-center xl:justify-evenly uppercase">
        <div>
          <p>Ribha Pandey Interiors</p>
        </div>

        <div>
          <p>Address</p>
          <p>Dwarka, New Delhi, India</p>
        </div>

        <div>
          <p>Contact Number</p>
          <p>XXXXXXXXXX</p>
        </div>

        <div>
          <p>Email-ID</p>
          <p>XXXXX@gmail.com</p>
        </div>
      </div>

      <div className="w-[90%] mx-auto h-[1px] bg-black"></div>

      <div className="flex text-[4rem] justify-center gap-4">
      <FaSquareXTwitter />
      <SiGmail color="red" enableBackground={"true"} />
      </div>
    </div>
  )
}

export default Footer
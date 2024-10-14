import { ChangeEvent, KeyboardEvent, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { TiMail } from "react-icons/ti";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const formHandler = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    console.log(formData);
  };

  const keyHandler = (
    event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitHandler();
    }
  };

  return (
    <div className="text-white text-center shadow-contact-shadow rounded-[1.75rem]">
      <h2 className="text-[3rem] text-center uppercase py-[3rem] px-2">
        Contact Form
      </h2>

      <div className="w-[80%] mx-auto flex flex-col gap-[2rem]">
        <div className="flex justify-between flex-col gap-3 xl:flex-row">
          <div className="text-[1.5rem] flex items-center gap-2 xl:w-[40%] w-full">
            <GoPersonFill />
            <p>Your Name</p>
          </div>

          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={formHandler}
            onKeyDown={keyHandler}
            className="rounded-[3.1rem] bg-[#FFFFFF12] xl:w-[55%] w-full border px-3 py-3"
          />
        </div>

        <div className="flex justify-between flex-col gap-3 xl:flex-row">
          <div className="text-[1.5rem] flex items-center gap-2 xl:w-[40%] w-full">
            <FaPhoneAlt />
            <p>Your Phone</p>
          </div>

          <input
            type="number"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={formHandler}
            onKeyDown={keyHandler}
            className="rounded-[3.1rem] bg-[#FFFFFF12] xl:w-[55%] w-full border px-3 py-3"
          />
        </div>

        <div className="flex justify-between flex-col gap-3 xl:flex-row">
          <div className="text-[1.5rem] flex items-center gap-2 xl:w-[40%] w-full">
            <TiMail fontSize={"1.9rem"} />
            <p>Your E-Mail</p>
          </div>

          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={formHandler}
            onKeyDown={keyHandler}
            className="rounded-[3.1rem] bg-[#FFFFFF12] xl:w-[55%] w-full border px-3 py-3"
          />
        </div>

        <div className="flex justify-between flex-col gap-3 xl:flex-row items-start">
          <div className="text-[1.5rem] flex items-center gap-2 xl:w-[40%] w-full">
            <AiOutlineMessage fontSize={"1.9rem"} />
            <p>Your Message</p>
          </div>
          <textarea
            name="message"
            id="message"
            rows={10}
            value={formData.message}
            onChange={formHandler}
            onKeyDown={keyHandler}
            className="resize-none rounded-[2.5rem] bg-[#FFFFFF12] xl:w-[55%] w-full border px-3 py-4"
          ></textarea>
        </div>

        <button
          className="border rounded-[1.68rem] text-[1rem] px-4 py-2 my-[3rem] self-end"
          style={{
            background:
              "linear-gradient(90deg, #191818 29.8%, #4E4A4A 80.76%, #7F7979 100%)",
            boxShadow: "-5px 7px 4px 0px #00000080",
          }}
          onClick={submitHandler}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
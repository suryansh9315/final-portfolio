import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 931 556 6594",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "suryansh.sharma9315@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Landcraft Golflinks, Pandav Nagar, Ghaziabad",
  },
];

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log("Send Message...")
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;
    try {
      if (!firstName) {
        return toast.error("Please enter a valid Firstname");
      }
      if (!email) {
        return toast.error("Please enter a valid Email");
      }
      if (!re.test(email)) {
        return toast.error("Please enter a valid Email");
      }
      if (!phone) {
        return toast.error("Please enter a valid Phone Number");
      }
      const obj = {
        name: firstName + " " + lastName,
        email,
        phone,
        service,
        message
      }
      const docRef = await addDoc(collection(db, "messages"), obj);
      console.log("Message Sent")
      console.log(docRef.id)
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setService("Web Development")
      setMessage("")
      toast.success("Success")
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong")
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="text-white py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-slate-900 rounded-xl">
              <h3 className="text-4xl text-blue-600">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur aspernatur iure molestiae ratione repellat ab.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <Select value={service} onValueChange={(e) => setService(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Android Development">
                      Android Development
                    </SelectItem>
                    <SelectItem value="UI/UX Designer">
                      UI/UX Designer
                    </SelectItem>
                    <SelectItem value="Smart Contract Development">
                      Smart Contract Development
                    </SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                    <SelectItem value="Penetraton testing">
                      Penetraton testing
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button size="md" className="max-w-40" onClick={handleSubmit}>
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li className="flex items-center gap-6" key={index}>
                  <div className="flex w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-slate-900 text-blue-600 rounded-md items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </motion.div>
  );
};

export default Contact;

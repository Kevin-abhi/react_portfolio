import { CONTACT } from "../constants";
import { delay, motion } from "framer-motion";

const Contect = () => {
  return (
    <div name="Contect" className="pb-20 border-b border-neutral-900" id="contect">
        <motion.h2
          whileInView={{ opacity: 1, y: 0}}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-4xl text-center">Get in Touch</motion.h2>
        <div className="tracking-tighter text-center">
            <motion.p
              whileInView={{ opacity: 1, x: 0}}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4">{CONTACT.address}</motion.p>
            <motion.p
               whileInView={{ opacity: 1, x: 0}}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 1 }}
              className="my-4">{CONTACT.phoneNo}</motion.p>
             <a href="mailto: mallabhishekpratap88@gmail.com" className="border-b">
                {CONTACT.email}
             </a>
        </div>  
    </div>
  );
};

export default Contect;

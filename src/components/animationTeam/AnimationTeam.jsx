import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimationTeam = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex justify-center mb-5 mt-2 w-1/2 m-auto ">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            animate={{ color: active ? "#1e40af" : "#60a5fa" }}
            transition={{ duration: 1 }}
          >
            <FontAwesomeIcon icon={faCircleUser} className="mx-2 text-xl " />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AnimationTeam;

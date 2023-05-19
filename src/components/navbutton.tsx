import { use, useState } from "react";

const NavButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButton = () => {
    setIsActive(!isActive);
  };
};

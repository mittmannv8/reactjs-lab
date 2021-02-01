import { useState } from "react";

interface SpotProps {
  row: string;
  column: number;
}

const Spot = ({ row, column }: SpotProps) => {
  const [target, setTarget] = useState(false);

  const handleClick = () => {
    console.log(row, column);
    setTarget(true);
  };
  return (
    <span
      className={`Spot ${target ? "target" : ""}`}
      onClick={handleClick}
    ></span>
  );
};

export default Spot;

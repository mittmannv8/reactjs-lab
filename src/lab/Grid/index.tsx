import { useMemo, useState } from "react";

import Row from "./Row";
import { makeGrid } from "./utils";

import "./styles.scss";

const Grid = () => {
  const [size, setSize] = useState(10);

  const grid = useMemo(() => {
    return makeGrid(size);
  }, [size]);

  return (
    <div className="Container">
      <input
        type="range"
        min="1"
        max="20"
        value={size}
        onChange={(event) => setSize(Number(event.target.value))}
      />
      <span>{size}</span>

      <div className="Grid">
        {grid.map((row, index) => (
          <Row
            key={index}
            index={index}
            items={row}
            last={index === grid.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;

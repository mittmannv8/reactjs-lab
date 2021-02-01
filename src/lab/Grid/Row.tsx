import { Fragment } from "react";
import Spot from "./Spot";
import Label from "./Label";

interface RowProps {
  index: number;
  items: number[];
  last?: boolean
}
interface SpotRowProps extends RowProps {
  spot?: boolean;
  row: string;
}

const SpotRow = ({ row, items, spot }: SpotRowProps) => {
  return (
    <div className="Row">
      <Label>{row}</Label>

      {items.map((_, idx) => (
        <Fragment key={idx}>
          {spot && <Spot key={idx} column={idx + 1} row={row} />}
          {!spot && <Label key={idx}>{idx + 1}</Label>}
        </Fragment>
      ))}

      <Label>{row}</Label>
    </div>
  );
};

const Row = ({ items, index, last }: RowProps) => {
  const row = String.fromCharCode(65 + index);

  return (
    <>
      {index == 0 && <SpotRow row="" index={index} items={items} />}
      <SpotRow row={row} index={index} items={items} spot />
      {last && <SpotRow row="" index={index} items={items} />}
    </>
  );
};

export default Row;

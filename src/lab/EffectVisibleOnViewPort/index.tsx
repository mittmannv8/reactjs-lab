import { useCallback, useState } from "react";

import "./styles.scss";

import ListItem from "./ListItem";
import { sequence } from "../../utils";

const EffectVisibleOnScrollViewPort = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [height, setHeight] = useState("200");

  const handleCardVisibility = useCallback(
    (index: number, visible: boolean) => {
      if (visible) {
        setVisibleCards(prev => [...prev.filter(i => i !== index), index]);
      } else {
        setVisibleCards(prev => prev.filter(i => i !== index));
      }
    },
    []
  );

  return (
    <div className="EffectVisibleOnViewPort">
      <h2>Visible Cards: {visibleCards.join(", ")}</h2>

      <span>Viewport height: {`${height}px`}</span>
      <input
        type="range"
        min="200"
        max="600"
        value={height}
        step="10"
        onChange={event => setHeight(event.target.value)}
      />

      <div className="list" style={{ height: `${height}px` }}>
        {sequence(20).map(seqIdx => (
          <ListItem
            key={seqIdx}
            index={seqIdx}
            setVisible={handleCardVisibility}
          />
        ))}
      </div>
    </div>
  );
};

export default EffectVisibleOnScrollViewPort;

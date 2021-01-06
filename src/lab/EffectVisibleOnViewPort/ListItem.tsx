import { useCallback, useEffect, useRef, useState } from "react";

interface ListItemProps {
  index: number;
  setVisible: (index: number, visible: boolean) => void;
}

const ListItem = ({ index, setVisible }: ListItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {}, [setVisible, index]);

  // This method checks if the component is visible from its parent
  // element perspective
  const checkElementVisibility = useCallback(() => {
    const { current } = ref;
    const { bottom, top } = current?.getBoundingClientRect() ?? ({} as DOMRect);
    const { bottom: parentBottom, top: parentTop } =
      current?.parentElement?.getBoundingClientRect() ?? ({} as DOMRect);
    const visible = bottom > parentTop && top < parentBottom;

    setIsVisible(visible);
    setVisible(index, visible);
  }, [index, setVisible]);

  useEffect(() => {
    if (ref.current?.parentElement) {
      ref.current.parentElement.addEventListener(
        "scroll",
        checkElementVisibility
      );

      return () => {
        window.removeEventListener("scroll", checkElementVisibility);
      };
    }
  }, [checkElementVisibility, ref?.current?.parentElement]);

  return (
    <div ref={ref} className={`list-item ${isVisible ? "visible" : ""}`}>
      <span className="index">{index}</span>
    </div>
  );
};

export default ListItem;

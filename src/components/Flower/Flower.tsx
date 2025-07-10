import "./Flower.css";

interface Props {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  size?: "small" | "normal";
}

const Flower = (props: Props) => {
  const { left, top, right, bottom, size } = props;
  return (
    <div
      style={{
        position: "absolute",
        left: left,
        top: top,
        right: right,
        bottom: bottom,
      }}
    >
      <div className={size === "small" ? "small-flower" : "flower"} />
    </div>
  );
};

export default Flower;

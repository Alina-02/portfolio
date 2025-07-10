import "./techchip.css";

interface Props {
  color: string;
  name: string;
  textColor?: string;
}

const TechChip = (props: Props) => {
  const { color, name, textColor } = props;
  return (
    <div
      className="chip"
      style={{
        backgroundColor: `${color}`,
        color: textColor ? textColor : "white",
      }}
    >
      {name}
    </div>
  );
};

export default TechChip;

import { styles } from "../../utils/styles";
import "../../styles/contactme.css";

interface Props {
  style: number;
  iconLink: string;
  webLink?: string;
  text: string;
  reverse?: boolean;
}

const ContactMeElement = (props: Props) => {
  const { style, iconLink, webLink, text, reverse } = props;

  return (
    <div
      className="contact-me-element"
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      <img
        src={iconLink}
        style={{
          width: "35px",
          height: "35px",
          filter:
            styles[style]?.sectionsTextColor === "black"
              ? ""
              : `${styles[style]?.iconstFilter}`,
        }}
      />

      {webLink ? (
        <a
          className="a-contact"
          target="_blank"
          href={webLink ? webLink : "None"}
          style={{ color: styles[style]?.sectionsTextColor }}
        >
          {text}
        </a>
      ) : (
        <p className="p-contact">{text}</p>
      )}
    </div>
  );
};

export default ContactMeElement;

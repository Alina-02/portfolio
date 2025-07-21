import { useState } from "react";
import emailjs from "emailjs-com";
import "./contactemail.css"; // Make sure this CSS file exists
import { styles } from "../../utils/styles";
import { useTranslation } from "react-i18next";

interface Props {
  style: number;
}

export default function ContactEmail(props: Props) {
  const { style } = props;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const { t } = useTranslation();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus(t("send_email.success"));
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus(t("send_email.error"));
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2
        style={{
          fontFamily: `${styles[style]?.font}`,
          fontSize: styles[style]?.h2FontSize,
        }}
      >
        {t("send_email.title")}
      </h2>
      <p> {t("send_email.text")}</p>
      <input
        name="name"
        placeholder={t("send_email.name")}
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder={t("send_email.email")}
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={t("send_email.message")}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        style={{
          background: `${styles[style]?.reverseBackground}`,
          color: `${styles[style]?.sectionsTextColor}`,
        }}
      >
        {t("send_email.send")}
      </button>
      <p className="status">{status}</p>
    </form>
  );
}

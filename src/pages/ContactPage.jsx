import "../styles/contact.css";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    user_message: "",
  });
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const body = document.body;
    if (!status) return;
    body.classList.add("success-open");

    return () => {
      body.classList.remove("success-open");
    };
  }, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS Template ID
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", user_email: "", user_message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
        formRef.current.reset();

        setTimeout(() => {
          setStatus("");
        }, 2000);
      });
  };

  return (
    <>
      {/* Success dialog */}
      {status && (
        <div
          style={{
            position: "fixed",
            top: "50px",
            right: "50px",
            zIndex: "200",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            transform: "translateX(200%)",
            transition: "200ms ease",
          }}
          className="success"
        >
          <i className="fa-regular fa-circle-check success__icon"></i>
          <div className="success__text">
            <span className="success__text__title">Message sent!</span>
            <p className="success__text__para">
              {status}
              Your message has been received. get back to you soon!
            </p>
          </div>
        </div>
      )}

      <section id="contact" className="contact">
        <div style={{ padding: "12px 18px" }} className="container">
          <div className="row contact__row">
            <div className="contact__description">
              <h2 className="contact__title">Contact</h2>
              <h3 className="contact__subtitle">
                Ready to build something great?
              </h3>
              <p className="contact__para">
                If you have any oppurtunities, ideas or questions you want to
                throw my way, don't hesitate to message me!
              </p>
              <a href="mailto:kdhillon469@gmail.com" className="contact__link">
                <i className="fa-solid fa-envelope"></i>
                <span>kdhillon469@gmail.com</span>
              </a>
            </div>
            <form
              className="contact__form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="form__item">
                <label className="form__item__label">Name</label>
                <input
                  type="text"
                  name="from_name"
                  defaultValue={formData.from_name}
                  required
                  onChange={handleChange}
                  className="form__item__input"
                />
              </div>
              <div className="form__item">
                <label className="form__item__label">Email</label>
                <input
                  type="email"
                  name="user_email"
                  defaultValue={formData.user_email}
                  required
                  onChange={handleChange}
                  className="form__item__input"
                />
              </div>
              <div className="form__item">
                <label className="form__item__label">Message</label>
                <textarea
                  required
                  name="user_message"
                  defaultValue={formData.user_message}
                  onChange={handleChange}
                  className="form__item__textarea"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  opacity: loading ? 0.5 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                  color: loading ? "gray" : "green",
                  border: loading ? "1px gray solid" : "1px transparent solid",
                }}
                className="contact__form__submit"
              >
                Send
                {loading && (
                  <i className="fa-solid fa-spinner contact__form__loading__icon"></i>
                )}
              </button>
              {status && <p className="contact__status">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

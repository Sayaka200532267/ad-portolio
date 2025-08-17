import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Alert, Container } from "react-bootstrap";
import "../App.css";

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xwpqykbw");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (state.succeeded) {
      setStatus("送信が完了しました。ありがとうございます！");
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      setStatus("送信に失敗しました。内容をご確認ください。");
    } else {
      setStatus("");
    }
  }, [state]);

  return (
    <Container className="d-flex justify-content-center">
      <div className="contact-form-container">
        <h3>お問い合わせ</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">お名前</label>
            <input type="text" name="name" id="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">メールアドレス</label>
            <input type="email" name="email" id="email" className="form-control" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">お問い合わせ内容</label>
            <textarea name="message" id="message" className="form-control" rows={5} required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button
            variant="primary"
            type="submit"
            disabled={state.submitting}
            style={{ fontSize: "1rem", padding: "0.6rem 2rem" }}
          >
            送信
          </Button>
          {status && (
            <Alert variant={status.includes("完了") ? "success" : "danger"} className="mt-3">
              {status}
            </Alert>
          )}
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;

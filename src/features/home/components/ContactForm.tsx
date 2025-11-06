import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_2sn19nq",
        "template_9sd14z2",
        formRef.current,
        "NY2BGrIe7N8kw1t-R"
      )
      .then(
        () => {
          alert("✅ Thank you for reaching out! I’ll get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("❌ Something went wrong. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 shadow-lg px-10 py-5 rounded-lg bg-[#f6efdd]"
    >
      {/* Name */}{" "}
      <div>
        {" "}
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {" "}
          Name{" "}
        </label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border-2 border-[#ffad1b] text-black focus:outline-none"
        />{" "}
      </div>{" "}
      {/* Email */}{" "}
      <div>
        {" "}
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {" "}
          Email{" "}
        </label>{" "}
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full md:w-100 px-4 py-2 rounded-lg border-2 border-[#ffad1b] text-black focus:outline-none"
        />{" "}
      </div>{" "}
      {/* Message */}{" "}
      <div>
        {" "}
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {" "}
          Message{" "}
        </label>{" "}
        <textarea
          id="message"
          name="message"
          placeholder="Hi Pranita, I’d like to talk about..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border-2 border-[#ffad1b] text-black focus:outline-none"
        ></textarea>{" "}
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSending}
        className="bg-[#ffad1b] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#e69a18] transition disabled:opacity-50"
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

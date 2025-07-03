import { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({});

  interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  message: "",
});

const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const tempErrors: FormErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Please enter your name.";
    if (!formData.email.trim()) tempErrors.email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) tempErrors.message = "Please enter your message.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.id]: e.target.value });
  //   setErrors({ ...errors, [e.target.id]: "" }); // remove error while typing
  // };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      swal("Oops!", "Please fill all the fields correctly.", "warning");
      return;
    }

    const now = new Date().toLocaleString();
    const formDataWithTime = { ...formData, time: now };

   const serviceID = "service_9vn80ye";     // Replace with your EmailJS service ID
    const templateID = "template_81mvlsb";   // Replace with your EmailJS template ID
    const userID = "lohGSHT7KuJdX8n7P";   

    emailjs.send(serviceID, templateID, formDataWithTime, userID).then(
      () => {
        swal("Success!", "Your message has been sent.", "success");
        setFormData({ name: "", email: "", message: "" }); // clear form
        setErrors({}); // clear errors
      },
      (err) => {
        swal("Error", "Failed to send the message. Please try again.", "error");
        console.error("EmailJS error:", err);
      }
    );
  };

  return (
    <section
      id="contact"
      className="bg-transparent h-screen py-10 px-6 sm:px-10 lg:px-24 text-gray-800"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#00BFA6]">Get in Touch</h2>
        <p className="text-white mb-8 text-lg max-w-xl mx-auto">
          Have a project or question? We’re here to help. Send us a message and we’ll get back to you soon!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-white font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`w-full p-3 rounded-lg border ${
                errors.name ? "border-red-500" : "border-white"
              } bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-white font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full p-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-white"
              } bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-white font-semibold">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`w-full p-3 rounded-lg border ${
                errors.message ? "border-red-500" : "border-white"
              } bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#00BFA6]`}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00BFA6] text-white font-bold py-3 rounded-lg hover:bg-[#00a590] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquareDot, Phone, User } from "lucide-react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Reset error when user starts typing
    if (name === "name") setNameError(null);
    if (name === "email") setEmailError(null);
    if (name === "phone") setPhoneError(null);
    if (name === "message") setMessageError(null);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name" && value.trim() === "") {
      setNameError("Name is required");
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(!emailPattern.test(value) ? "Invalid email format" : null);
    }

    if (name === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      setPhoneError(
        !phonePattern.test(value) ? "Phone number must be 10 digits" : null
      );
    }

    if (name === "message" && value.trim() === "") {
      setMessageError("Message is required");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name) setNameError("Name is required.");
    if (!formData.email) setEmailError("Email is required.");
    if (!formData.phone) setPhoneError("Phone number is required.");
    if (!formData.message) setMessageError("Message is required.");

    if (nameError || emailError || phoneError || messageError) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/submit-contact-us`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success(
          "Thanks for contacting us. We will get back to you soon."
        );
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(result.message || "Data could not be submitted.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-h-svh overflow-auto">
      <ToastContainer
        autoClose={4000}
        toastClassName="w-[340px] text-sm mx-auto"
      />

      <div className="relative w-full overflow-hidden lg:mt-0 mt-3  lg:rounded-0">
        <div className="image-full">
          <Image
            src="/images/modal/lets-talk-3.jpg"
            alt="Contact Image"
            fill
            className="inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-[0px_0px_20px_rgba(0,255,255,0.7)]"
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-left justify-end p-6 font-dmSans">
          <h2 className="text-2xl font-bold text-[#101860] tracking-wide">
            LET’S TALK
          </h2>
          <p className="text-[#f3841b] text-sm mt-1">
            Ask us anything or just say hi…
          </p>
        </div>
      </div>
      <div className="px-6">
        <form onSubmit={handleSubmit} className="w-full my-2 font-dmSans">
          {/* Name Field */}
          <div className="relative mb-2">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pr-10 p-1 border-b-2 peer pt-6 bg-transparent focus:outline-none hover:bg-blue-50 transition-all duration-300 ${
                nameError
                  ? "border-red-500"
                  : "border-gray-400 focus:border-[#101860]"
              }`}
              required
            />
            <label
              htmlFor="name"
              className={`absolute left-0 transition-all duration-300 ${
                formData.name
                  ? "top-1 text-[#101860] text-sm"
                  : "top-3 text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[#101860] peer-focus:text-sm"
              }`}
            >
              Name
            </label>
            <User className="absolute right-3 top-3 text-gray-500" size={18} />
            {nameError && (
              <span className="text-red-500 text-sm mt-1">{nameError}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="relative mb-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full pr-10 p-1 border-b-2 peer pt-6 bg-transparent focus:outline-none hover:bg-blue-50 transition-all duration-300 ${
                emailError
                  ? "border-red-500"
                  : "border-gray-400 focus:border-[#101860]"
              }`}
              required
            />
            <label
              htmlFor="email"
              className={`absolute left-0 transition-all duration-300 ${
                formData.email
                  ? "top-1 text-[#101860] text-sm"
                  : "top-3 text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[#101860] peer-focus:text-sm"
              }`}
            >
              Email
            </label>
            <Mail className="absolute right-3 top-3 text-gray-500" size={18} />
            {emailError && (
              <span className="text-red-500 text-sm mt-1">{emailError}</span>
            )}
          </div>

          {/* Phone Field */}
          <div className="relative mb-2">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                let val = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData({ ...formData, phone: val });
              }}
              onBlur={handleBlur}
              className={`w-full pr-10 p-1 border-b-2 peer pt-6 bg-transparent focus:outline-none hover:bg-blue-50 transition-all duration-300 ${
                phoneError
                  ? "border-red-500"
                  : "border-gray-400 focus:border-[#101860]"
              }`}
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />
            <label
              htmlFor="phone"
              className={`absolute left-0 transition-all duration-300 ${
                formData.phone
                  ? "top-1 text-[#101860] text-sm"
                  : "top-3 text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[#101860] peer-focus:text-sm"
              }`}
            >
              Phone No
            </label>
            <Phone className="absolute right-3 top-3 text-gray-500" size={18} />
            {phoneError && (
              <span className="text-red-500 text-sm mt-1">{phoneError}</span>
            )}
          </div>

          {/* Message Field */}
          <div className="relative">
            <div className="bg-transparent focus:outline-none hover:bg-blue-50 transition-all duration-300">
              <div className="mb-2">
                <label
                  htmlFor="message"
                  className={`relative left-0 transition-all duration-300 ${
                    formData.message
                      ? "top-1 text-[#101860] text-sm"
                      : "top-3 text-gray-500 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-[#101860] peer-focus:text-sm"
                  }`}
                >
                  Message
                </label>
                <MessageSquareDot
                  className="absolute right-3 top-3 text-gray-500"
                  size={18}
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => {
                  // Allow only letters, spaces, and basic punctuation
                  const val = e.target.value.replace(/[^A-Za-z\s.,!?]/g, "");
                  setFormData({ ...formData, message: val });
                }}
                onBlur={handleBlur}
                className={`w-full pr-10 p-1 min-h-20 border-b-2 peer pt-1 bg-transparent focus:outline-none hover:bg-blue-50 transition-all duration-300 ${
                  messageError
                    ? "border-red-500"
                    : "border-gray-400 focus:border-[#101860]"
                }`}
                rows={2}
                required
              />
            </div>
            {messageError && (
              <span className="text-red-500 text-sm mt-1">{messageError}</span>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold my-2 lg:my-4 rounded transition duration-200"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>

      </div>
    </div>
  );
};

export default ContactSection;

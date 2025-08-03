import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Contact Form Submitted:", formData);

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/251910120891", "_blank");
  };

  const openTelegram = () => {
    window.open("https://t.me/+251910120891", "_blank");
  };

  const sendEmail = () => {
    window.open("mailto:millionmesi106@gmail.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-80 h-80 bg-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-brand drop-shadow-lg">Us</span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-brand to-#a8b829 mx-auto mb-6 rounded-full"></div>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to join us? We'd love to hear from you. Send us a message
              and let's start lighting .
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-12">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col">
              {/* Contact Form - First */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="text-xl mr-3">📝</span>
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-brand font-semibold mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-brand font-semibold mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition-all duration-300"
                      placeholder="+251 911 123 456"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-brand font-semibold mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-brand font-semibold mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your interest in Light It, questions about our programs, or how we can work together..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-brand to-#a8b829 text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-brand/30 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    {!isSubmitting && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    )}
                  </button>

                  {/* Success Message */}
                  {showSuccess && (
                    <div className="p-4 bg-brand/10 border border-brand/30 rounded-xl animate-pulse">
                      <div className="flex items-center space-x-3">
                        <div className="text-brand text-2xl">✅</div>
                        <div>
                          <h4 className="text-brand font-semibold">
                            Message Sent Successfully!
                          </h4>
                          <p className="text-gray-300 text-sm">
                            Thank you for reaching out. We'll get back to you
                            within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          {/* Contact Information - Second */}
          <div className="flex flex-col mt-4 items-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-8 w-full">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center justify-center">
                <span className="text-xl mr-3">💬</span>
                Contact Us Directly
              </h2>
              <p className="text-gray-300 leading-relaxed text-center mb-8">
                Prefer to reach out directly? Use any of these methods to
                connect with Million and the Light It team.
              </p>
              {/* Contact Methods - horizontal layout */}
              <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                {/* Email */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand/10 rounded-xl flex items-center justify-center border border-brand/30 mb-2">
                    <svg
                      className="w-6 h-6 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-brand font-semibold text-lg">Email Us</h3>
                  <button
                    onClick={sendEmail}
                    className="text-gray-300 hover:text-brand transition-colors duration-300 underline"
                  >
                    millionmesi106@gmail.com
                  </button>
                </div>
                {/* Phone/WhatsApp/Telegram */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand/10 rounded-xl flex items-center justify-center border border-brand/30 mb-2">
                    <svg
                      className="w-6 h-6 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="text-brand font-semibold text-lg">
                    Call Us / WhatsApp / Telegram
                  </h3>
                  <p className="text-gray-300">0910120891</p>
                  <div className="flex gap-3 mt-2 justify-center">
                    <button
                      onClick={openWhatsApp}
                      className="text-green-400 hover:text-green-300 text-sm underline"
                    >
                      WhatsApp
                    </button>
                    <button
                      onClick={openTelegram}
                      className="text-blue-400 hover:text-blue-300 text-sm underline"
                    >
                      Telegram
                    </button>
                  </div>
                </div>
                {/* Visit Us */}
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand/10 rounded-xl flex items-center justify-center border border-brand/30 mb-2">
                    <svg
                      className="w-6 h-6 text-brand"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-brand font-semibold text-lg">Visit Us</h3>
                  <p className="text-gray-300">Jimma, Oromia, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

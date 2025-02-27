import Header from '@/components/Header';
import Footer from '@/sections/Footer';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <>
    <Header lgScreen="w-full" />
    <section className="min-h-screen bg-[#0e291a] pb-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl  text-[#cc9a64] sm:text-5xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg font-athena text-gray-300">
            We’re here to help you find your dream home. Reach out to us for any inquiries or
            assistance.
          </p>
        </div>

        {/* Grid Layout for Form and About Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Contacting Section */}
          <div className="bg-[#1a3a2a] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#cc9a64]">
              Why Contact Us?
            </h3>
            <p className="mt-4 text-gray-300">
              Our team of real estate experts is dedicated to providing you with the best service.
              Whether you’re looking to buy, sell, or rent, we’re here to guide you every step of the way.
            </p>
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-[#cc9a64]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-300">Email Us</p>
                  <p className="text-gray-400">info@realestate.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-[#cc9a64]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-300">Call Us</p>
                  <p className="text-gray-400">+1 (123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a3a2a] p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 bg-[#0e291a] border border-gray-600 rounded-md text-gray-300 focus:ring-[#cc9a64] focus:border-[#cc9a64] hover:border-[#cc9a64] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 bg-[#0e291a] border border-gray-600 rounded-md text-gray-300 focus:ring-[#cc9a64] focus:border-[#cc9a64] hover:border-[#cc9a64] transition-colors"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 bg-[#0e291a] border border-gray-600 rounded-md text-gray-300 focus:ring-[#cc9a64] focus:border-[#cc9a64] hover:border-[#cc9a64] transition-colors"
                    placeholder="Your message..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-[#cc9a64] text-[#0e291a] font-semibold rounded-md hover:bg-[#b88653] transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactUs;
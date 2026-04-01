import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-dark overflow-hidden">
      <Navbar />

      {/* Dark Header Section */}
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-black text-white text-center relative z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none -z-10"></div>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Get in Touch</h1>
        <p className="text-white/70 max-w-2xl text-lg mx-auto">
          We'd love to hear from you. Reach out for reservations, private events, or just to say hello.
        </p>
      </div>

      {/* Light Content Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[50vh]">
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="flex-1 space-y-8">
            <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
              <h3 className="text-3xl font-serif text-dark mb-8">Visit Us</h3>
              <div className="space-y-6 text-dark/70 text-lg">
                <p><strong className="text-dark block mb-1">Address:</strong>Brainware University 2nd Gate<br />Barasat, Jessore road,700125</p>
                <div className="w-12 h-[1px] bg-primary/20"></div>
                <p><strong className="text-dark block mb-1">Hours:</strong>Mon-Fri: 7am - 8pm<br />Sat-Sun: 8am - 9pm</p>
                <div className="w-12 h-[1px] bg-primary/20"></div>
                <p><strong className="text-dark block mb-1">Contact:</strong>(310) 555-0199<br />hello@cafeluxe.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-[1.5]">
            <form className="bg-white border border-gray-100 p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-2">First Name</label>
                  <input type="text" className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Email Address</label>
                <input type="email" className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark/70 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-background border border-gray-200 rounded-xl px-4 py-3.5 text-dark focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-dark text-white hover:bg-primary px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-[0_4px_14px_0_rgba(255,91,34,0.39)] active:scale-95 text-lg mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="mt-16 w-full max-w-5xl mx-auto h-[450px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
          <iframe
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146989.29194675942!2d88.38436240684271!3d22.688664292243484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8990018010def%3A0x90f9c3ff3e420288!2sMafia%20Cafe!5e0!3m2!1sen!2sin!4v1774984802333!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

// import Header2 from '../ui/Header2';
import { useScreenSize } from '../contexts/ScreenSize';
import Animation from '../utils/Animation';
import {
  FaAddressBook,
  FaEnvelope,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';
import StyleTitle from '../ui/StyleTitle';

// const primaryFull =
//   'inline-block text-sm bg-colorBrand font-semibold uppercase tracking-wide text-colorGrey50 transition-colors duration-300 hover:bg-colorBrand focus:bg-colorBrand focus:outline-none focus:ring focus:ring-colorBrand focus:ring-offset-2 disabled:cursor-not-allowed w-full rounded-none px-4 py-3 md:px-6 md:py-4 md:text-lg';

function Contact() {
  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/contact-us-mobile.png'
    : 'assets/contact-us.png';

  return (
    <main className="container mx-auto min-h-[70vh] px-3 py-5 md:px-0">
      <StyleTitle title="Contact" />

      <div className="grid grid-cols-1 gap-10 text-colorGrey50 md:grid-cols-2">
        {/* Contact Form */}
        {/* <Animation type="2">
            <form className="space-y-4">
              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border p-2"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border p-2"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full rounded border p-2"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <Button
                type="primary"
                className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2"
              >
                Submit
              </Button>
            </form>

            <form
              action="https://formsubmit.io/send/probrandhandler@qualityservice.com"
              method="POST"
            >
              <div>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Email Message from Probrandhandlers!"
                />
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://sam-dare.netlify.app/thankyou.html"
                />

                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mb-2 w-full rounded border p-2"
                  placeholder="Full Name"
                  required
                />
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full rounded border p-2"
                  required
                />
              </div>
              <label
                className="mb-2 mt-2 block text-sm font-semibold"
                htmlFor="message"
              >
                Your Message
              </label>
              <textarea
                rows="4"
                name="message"
                className="w-full rounded border p-2"
                placeholder="Type your message here..."
                required
              ></textarea>

              <input
                name="_formsubmit_id"
                type="text"
                style={{ display: 'none' }}
              />

              <input type="submit" value="Submit" className={primaryFull} />
            </form>
          </Animation> */}

        {/* Contact Information */}
        <Animation type="3">
          <p className="mb-2 flex gap-3">
            <i className="mt-1 text-colorBrand2">
              <FaEnvelope />
            </i>
            <span className="font-semibold">Email:</span>{' '}
            <a href="mailto:probrandhandlers@qualityservice.com">
              ae.ogunleke@gmail.com
            </a>
          </p>
          <p className="mb-2 flex gap-3">
            <i className="mt-1 text-colorBrand2">
              <FaPhone />
            </i>
            <span className="font-semibold">Phone:</span>{' '}
            <a href="tel:+2348154005211">+15735407906</a>
          </p>
          <p className="mb-2 flex gap-3">
            <i className="mt-1 text-colorBrand2">
              <FaWhatsapp />
            </i>
            <span className="font-semibold">WhatsApp:</span>{' '}
            <a href="#">+15735407906</a>
          </p>
          <p className="mb-2 flex gap-3">
            <i className="mt-1 text-colorBrand2">
              <FaMapMarkerAlt />{' '}
            </i>
            <span className="font-semibold">Address:</span> 1133 Ashland Rd,
            Columbia, MO., USA
          </p>
        </Animation>
      </div>
    </main>
  );
}

export default Contact;

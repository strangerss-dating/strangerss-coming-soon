import { useState } from 'react';
import logo from './assets/logo.svg'
import "tailwindcss/index.css"


function App() {
  const [email, setEmail] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', { email, acceptedPrivacy });
    // Add your submission logic here
  };

  return (
    <div className="akshar-400-normal bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
      <main className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <header className="text-center">
          <h1 className="text-4xl font-bold">
            <img className="mx-auto w-96" src={logo} alt="strangerss dating app logo" />
            <span className="sr-only">strangerss - dating app</span>
          </h1>
          <p className="mt-2 text-gray-400 text-4xl" role="doc-subtitle">date you #offline</p>
        </header>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="mt-12 space-y-6" aria-labelledby="form-heading">
          <h2 id="form-heading" className="sr-only">Newsletter Signup</h2>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm"
                placeholder="e.g. john.smith@email.com"
              />
            </div>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                checked={acceptedPrivacy}
                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                className="h-4 w-4 border-gray-700 rounded bg-black accent-white focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="ml-3 text-sm">
              {/* TODO: add Privacy Policy page and fix text */}
              <label htmlFor="privacy" className="font-medium text-gray-300">
                I agree to the <a href="#" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">Privacy Policy</a> and consent to receiving marketing emails
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="uppercase group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Be notified
            </button>
          </div>
        </form>

        {/* Social Media Icons */}
        <nav className="flex justify-center space-x-6 pt-8" aria-label="Social media">
          {/* Facebook */}
          {/* TODO: add Facebook */}
          <a
            href="#"
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black p-1 rounded-full"
            aria-label="Visit our Facebook page"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/strangerssdating"
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black p-1 rounded-full"
            aria-label="Visit our Instagram page"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>

          {/* Twitter/X */}
          {/* TODO: add Twitter */}
          <a
            href="#"
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black p-1 rounded-full"
            aria-label="Visit our Twitter/X page"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* TODO: add contact form */}
        </nav>

        {/* Footer with Links */}
        <footer className="mt-8 text-center space-y-4" role="contentinfo">
          <nav className="text-sm space-x-4" aria-label="Legal">
            {/* TODO: add Privacy Policy */}
            <a href="#" className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black p-1 rounded">Privacy Policy</a>
            <span className="text-gray-600" aria-hidden="true">|</span>
            {/* TODO: add Cookie Policy */}
            <a href="#" className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black p-1 rounded">Cookie Policy</a>
          </nav>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} strangerss™. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App

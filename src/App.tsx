import { useEffect, useState } from 'react';
import "tailwindcss/index.css"
import { Link, useSearchParams } from 'react-router';
import { logEvent } from 'firebase/analytics';
import { doc, setDoc } from 'firebase/firestore';
import { analytics, db } from './firebase';


function App() {
  const [email, setEmail] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const utmSource = searchParams.get('utm_source');
    const utmMedium = searchParams.get('utm_medium');
    const utmCampaign = searchParams.get('utm_campaign');
    const utmId = searchParams.get('utm_id');
    const isQRCodeVisit =
      utmSource === 'print' &&
      utmMedium === 'qr_code' &&
      utmCampaign === 'coming_soon' &&
      utmId === '0';

    if (isQRCodeVisit) {
      logEvent(analytics, 'qr_code_visit', {
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_id: utmId,
        landing_page: window.location.pathname,
        timestamp: new Date().toISOString()
      });
      setSearchParams({});
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !acceptedPrivacy) {
      logEvent(analytics, 'waitlist_validation_error', {
        error_type: !email ? 'missing_email' : 'missing_privacy_acceptance',
        timestamp: new Date().toISOString()
      });
      setIsError(true);
      setPopupMessage('Please enter your email and accept the privacy policy');
      setShowPopup(true);
      return;
    }

    const request = {
      email,
      acceptedPrivacy,
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      userAgent: navigator.userAgent,
      language: navigator.language,
      lanugages: navigator.languages,
    }

    setIsSubmitting(true);
    try {
      logEvent(analytics, 'waitlist_join_attempt', {
        timestamp: new Date().toISOString()
      });

      await setDoc(doc(db, "users", email), request);

      logEvent(analytics, 'waitlist_join_success', {
        timestamp: new Date().toISOString()
      });

      setIsError(false);
      setPopupMessage(`Welcome to our waitlist!

We'll notify you as soon as our app launches. 
To stay updated, follow us on social media. 
Need to unsubscribe? Simply reach out to us on any of our social channels.`);
      setEmail('');
      setAcceptedPrivacy(false);
      setShowPopup(true);
    } catch (e) {
      logEvent(analytics, 'waitlist_join_error', {
        error_message: (e as Error)?.message || 'Unknown error',
        timestamp: new Date().toISOString()
      });
      setIsError(true);
      setPopupMessage('Something went wrong. Please try again later.');
      setShowPopup(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black border border-gray-700 rounded-lg p-6 max-w-sm w-full mx-4">
            <div className={`text-center mb-4 ${isError ? 'text-red-500' : 'text-green-500'}`}>
              {isError ? (
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <p className="text-lg font-semibold text-white whitespace-pre-line">{popupMessage}</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-white text-black rounded-md py-2 px-4 hover:bg-gray-200 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}

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
              placeholder="e.g. john.smith@email.com" />
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
              className="h-5 w-5 rounded bg-white border-gray-700 checked:bg-white checked:text-black focus:ring-2 focus:ring-white appearance-none relative before:content-['✓'] before:hidden checked:before:block before:absolute before:text-black before:font-sans before:text-lg before:top-[-2px] before:left-[2px]" />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacy" className="font-medium text-gray-300">
              I agree to the <Link target='_blank' to="/privacy" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">Privacy Policy</Link> and consent to receiving marketing emails and communications about our app
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`uppercase group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Be notified'}
          </button>
        </div>
      </form>
    </>
  );
}

export default App

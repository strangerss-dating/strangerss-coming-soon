import { ReactNode, useState, useEffect } from "react";
import RainingLogo from "../raining-logo.component";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";
import { Link } from "react-router";

export const PageWrapperComponent = ({ children }: { children: ReactNode}) => {
    const [showCookieBanner, setShowCookieBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowCookieBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setShowCookieBanner(false);
    };

    return (
        <>
            <RainingLogo />

            <div className="akshar-400-normal bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
                <main className="max-w-md w-full space-y-8 rounded-md p-4 bg-black relative z-2 shadow-[0_0_50px_20px_rgba(0,0,0,1)]">
                    <HeaderComponent></HeaderComponent>

                    {children}

                    <FooterComponent></FooterComponent>
                </main>
            </div>

            {showCookieBanner && (
                <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 p-4 z-50">
                    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-sm text-gray-300">
                            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. Learn more in our{' '}
                            <Link to="/cookie" className="underline hover:text-white">Cookie Policy</Link>.
                        </div>
                        <button
                            onClick={acceptCookies}
                            className="whitespace-nowrap bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm"
                        >
                            Accept Cookies
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
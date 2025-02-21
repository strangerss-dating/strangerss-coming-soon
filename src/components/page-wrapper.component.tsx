import { ReactNode } from "react";
import RainingLogo from "../raining-logo.component";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";

export const PageWrapperComponent = ({ children }: { children: ReactNode}) => (
    <>
    <RainingLogo />

    <div className="akshar-400-normal bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
        <main className="max-w-md w-full space-y-8 rounded-md p-4 bg-black relative z-2 shadow-[0_0_50px_20px_rgba(0,0,0,1)]">

            <HeaderComponent></HeaderComponent>

            {children}

            <FooterComponent></FooterComponent>
        </main>
    </div></>
)
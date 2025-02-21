import { Link } from "react-router";
import { LogoComponent } from "./logo.component";

export const HeaderComponent = () => (

    <header className="text-center" >
        <h1 className="text-4xl font-bold">
            <Link to={"/"} aria-label="Go to home page"><LogoComponent></LogoComponent></Link>
            <span className="sr-only">strangerss - dating app</span>
        </h1>
        <p className="mt-2 text-gray-400 text-4xl" role="doc-subtitle">date you #offline</p>
    </header >
)
import { useEffect, useState } from "react";

function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState("false");
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });

    const onScroll = () => {
        if (window.scrollY > 100 && !hasScrolled) {
            setHasScrolled(true);
        } else if (window.scrollY < 100 && hasScrolled) {
            setHasScrolled(false);
        }
    };

    return (
        <>
            {hasScrolled && (
                <a className={`btn-backToTop ${hasScrolled && "show"}`} href="#top"><i className="fa-regular fa-arrow-up"></i></a>
            )}
        </>
    );
}
export default BackToTop;
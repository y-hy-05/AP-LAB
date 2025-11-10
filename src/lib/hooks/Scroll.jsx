import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Assuming you're using react-router-dom v6+

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto" // Optional: for a smooth scrolling animation
        });
    }, [pathname]); // Re-run effect whenever the pathname changes

    return null; // This component doesn't render any UI
}

export default ScrollToTop;
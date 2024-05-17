// ScrollToTopButton.jsx
'use client'
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { classNames } from "@utils/classNames"; // Utility function for conditional classes

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={classNames(
                "fixed bottom-8 right-8 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 shadow-md transition-opacity duration-300",
                { "opacity-0": !isVisible, "opacity-100": isVisible }
            )}
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTopButton;

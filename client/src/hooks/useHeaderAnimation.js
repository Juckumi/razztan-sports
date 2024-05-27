import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../context/AppContext";

export function useHeaderAnimation() {
    const { themeMode } = useContext(AppContext);
    const ref = useRef(null);
    let opacity = 0;

    function animation() {
        if (ref.current) {
            if (window.scrollY < 100) {
                opacity = 0;
                ref.current.style.background = "rgba(100,100,100,0)";
                ref.current.style.color = "var(--color-black)";
            } else {
                opacity = (window.scrollY - 100) / 150;

                ref.current.style.background = `linear-gradient(to right, rgba(51, 80, 67, ${opacity}), rgba(4, 38, 22, ${opacity}))`;
                ref.current.style.color = "var(--color-brand-bone-300)";
            }
        }
    }

    const cleanUp = () => {
        if (ref.current) {
            ref.current.style.background = "var(--gardient-brand-green)";
            ref.current.style.color = "var(--color-brand-bone-300)";
        }
    };

    const startUp = () => {
        if (ref.current) {
            ref.current.style.background = "rgba(100,100,100,0)";
            ref.current.style.color = "var(--color-black)";
        }
    };

    useEffect(() => {
        if (themeMode === "event") {
            startUp();
            window.addEventListener("scroll", animation);
        }

        return () => {
            if (themeMode === "event") {
                window.removeEventListener("scroll", animation);
                cleanUp();
            }
        };
    }, [themeMode]);

    return { ref };
}

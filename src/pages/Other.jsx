import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Other = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const isVisible = (
                rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2
            );

            setIsVisible(isVisible);
            console.log(isVisible)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div
                ref={sectionRef}
                style={{
                    width: "100%",
                    marginTop: 800,
                    height: "100vh",
                    backgroundColor: isVisible ? "green" : "red",
                    transition: "background-color 0.5s ease"
                }}
            >
                <Typography sx={{ fontSize: 50, textAlign: "center" }}>
                    {isVisible ? "Visible" : "Not visible"}
                </Typography>
            </div>
            <div style={{ height: "200vh" }}></div>
        </div>
    );
};

export default Other;
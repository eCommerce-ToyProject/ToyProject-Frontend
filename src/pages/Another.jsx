import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Another = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 요소가 뷰포트와 교차할 때 실행될 콜백 함수
                setIsVisible(entry.isIntersecting);
                console.log(entry.isIntersecting);
            },
            { threshold: 0.5 } // 요소의 50%가 뷰포트 안에 있을 때 트리거
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // 컴포넌트가 unmount 되면 옵저버 해제
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
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

export default Another;

import { useEffect, useRef, useState } from 'react';
import {Typography} from "@mui/material";
import TextInput from "../components/TextInput";
import axios from "axios";
import useUserStore from "../stores/user";
import {useNavigate} from "react-router-dom";

const SetupLive = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const { userName } = useUserStore()
    const [stream, setStream] = useState(null);
    const [title, setTitle] = useState('');
    const [cate, setCate] = useState('');
    const [facingMode, setFacingMode] = useState("user");
    const [permissionGranted, setPermissionGranted] = useState(false);

    const cleanupStream = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    const startCamera = async (mode = "user") => {
        cleanupStream(); // 기존 스트림 정리

        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: mode },
                audio: true,
            });

            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }

            setStream(mediaStream);
            setFacingMode(mode);
            setPermissionGranted(true);
        } catch (error) {
            console.error("카메라/마이크 권한 오류:", error);
            alert("카메라 및 마이크 접근 권한이 필요합니다.");
        }
    };

    const toggleCamera = () => {
        const newMode = facingMode === "user" ? "environment" : "user";
        startCamera(newMode);
    };

    const liveStart = () => {
        axios.post('/api/live', {
            id: userName,
            catCd: cate,
            title: title,
            startTime: new Date()
        })
            .then(res => {
                axios.post(`/${res.liveNo}/start`, {
                    params: {
                        id: userName
                    }
                })
                    .then(res => {
                        navigate(`/live/${res.liveNo}`)
                    })
            })
            .catch(err => {
                if(stream) {
                    if (title === '') {
                        alert('방송제목을 입력해주세요.')
                        console.log(err)
                    } else if (cate === '') {
                        alert('카테고리를 입력해주세요.')
                        console.log(err)
                    }
                }
            })
    }

    useEffect(() => {
        startCamera("user");
    }, []); // 마운트 시 한 번만 실행

    return (
        <div style={{padding: 20, textAlign: "center", display: 'flex'}}>
            <div style={{ margin: '0 auto' }}>
                <div>
                    <Typography>방송제목</Typography>
                    <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
                    <Typography>카테고리 코드(숫자만)</Typography>
                    <TextInput value={cate} onChange={e => setCate(e.target.value)}/>
                </div>
                <div>
                    <h2>🎬 방송 준비 화면</h2>

                    <div style={{maxWidth: 600, margin: "0 auto", position: "relative"}}>
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            playsInline
                            style={{
                                width: "100%",
                                borderRadius: 12,
                                border: "2px solid #ccc",
                                backgroundColor: "#000",
                            }}
                        />

                        <button
                            onClick={toggleCamera}
                            style={{
                                position: "absolute",
                                top: 10,
                                right: 10,
                                backgroundColor: "#444",
                                color: "#fff",
                                border: "none",
                                borderRadius: 20,
                                padding: "6px 12px",
                                cursor: "pointer",
                            }}
                        >
                            🔁 카메라 전환
                        </button>
                    </div>

                    <button
                        onClick={liveStart}
                        disabled={!permissionGranted}
                        style={{
                            marginTop: 20,
                            padding: "12px 24px",
                            fontSize: 16,
                            backgroundColor: "#00aaff",
                            color: "#fff",
                            border: "none",
                            borderRadius: 8,
                            cursor: permissionGranted ? "pointer" : "not-allowed",
                        }}
                    >
                        📡 방송 시작
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetupLive;

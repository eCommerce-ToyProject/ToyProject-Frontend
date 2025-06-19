import React, {useState} from 'react';
import StreamPlayer from '../components/StreamPlayer';
import ChatBox from '../components/ChatBox';
import SetupLive from "./SetupLive.tsx";

const Live = () => {
    const [stream, setStream] = useState(false)

    return (
    <div
      style={{
        display: 'flex',
        height: 'calc(100vh - 100px)', // 헤더 제외 전체 높이
        padding: '20px',
        gap: '20px',
        boxSizing: 'border-box',
      }}
    >
        {
            stream ? (<>
                <div style={{flex: 2, display: 'flex', flexDirection: 'column'}}>
                    <h2>📺 실시간 방송</h2>
                    <div style={{flexGrow: 1, backgroundColor: '#000'}}>
                        <StreamPlayer/>
                    </div>
                </div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <h2>💬 실시간 채팅</h2>
                    <div style={{flexGrow: 1}}>
                        <ChatBox/>
                    </div>
                </div>
            </>) : (<div>
                <SetupLive onStart={setStream}/>
            </div>)
        }
    </div>
    );
}

export default Live
import React from "react";
import styled from 'styled-components'
import { RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill } from 'react-icons/ri';

const StyledSpan = styled.span`
    font-size: 15px;
    cursor: pointer;
`

const StyledSpan2 = styled.span`
    font-size: 13px;
    color: grey;
`

const StyledButton = styled.button`
    text-align: center;
    width: 130px;
    height: 40px;
    background-color: white;
    color: #3B1C1C;
    margin-bottom: 15px;
    border: 0.2px solid grey;
    cursor: pointer;
`

const StyledP = styled.p`
    text-align: center;
    font-size: 12px;
    color: rgb(153, 153, 153);
`


// 마켓컬리 Footer 클론 코딩
function Footer() {

    const style = {
        position: 'relative',
        left: -2,
        bottom: 0,
        border: '1px solid rgb(247, 247, 247)',
        width: '100%',
        height: '250px',
    }

    return (
        <footer style={style}>
            <div style={{
                marginTop: '2%',
                marginBottom: '2%',
                justifyContent: 'center',
                backgroundColor: 'white',
                display: 'flex',
            }}>
                <div style={{ marginRight: '6%' }}>
                    <StyledSpan>Comm'on 고객센터</StyledSpan>
                    <h2>8245-8245<StyledSpan> 공휴일 제외 오전 10시 - 오후 6시</StyledSpan></h2><br />
                    <StyledButton>카카오톡 문의</StyledButton><StyledSpan2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;월~토요일 | 오전7시 - 오후6시</StyledSpan2><br />
                    <StyledButton>1:1 문의</StyledButton><StyledSpan2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;365일 고객센터 운영시간에 순차적으로 답변드리겠습니다.</StyledSpan2><br />
                    <StyledButton>대량주문 문의</StyledButton><StyledSpan2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;월~금요일 | 오전9시 - 오후6시</StyledSpan2>
                </div>
                <div>
                    <StyledSpan>Comm'on소개</StyledSpan>&nbsp;&nbsp;&nbsp;&nbsp;
                    <StyledSpan>이용약관</StyledSpan>&nbsp;&nbsp;&nbsp;&nbsp;
                    <StyledSpan>개인정보처리방침</StyledSpan>&nbsp;&nbsp;&nbsp;&nbsp;
                    <StyledSpan>이용안내</StyledSpan><br /><br />

                    <StyledSpan2>
                        법인명 : Comm'on | 사업자등록번호 : 123-45-6789<br />
                        통신판매업 : 제 2023-서울마포-00001 호 | 개인정보보호책임자 : 임준섭<br />
                        주소 : 서울특별시 해운대구 와우산로 1234, 125층 | 대표이사 : 김준철<br />
                        입점문의 : 8245-8245 | 채용문의 : 8245-8245<br />
                        팩스 : 1235813
                    </StyledSpan2><br /><br />

                    <RiFacebookBoxFill size="40" title="페이스북" color="#3b5998" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;
                    <RiInstagramFill size="40" title="인스타그램" color="#E4405F" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;
                    <RiYoutubeFill size="40" title="유튜브" color="#c4302b" style={{ cursor: 'pointer' }} />&nbsp;&nbsp;
                </div>
            </div>
            <div style={{
                height: '80px',
                width: '100%',
                marginTop: '11px',
                backgroundColor: 'rgb(247, 247, 247)',
            }}><br />
                <StyledP>© IDRsystem Comm'on. ALL RIGHTS RESERVED</StyledP>
            </div>
        </footer>
    )
}

export default Footer;
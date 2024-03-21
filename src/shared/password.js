//정규식으로 이메일 정합성 체크

const pwdCheck = (pwd) =>{
    let _reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return _reg.test(pwd); 
}

export default pwdCheck
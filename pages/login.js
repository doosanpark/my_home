import React from 'react';

function Login(){

    return (

        <div>
            <div>
                <h5>핸드폰 번호</h5>
                <input placeholder={"핸드폰 번호를 입력해주세요"}></input>
            </div>
            <div>
                <h5>비밀번호</h5>
                <input placeholder={"비밀번호를 입력해주세요"}></input>
            </div>
            <span><a>비밀번호 찾기</a></span>
            <div>
                <button>로그인</button>
            </div>
            <div>
                <button>비밀번호</button>
            </div>
        </div>
    );
}

export default Login;

export async function getServerSideProps(context){

    return{

    }

}
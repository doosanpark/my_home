import React from 'react';

function Login(){

    return (
        <div className="container">
            <div className="baseFormat">
                <div>
                    <div>핸드폰 번호</div>
                    <input placeholder={"핸드폰 번호를 입력해주세요"}></input>
                </div>
                <div>
                    <div>비밀번호</div>
                    <input placeholder={"비밀번호를 입력해주세요"}></input>
                    <div><a>비밀번호 찾기</a></div>
                </div>
                
                <div>
                    <button className="btnDefault">로그인</button>
                    <button className="btnActive">비밀번호</button>
                </div>
            </div>
        </div>
    );
}

export default Login;

export async function getServerSideProps(context){
 
    return{
        props: {}
    }

}
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Login(){

    const [telInfo, setTelInfo] = useState();
    const [passInfo, setPassInfo] = useState();

    const fnLogin = () => {
        if(telInfo === "" || passInfo === ""){
            alert("항목을 모두 입력하세요");
            return;
        }

        axios({
            method: 'post',
            url: 'http://localhost:8080/account/selAccntExist',
            data: {
                telInfo: telInfo
                , passInfo: passInfo
            }
          }).then(res => { console.log("res", res)})
        
    }

    return (
        <div className="container baseFormat">
            <section className={"top-sector"}>
                <div className={"input-group"}><span className="fs-5">핸드폰 번호</span></div>
                <input className={"form-control"} placeholder={"핸드폰 번호를 입력해주세요"}
                onChange={async (e) => {
                    const {value} = e.currentTarget
                    setTelInfo(value);
                }}/>
            </section>
            <section className={"top-sector"}>
                <div><span className={["fs-5"]}>비밀번호</span></div>
                <input className={"form-control"} placeholder={"비밀번호를 입력해주세요"}
                onChange={async (e) => {
                    const {value} = e.currentTarget
                    setPassInfo(value);
                }}
                />
                <div className={"text-right", "width-full"}><a>비밀번호 찾기</a></div>
            </section>
            
            <section className={"top-sector"}>
                
                <button className="btnDefault" onClick={fnLogin}>로그인</button>
                <button className="btnActive">비밀번호</button>
            </section>
        </div>
    );
}

export default Login;

export async function getServerSideProps(context){
 
    return{
        props: {}
    }

}
import React from  'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

function Home(){
    const router = useRouter();
    return (
        <div className={"formLayout"} style={{ alignItems: "center"}}>
            <h4>우리집 가격이 궁금할 때는?</h4>
            <h1>우리집</h1>

                <img src="/images/home.jpg"></img>

            <div>
                <Link href="/login">
                <a>이미 계정이 있으신가요?</a>
                </Link>
            </div>
            <button>가입하기</button>

        </div>
        
    )

}

export default Home;
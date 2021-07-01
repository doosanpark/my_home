import React from  'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '/styles/home.module.css';
import classNames from "classnames";
function Home(){
    const router = useRouter();
    return (
        <div style={{ alignItems: "center"}}>
            <h4>우리집 가격이 궁금할 때는?</h4>
            <h1>우리집</h1>

                <img src="/images/home.jpg"></img>

            <div>
                <Link href="/login">
                <a>이미 계정이 있으신가요?</a>
                </Link>
            </div>
            <button className={classNames({[styles.btn]: true}, {[styles.hi]: true})}>가입하기</button>

        </div>
        
    )

}

export default Home;
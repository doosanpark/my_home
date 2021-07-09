import React from  'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '/styles/home.module.css';
import classNames from "classnames";
function Home(){
    const router = useRouter();
    return (
        <div className="container baseFormat">
            <h4>우리집 가격이 궁금할 때는?</h4>
            <h1>우리집</h1>
            <div className={styles.imageArea}>
                <img src="/images/home.jpg"/>
            </div>
            <div>
                <Link href="/login">
                <a>이미 계정이 있으신가요?</a>
                </Link>
            </div>
            <button className={classNames({["btnDefault"]: true}, {[styles.hi]: true})}>가입하기</button>

        </div>
        
    )

}

export default Home;
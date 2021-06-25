import React from "react";
import Link from "next/link";
import styles from '/styles/search.module.css';

function HomeList() {
  return (
    <div className={"container"}>
      <div>
        <div
          style={{ fontSize: "18px", fontWeight: "bold", marginTop: "80px" }}
        >
          {"믿을 만한 중개사가 알려주는"}
        </div>
      </div>
      <div>
        <div style={{ fontSize: "18px", fontWeight: "bold" }} class="">
          {"지금 "}
          <span style={{ color: "rgb(22, 160, 133)" }}>
            {"우리 아파트 시세"}
          </span>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div>{"아파트 명을 입력해보세요"}</div>
        <div>
          <input
            type={"text"}
            style={{ height: "30px", width: "100%" }}
            placeholder={"ex) 00동 00아파트"}
          />
        </div>
      </div>
      <div style={{ marginTop: "200px", textAlign: "center" }}>
        <Link href="/search/homeList">
          <button className={styles.mainButton}>
            {"다음"}
          </button>
        </Link>
      </div>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button className={styles.subButton} style={{marginRight: 10}}>
          {"우리집"}
        </button>
        <button className={styles.subButton} style={{marginRight: 10}}>
          {"우리집 내놓기"}
        </button>
        <button className={styles.subButton}>
          {"내정보"}
        </button>
      </div>
    </div>
  );
}

export default HomeList;

import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import searchStyles from "/styles/search.module.css";

function HomeList() {
  const router = useRouter();
  const { searchKeyword } = router.query;

  const homeListRender = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      result.push(
        <div style={styles.listContainer}>
          <div style={styles.imageContainer}>
            <div style={styles.centerAlign}>
              <img src={"/images/home.jpg"} style={{ width: "100px" }} />
            </div>
          </div>
          <div style={styles.contentContainer}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              {`집 목록 ${i}`}
            </div>
            <div>{`집 목록 ${i} 설명 1`}</div>
            <div>{`집 목록 ${i} 설명 2`}</div>
          </div>
        </div>
      );
    }
    return result;
  };

  return (
    <div className={"container"}>
      <div>
        <div
          style={styles.topContainer}
        >
          {"얼마집 가이드 보기"}
        </div>
      </div>
      <div>
        <div
          style={{ fontWeight: "bold", fontSize: "24px", marginTop: "20px" }}
        >
          {"우리집 목록"}
        </div>
      </div>
      <div>
        <div style={{ fontSize: "16px" }} className="">
          {"등록된 매물이 인증을 기다리고 있습니다"}
        </div>
      </div>
      <div style={{marginTop: "10px"}}>
        <div style={{ fontSize: "16px" }} className="">
          {`${searchKeyword != null ? decodeURIComponent(searchKeyword) : ''}에 대한 검색결과`}
        </div>
      </div>
      {homeListRender()}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link href={`/search/searchMain`}>
          <button className={searchStyles.mainButton}>{"검색 화면으로 이동"}</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  topContainer: {
    fontSize: "16px",
    color: "rgb(255, 255, 255)",
    textAlign: "center",
    borderRadius: "4px",
    backgroundColor: "rgb(52,152,219)",
    padding: "10px",
  },
  listContainer: {
    marginTop: "10px",
    flex: 1,
    position: "relative",
  },
  imageContainer: { width: "50%", display: "inline-block" },
  contentContainer: {
    width: "50%",
    display: "inline-block",
    verticalAlign: "super",
  },
  centerAlign: {
    textAlign: "center"   
  }
};

export default HomeList;

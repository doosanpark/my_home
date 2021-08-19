import React, {useState} from "react";
import Link from "next/link";
import {useRouter} from 'next/router';
import searchStyles from "/styles/search.module.css";

function HomeList() {

  const [searchKeyword, setSearchKeyword] = useState();
  const router = useRouter();

  const fnSearch = () => {
    if (searchKeyword == null || searchKeyword == ""){
      alert("검색어를 입력하세요");
      return;
    }
    var url = `/search/homeList?searchKeyword=${encodeURIComponent(searchKeyword)}`;
    router.push(url);
  }


  return (
    <div className={"container"}>
      <div className={searchStyles.bodyContainer}>
        <div>
          <div
            style={{ fontSize: "24px", fontWeight: "bold", marginTop: "80px" }}
          >
            {"믿을 만한 중개사가 알려주는"}
          </div>
        </div>
        <div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {"지금 "}
            <span style={{ color: "rgb(22, 160, 133)" }}>
              {"우리 아파트 시세"}
            </span>
          </div>
        </div>
        <div className={"mt-5"}>
          <div className={"fs-5"}>{"아파트 명을 입력해보세요"}</div>
          <div className={["input-group", "input-group-lg"].join(" ")}>
            <input
              className={"form-control"}
              type={"text"}
              placeholder={"ex) 00동 00아파트"}
              onChange={async (e) => {
                const { value } = e.currentTarget
                setSearchKeyword(value);
              }}
            />
          </div>
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button className={["btn", "btn-primary", "btn-lg"].join(" ")} onClick={fnSearch}>{"검색"}</button>
        </div>
      </div>
      <div className={["text-center"].join(" ")}>
        <button className={["btn", "btn-secondary", "me-2"].join(" ")}>
          {"우리집"}
        </button>
        <button className={["btn", "btn-secondary", "me-2"].join(" ")} onClick={() => {
          location.href = "/search/homeRegister";
        }}>
          {"우리집 내놓기"}
        </button>
        <button className={["btn", "btn-secondary"].join(" ")}>{"내정보"}</button>
      </div>
    </div>
  );
}

export default HomeList;

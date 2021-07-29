import React, {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import searchStyles from "/styles/search.module.css";
import axios from 'axios';

function HomeList() {
  const router = useRouter();
  const { searchKeyword } = router.query;
  const [ homeListJsx, setHomeListJsx ] = useState(<></>);

  const homeListRender = () => {
    if(searchKeyword == null || searchKeyword == '')
      return <></>;
    const result = [];
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/search/list',
      data: {
        keyword: searchKeyword
      }
    }).then((response) => {
      console.log(response.data);
      let list = response.data.searchList;
      if (list.length == 0) return;
      console.log(list);
      let liItem = null;
      for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        if(i % 3 == 0)
          liItem = []
        liItem.push(
          <li className={["list-group-item", "col-4"].join(" ")}>
            <div className={"text-center"} style={innerStyles.listContainer} onClick={() => {location.href = list[i].url}} style={{cursor: "pointer"}}>
              <div>
                <div>
                  <img src={"/images/home.jpg"} style={{ width: "100px" }} />
                </div>
              </div>
              <div style={innerStyles.contentContainer}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {`${list[i].name}`}
                </div>
                <div>{`집 목록 ${list[i].id} 설명 1`}</div>
                <div>{`집 목록 ${list[i].id} 설명 2`}</div>
              </div>
            </div>
          </li>
        );
        if(i % 3 == 2 || i == list.length - 1)
            result.push(<ul className={["list-group", "list-group-horizontal"].join(" ")}>{liItem}</ul>);
      }
      setHomeListJsx(result);
    });   
  };

  useEffect(() => {
    homeListRender();
  }, [searchKeyword])

  return (
    <div className={["container", "mt-5"].join(" ")}>
      <div>
        <div
          style={innerStyles.topContainer}
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
      {homeListJsx}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Link href={"/search/searchMain"}>
          <button className={["btn", "btn-secondary"].join(" ")}>{"검색 화면으로 이동"}</button>
        </Link>
      </div>
    </div>
  );
}

const innerStyles = {
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

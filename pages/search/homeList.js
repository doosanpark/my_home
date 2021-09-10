import React, {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import searchStyles from "/styles/search.module.css";
import axios from 'axios';

function HomeList() {
  const router = useRouter();
  const { searchKeyword } = router.query;
  const [ homeListJsx, setHomeListJsx ] = useState(<></>);

  const deleteItem = (id) => {
    const isDelete = confirm("삭제하시겠습니까?");
    console.log(isDelete)
    console.log(id);
    if (!isDelete) return;
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/search/delete',
      data: {
        id: id
      }
    }).then((response) => {
      console.log(response);
      if(response.data && response.data.success){
        alert("삭제가 완료되었습니다.");
        location.reload();
      }
    })
  }

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
            <div>
              <div className={"text-center"}>
                <img src={`${list[i].thumbnailImagePath}`} style={{ maxWidth: '100%' }} />
              </div>
            </div>
            <div className={"text-left"} style={innerStyles.listContainer} >
              <div>
                <div style={{ fontSize: "20px", fontWeight: "bold", cursor:"pointer" }}onClick={() => {window.open(list[i].linkUrl)}}>
                  <span>{`${list[i].subject}`}</span>
                </div>
                <div style={{float:"right"}}><button className={"btn btn-light"} onClick={() => deleteItem(list[i].id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></div>
                <div className={["text-primary", "fs-6", "fw-bold"].join(" ")}>{`매매 : ${list[i].price}`}</div>
                <div>{`${list[i].floor}, ${list[i].area}`}</div>
                <div>{`${list[i].summary}`}</div>
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
    <div className={["container", "mt-5", "mb-5"].join(" ")}>
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
  centerAlign: {
    textAlign: "center"   
  }
};

export default HomeList;

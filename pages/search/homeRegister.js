import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import searchStyles from "/styles/search.module.css";
import axios from "axios";
import moment from "moment";

function HomeRegister() {
  const [subject, setSubject] = useState();
  const [floor, setFloor] = useState();
  const [price, setPrice] = useState();
  const [area, setArea] = useState();
  const [summary, setSummary] = useState();
  const [content, setContent] = useState();
  const [thumbnailImagePath, setThumbnailImagePath] = useState();
  const [creator, setCreator] = useState();

  const registerInfo = () => {
    axios({
        method: 'post',
        url: 'http://localhost:3001/api/search/insert',
        data: {
            "homeInfo": {
                "subject": subject,
                "floor": floor,
                "price": price,
                "area": area,
                "summary": summary,
                "content": content,
                "linkUrl": null,
                "thumbnailImagePath": thumbnailImagePath,
                "creator": creator,
                "modifier": null,
                "createdDate": moment().format("YYYY-MM-DDTHH:mm:ssZ"),
                "modifyDate": null
            }
        }
      }).then((response) => {
        console.log(response);
        if(response.data && response.data.success){
            alert("저장되었습니다.");
            location.href = "/search/searchMain";
        }
      })
  }

  return (
    <div className={["container", "mt-5"].join(" ")}>
      <div className={searchStyles.bodyContainer}>
        <div className="mb-3">
          <span className="fs-2">아파트 정보를 입력해주세요</span>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            아파트명
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="아파트명을 입력하세요"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setSubject(value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="floor" className="form-label">
            층
          </label>
          <input
            type="text"
            className="form-control"
            id="floor"
            placeholder="층을 입력하세요. ex) 5/29층"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setFloor(value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            가격
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="희망가격을 입력하세요. ex) 10억 5천만원"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setPrice(value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label">
            면적
          </label>
          <input
            type="text"
            className="form-control"
            id="area"
            placeholder="면적을 입력하세요"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setArea(value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="summary" className="form-label">
            간단 소개
          </label>
          <input
            type="text"
            className="form-control"
            id="summary"
            placeholder="간단 소개를 입력하세요"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setSummary(value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            본문
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="5"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setContent(value);
            }}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnailImagePath" className="form-label">
            썸네일 URL
          </label>
          <input
            type="text"
            className="form-control"
            id="thumbnailImagePath"
            placeholder="썸네일 URL을 입력하세요"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setThumbnailImagePath(value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="creator" className="form-label">
            등록자
          </label>
          <input
            type="text"
            className="form-control"
            id="creator"
            placeholder="등록자를 입력하세요"
            onChange={async (e) => {
                const { value } = e.currentTarget
                setCreator(value);
            }}
          />
        </div>
        <div className="mb-3 pb-5 text-end">
            <button type="button" className="btn btn-primary" onClick={registerInfo}>등록</button>
        </div>
      </div>
    </div>
  );
}

export default HomeRegister;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import searchStyles from "/styles/search.module.css";
import axios from "axios";

function HomeRegister() {
  return (
    <div className={["container", "mt-5"].join(" ")}>
      <div className={searchStyles.bodyContainer}>
        <div class="mb-3">
          <span class="fs-2">아파트 정보를 입력해주세요</span>
        </div>
        <div class="mb-3">
          <label for="subject" class="form-label">
            아파트명
          </label>
          <input
            type="text"
            class="form-control"
            id="subject"
            placeholder="아파트명을 입력하세요"
          />
        </div>
        <div class="mb-3">
          <label for="floor" class="form-label">
            층
          </label>
          <input
            type="text"
            class="form-control"
            id="floor"
            placeholder="층을 입력하세요. ex) 5/29층"
          />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">
            가격
          </label>
          <input
            type="text"
            class="form-control"
            id="price"
            placeholder="희망가격을 입력하세요. ex) 10억 5천만원"
          />
        </div>
        <div class="mb-3">
          <label for="area" class="form-label">
            면적
          </label>
          <input
            type="text"
            class="form-control"
            id="area"
            placeholder="면적을 입력하세요"
          />
        </div>
        <div class="mb-3">
          <label for="summary" class="form-label">
            간단 소개
          </label>
          <input
            type="text"
            class="form-control"
            id="summary"
            placeholder="간단 소개를 입력하세요"
          />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">
            본문
          </label>
          <textarea
            class="form-control"
            id="content"
            rows="5"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="thumbnailImagePath" class="form-label">
            썸네일 URL
          </label>
          <input
            type="text"
            class="form-control"
            id="thumbnailImagePath"
            placeholder="썸네일 URL을 입력하세요"
          />
        </div>
        <div class="mb-3">
          <label for="creator" class="form-label">
            등록자
          </label>
          <input
            type="text"
            class="form-control"
            id="creator"
            placeholder="등록자를 입력하세요"
          />
        </div>
        <div class="mb-3 pb-5 text-end">
            <button type="button" class="btn btn-primary">등록</button>
        </div>
      </div>
    </div>
  );
}

export default HomeRegister;

import { classFilter } from "@/helper";
import { isEmpty } from "@/helper/validate";
import React, { useState } from "react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="home-page">
      <nav className="nav d-flex justify-between align-items-center">
        <span className="icon-back"></span>
        {/* <span>关闭</span> */}
      </nav>
      <div className="d-flex align-items-center direction-column mar-b-10">
        <span
          className="icon"
          style={{ backgroundImage: `url('${require("@/static/image/home/icon-network.png")}')` }}
        ></span>
        <span>网络接入</span>
      </div>
      <div className="d-flex justify-center mar-b-5">
        <span className="border"></span>
      </div>
      <div className="d-flex align-items-center direction-column mar-b-10">
        <span
          className="icon"
          style={{ backgroundImage: `url('${require("@/static/image/home/icon-gateway.png")}')` }}
        ></span>
        <span>广电智能网关</span>
      </div>
      <div className="d-flex justify-center">
        <span className="border"></span>
      </div>
      <div className="scroll-box" onScrollCapture={(e) => setActiveIndex(null)}>
        <div className={classFilter("app-list text-nowrap", isEmpty(activeIndex) ? "" : "active")}>
          {new Array(10).fill(1).map((item, index) => {
            const active = index === activeIndex ? "active" : "";
            return (
              <div className={classFilter("app-item", active)} key={index} onClick={(e) => setActiveIndex(index)}>
                <div className="d-flex direction-column align-items-center justify-end">
                  <span
                    className="icon"
                    style={{ backgroundImage: `url('${require("@/static/image/home/icon-network.png")}')` }}
                  ></span>
                  <span>水星路由器</span>
                  <span className="border top"></span>
                  <span className="border bom"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isEmpty(activeIndex) ? null : (
        <div className="scroll-box brand-list">
          <div className="text-nowrap">
            {new Array(10).fill(1).map((item, index) => (
              <div className="brand-item" key={index}>
                <div className="d-flex direction-column align-items-center justify-end">
                  <span
                    className="icon"
                    style={{ backgroundImage: `url('${require("@/static/image/home/icon-network.png")}')` }}
                  ></span>
                  <span>水星路由器</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

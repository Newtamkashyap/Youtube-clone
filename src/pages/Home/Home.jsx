import React from "react";
import './Home.css';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Feed } from "../../components/Feed/Feed";





export function Home({sidebar}) {
    return (
        <div>

          <Sidebar sidebar={sidebar}/>
          {/* here we are mounting the sidebar and feed */}
          <div className={`container ${sidebar?"":'large-container'}`}>
            <Feed/>
          </div>


        </div>
    )
}

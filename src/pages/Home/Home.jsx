import React, { useState } from "react";
import './Home.css';
import { Sidebar } from "../../components/sidebar/sidebar";
import { Feed } from "../../components/Feed/Feed";





export function Home({sidebar}) {
  const [category,setCategory]=useState(0);
    return (
        <div>

          <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
          {/* here we are mounting the sidebar and feed */}
          <div className={`container ${sidebar?"":'large-container'}`}>
            <Feed category={category}/>
          </div>


        </div>
    )
}

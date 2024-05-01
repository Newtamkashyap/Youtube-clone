import React from "react";
import './Home.css';
import { Sidebar } from "../../components/sidebar/sidebar";





export function Home({sidebar}) {
    return (
        <div>

          <Sidebar sidebar={sidebar}/>
          


        </div>
    )
}

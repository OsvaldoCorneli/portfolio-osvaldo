import React from "react";
import "./skills.css"
import htmlIcon from "../../../public/icons/HTML.svg"
import CSSIcon from "../../../public/icons/CSS.svg"
import JSIcon from "../../../public/icons/JS.svg"
import bootstrapIcon from "../../../public/icons/bootstrapColor.svg" 
import reactBootstrapicon from "../../../public/icons/React-Bootstrap.svg"
import reactIcon from "../../../public/icons/React.svg"
import ejsIcon from "../../../public/icons/ejs-svgrepo-com.svg"
import reduxIcon from "../../../public/icons/ReduxColor.svg"
import viteicons from "../../../public/icons/vite-svgrepo-com.svg"
import nodeIcon from "../../../public/icons/Nodejs.svg"
import sqlicon from "../../../public/icons/sql-svgrepo-com.svg"
import expressicon from "../../../public/icons/Express.svg"
import sequelizeicon from "../../../public/icons/sequelizejs-icon.svg"
import postgresqlIcon from "../../../public/icons/postgresql-icon.svg"
import MysqlIcon from "../../../public/icons/mysql-icon.svg"
import Modals from "../Modals/Modals";
import data from "../../data/skills.json"


export default function Skills(){
console.log(data)

    return(

        <div className="icons">

            <Modals imagen={htmlIcon} info={data[0]}/>
            {/* <Modals imagen={CSSIcon} info={data[0]/>
            <Modals imagen={JSIcon} info={data[0]/>
            <Modals imagen={bootstrapIcon} info={data[0]/>
            <Modals imagen={reactBootstrapicon} />
            <Modals imagen={reactIcon}/>
            <Modals imagen={ejsIcon}/>
            <Modals imagen={reduxIcon}/>
            <Modals imagen={viteicons}/>
            <Modals imagen={nodeIcon}/>
            <Modals imagen={expressicon}/>
            <Modals imagen={sequelizeicon}/>
            <Modals imagen={postgresqlIcon}/>
            <Modals imagen={MysqlIcon}/>
            <Modals imagen={sqlicon}/>

         */}
        </div>

       
    );
  } 
  

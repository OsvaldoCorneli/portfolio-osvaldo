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
            <Modals imagen={CSSIcon} info={data[1]}/>
            <Modals imagen={JSIcon} info={data[2]}/>
            <Modals imagen={bootstrapIcon} info={data[3]}/>
            <Modals imagen={reactBootstrapicon} info={data[4]}/>
            <Modals imagen={reactIcon} info={data[5]}/>
            <Modals imagen={ejsIcon} info={data[6]}/>
            <Modals imagen={reduxIcon} info={data[7]}/>
            <Modals imagen={viteicons} info={data[8]}/>
            <Modals imagen={nodeIcon} info={data[9]}/>
            <Modals imagen={expressicon} info={data[10]}/>
            <Modals imagen={sequelizeicon} info={data[11]}/>
            <Modals imagen={postgresqlIcon} info={data[12]}/>
            <Modals imagen={MysqlIcon} info={data[13]}/>
            <Modals imagen={sqlicon} info={data[14]}/>

        
        </div>

       
    );
  } 
  

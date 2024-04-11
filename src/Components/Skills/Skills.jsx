import React from "react";
import "./skills.css"
import htmlIcon from "../../../public/icons/HTML.svg"
import CSSIcon from "../../../public/icons/CSS.svg"
import JSIcon from "../../../public/icons/JS.svg"
import bootstrapIcon from "../../../public/icons/bootstrapColor.svg" 
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




export default function Skills(){


    return(

        <div className="icons">

            <img src={htmlIcon} alt="HTML ICON" />
            <img src={CSSIcon} alt="CSS ICON" />
            <img src={JSIcon} alt="JS ICON" />
            <img src={bootstrapIcon} alt="BOOTSTRAP ICON" />
            <img src={reactIcon} alt="reactIcon" />
            <img src={ejsIcon} alt="EJSicon" />
            <img src={reduxIcon} alt="ReduxIcon" />
            <img src={viteicons} alt="Vite icon" />
            <img src={nodeIcon} alt="nodejs icon" />
            <img src={expressicon} alt="express icon" />
            <img src={sequelizeicon} alt="sequelize icon" />
            <img src={postgresqlIcon} alt="postresql icon" />
            <img src={MysqlIcon} alt="mysql icon" />
            <img src={sqlicon} alt="sql icon" />

        </div>
        
    );
  } 
  

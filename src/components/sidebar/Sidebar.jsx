import classes from './Sidebar.module.css';
import xerocodee from '../../assets/xerocodee.png';
import xerocodeIcon from '../../assets/xerocodeIcon.svg';
import builderCenter from '../../assets/builderCenter.svg';
import serviceBoard from '../../assets/serviceBoard.svg';
import clusters from '../../assets/clusters.svg';
import database from '../../assets/database.svg';
import environment from '../../assets/environment.svg';
import workflow from '../../assets/workflow.svg';
import monitoring from '../../assets/monitoring.svg';
import security from '../../assets/security.svg';
import webHook from '../../assets/webHook.svg';
import logError from '../../assets/logError.svg';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

const Sidebar = () =>{

    const sidebarItem = [
        {
            icon:xerocodeIcon,
            name:"XeroCodee"
        },
        {
            icon:builderCenter,
            name:"Builder Center"
        },
        {
            icon:serviceBoard,
            name:"Service Board"
        },
        {
            icon:clusters,
            name:"Clusters"
        },
        {
            icon:database,
            name:"Database"
        },
        {
            icon:environment,
            name:"Environment"
        },
        {
            icon:workflow,
            name:"Workflow"
        },
        {
            icon:monitoring,
            name:"Monitoring"
        },
        {
            icon:security,
            name:"Security"
        },
        {
            icon:webHook,
            name:"Web Hook"
        },
        {
            icon:logError,
            name:"Log Error"
        },
    ]

   
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleActive = (index) => {
		setSelectedIndex(index);
        // console.log(index)
	};


    return (
        <div className={classes.sidebar_container}>
            <img src={xerocodee} alt="xerocodee logo" />
            <div className={classes.sidebar_item}>
                {
                    sidebarItem.map((item,index)=>{
                        return <SidebarItem key={index} index={index}icon={item.icon} name={item.name} handleActive={handleActive} color={selectedIndex===index ? 'white': null}/>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar;
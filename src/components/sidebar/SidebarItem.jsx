// import { useState } from 'react';
import classes from './SidebarItem.module.css';

const SidebarItem = ({ index, icon, name,handleActive,color }) => {
	


	return (
		<div className={classes.sidebarIem_wrapper}>
			<div
				className={classes.sidebarIem_content}
				onClick={() => handleActive(index)}
				style={{ backgroundColor: color }}
			>
				<img src={icon} alt="icon" />
				<p className={classes.sidebarItem_name}>{name}</p>
                {/* {color ? <div className={classes.sidebarItem_active}></div> : null} */}
			</div>
          
		</div>
	);
};

export default SidebarItem;

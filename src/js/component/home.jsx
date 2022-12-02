import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [color,setColor] = useState("")

	return (
		<div className="text-center">
			<div className="Box">
				<div className= {color=="Green" ? "Circle Green ShadowGreen": "Circle Green"} onClick={()=>setColor("Green")}>

				</div>
				<div className= {color== "Yellow" ? "Circle Yellow ShadowYellow": "Circle Yellow"} onClick={()=>setColor("Yellow")}>
					
				</div>
				<div className= {color== "Red" ? "Circle Red ShadowRed": "Circle Red"} onClick={()=>setColor("Red")}>
					
				</div>
			</div>
	
			
		</div>
	);
};

export default Home;

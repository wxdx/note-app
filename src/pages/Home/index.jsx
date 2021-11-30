import Edit from './_source/Edit'
import List from './_source/List'
import './index.css'
import { useState } from "react";
const Home = () => {
    const [data,setData] = useState([])
    return (
        <div className="main">
            <Edit add={setData}/>
            <List dataList={data} deleteItem={setData}/>
        </div>
        
    )
}

export default Home;
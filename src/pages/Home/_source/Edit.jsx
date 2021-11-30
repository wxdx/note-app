import { useState } from "react";
import { v4  } from 'uuid';

const Edit = ({add}) => {

    const [note,setNote] = useState("")

    const noteChange = (e) => {
        setNote(e.target.value)
    }

    const [date,setDate] = useState("")

    const dateChange = (e) => {
        setDate(e.target.value)
    }

    const [time,setTime] = useState("")

    const timeChange = (e) => {
        setTime(e.target.value)
    }

    const addHandle = () => {
        if(!note){
            window.alert('请输入事件')
            return
        }
        if(!date){
            window.alert('请选择日期')
            return
        }
        if(!time){
            window.alert('请选择时间')
            return
        }
        add(function(prevData) {
            return [
                {
                    id:v4(),
                    note,
                    date,
                    time
                },
                ...prevData
            ]
        })
    }

    return (
        <div className="edit">
            <h1>记事本</h1>
            <p>事件：</p>
            <input type="text" value={note} onChange={noteChange}></input>
            <p>日期：</p>
            <input type="date" value={date} onChange={dateChange}></input>
            <p>时间：</p>
            <input type="time" value={time} onChange={timeChange}></input>
            <div className="addBox">
                <button className="add" onClick={addHandle}>添加</button>
            </div>
            
            
        </div>
    )
}

export default Edit;
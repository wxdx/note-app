const Item = ({dataInfo,deleteItem}) => {

    const deleteHandle = () => {
        deleteItem(function(pre){
            return pre.filter(x => x.id !== dataInfo.id)
        })
    }

    return (
        <div className="item">
            <div>{dataInfo.note}</div>
            <div>{`${dataInfo.date}  ${dataInfo.time}` }</div>
            <button className="remove" onClick={deleteHandle}>删除</button>
        </div>
    )
}

export default Item;
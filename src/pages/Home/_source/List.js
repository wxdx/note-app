import Item from './Item'
const List = ({dataList,deleteItem}) => {
    return (
        <div className="list">
            {
                dataList.map(item => {
                    return <Item key={item.id} dataInfo={item} deleteItem={deleteItem}/>
                })
            }
            
        </div>
    )
}

export default List;
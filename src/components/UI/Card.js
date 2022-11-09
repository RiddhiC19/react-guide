function Card(data){
    const classes = 'card'+' '+ data.className;
    return <div className={classes} key={data.itemKey}>{data.children}</div>;    
}
export default Card;
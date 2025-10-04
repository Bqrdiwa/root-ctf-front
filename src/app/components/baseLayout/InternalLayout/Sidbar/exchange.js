function DataExchange(props,link) {
  
 const dataExchange=
  props.map((index)=>(  
  {
   title:index.title,
   id:index.id,
   icon:index.icon,
   link:link,
  }
  ));

//  console.log("DataExchange:",dataExchange)

  return dataExchange;
}
export default DataExchange;


 
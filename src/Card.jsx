function Card({image,name,price}) {
//   let name='JAINX Rose Gold Mesh Magnet Chain Analog Watch'
//   let price='₹308'
  return (
    <>
    <div id="card" style={{border:'1px solid black',width:'250px'}}>
    <img height={250} width={250} src={image} alt=" "/>
    <p>{name}</p>
    <p>{price}</p>
    </div>
   
    </>
  )
}

export default Card
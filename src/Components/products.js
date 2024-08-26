import faycel from '../2.png'
const Belhssane=()=>{
    var name = "Ala"
    var a = 6
    var b = 8
    return(
        <div>
            <h1 style={{textDecoration:'underline',color : 'pink'}}>Belhssane Component</h1>
            <h2>Hello {name}</h2>
            <h3>{a+b}</h3>
            <img src="1.png" alt="Not Found"/> 
            <img src={faycel} alt="Not Found"/>  
        </div>
    )
}

export default Belhssane
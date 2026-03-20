import ReactDOM from "react-dom/client"
import "./style.css"


const root = ReactDOM.createRoot(document.getElementById("root"))

function renderCard(imgSrc, name, price, key){
    return <div className="card" key={key}>

    <img src={imgSrc} alt="iphone" />
    <b><hr /></b>
    <div className="content">
    <h2>{name}</h2>
    <h2>{price} $</h2>
    </div>
</div>
}


fetch('https://dummyjson.com/products/search?q=phone')
.then((res) => res.json())
.then((data) => {
    console.log(data.products)
    const container = data.products.map((products)=>{
        return renderCard(products.thumbnail, products.title, products.price, products.id)
    })
    root.render(<div className="container">{container}</div>)
    
});



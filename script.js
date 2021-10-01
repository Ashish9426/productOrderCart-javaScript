var data = []


function loadpets(){

    var http=new XMLHttpRequest()
    http.open("GET","data/products.json")
    http.send()
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)

        {
        var result= JSON.parse(this.response)
        console.log(result)
        data = result.products
        // data.push(data)
        }

        // console.log(data)
        // console.log(pets)
        BindItem(data)
    }

}
loadpets()


function BindItem(arr){
    var temp=``
    arr.forEach((e)=>{

        temp +=`<div class="col-4">
        <div class="card">
        
        <div class="card-body">
            <h2 class="card-text" style="text-align:center">Title : ${e.title}</h2>
            <h4 class="card-title">Id : ${e.id}</h4>
            <p class="card-text"><strong>Price :</strong> ${e.price} Rs.</p>
            <div class="img"><img src="${e.image}" alt="No Image" /></div>
            <p class="card-text"><strong>Description :</strong> ${e.discription}</p>

             <button class="btn btn-info" onclick="cart()">Add to Cart</button>
        </div>
    </div>
    </div>`
        
        
    })

document.querySelector(".post").innerHTML=temp;
}

function cart() {
    
 }
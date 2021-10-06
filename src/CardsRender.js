import React from 'react';

function CardsRender(props) {

    const allArticles=props.allArticles
    let groupedArticles=[]
    let j=0
    for (let i = 0; i < allArticles.length/3; i++) {
        groupedArticles[i]=[]
        groupedArticles[i].push(allArticles[j])
        groupedArticles[i].push(allArticles[j+1])
        groupedArticles[i].push(allArticles[j+2])
        j=j+3
      }
    console.log(groupedArticles)  

    function CardsMap(article){
        return(
            <>
            {/* {article[0]?<h1>{article[0].ename}</h1>:<></>}
            {article[1]?<h1>{article[1].ename}</h1>:<></>}
            {article[2]?<h1>{article[2].ename}</h1>:<></>} */}
            <div class="carousel-item">
            <div class="row">
            <div class="col-md-4 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"/>
                <div class="card-body">
                    {article[0]?<h4 class="card-title">{article[0].ename}</h4>:<></>}
                    {article[0]?<p class="card-text">{article[0].enumber}</p>:<></>}

                </div>

            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
                <div class="card-body">
                {article[1]?<h4 class="card-title">{article[1].ename}</h4>:<></>}
                {article[1]?<p class="card-text">{article[1].enumber}</p>:<></>}

                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
                <div class="card-body">
                {article[2]?<h4 class="card-title">{article[2].ename}</h4>:<></>}
                {article[2]?<p class="card-text">{article[2].enumber}</p>:<></>}
                </div>
            </div>
        </div>
        </div>
        </div>
            </>
        )
    }
   
    return (
        <>
        {/* {groupedArticles?groupedArticles.map(CardsMap):<></>   }  */}
        <div class="row mx-auto">
      <div class="col-8 mx-auto">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="row">

        <div class="col-md-4 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"/>
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>

            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card">
                <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>
            </div>
        </div>

         
        </div>
            </div>
            {groupedArticles?groupedArticles.map(CardsMap):<></>   } 

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> 
        </div> 
        </div>
          </>
    );
}

export default CardsRender;
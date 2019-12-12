//const news=`https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=6482a11334a34ec2a28ca248ace00601`;
// science News url:-https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6482a11334a34ec2a28ca248ace00601

const ScienceApiUrl =` https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=6482a11334a34ec2a28ca248ace00601`;

window.fetch(ScienceApiUrl).then(data => {
    data.json().then(sciencenews => {
        console.log(sciencenews);
        let scienceData = sciencenews.articles;
        let output ="";
        for(let science of scienceData){
            output += `
            
            <h1 class="h1Title"> <a href="${science.url}" target==_black>${science.title}</a></h1>
            <p>${science.description}</p>
            <img src="${science.urlToImage}"/>
            <p>${science.publishedAt}</p>
            `
        }
        document.getElementById("left").innerHTML=output;
        //
    }).catch(err => console.log(err))
}).catch(err => console.log(err));

//-------time---------------------------------------

setInterval(()=>{
    var time = new Date().toLocaleTimeString();
document.getElementById("time").innerHTML = `${time}`;
},1000);

//------date-----------------------------------------

//var day =new Date().getVarDate();
//---------------------------------Entertainment-------------------------------------------------------------
//https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6482a11334a34ec2a28ca248ace00601



const EntUrl =`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=6482a11334a34ec2a28ca248ace00601`;

window.fetch(EntUrl).then(data => {
    data.json().then(entnews => {
        console.log(entnews);
        let entData = entnews.articles;
        let output ="";
        for(let ent of entData){
            output += `
            
            <h1 class="h1Title"><a href="${ent.url}" target==_black>${ent.title}</a></h1>
            <p>${ent.description}</p>
            <img src="${ent.urlToImage}"/>
            <p>${ent.publishedAt}</p>
            `
        }
        document.getElementById("right").innerHTML=output;
        //
    }).catch(err => console.log(err))
}).catch(err => console.log(err));

//---------------------------------------------------------------------------------------------------------

const topHeadlineUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=6482a11334a34ec2a28ca248ace00601`;

window.fetch(topHeadlineUrl).then(data => {
    data.json().then(topnews => {
        console.log(topnews);
        let topData = topnews.articles;
        let output ="";
        for(let top of topData){
            output += `
            <div class="container topnewss">
            <h1 class="h1Title"><a href="${top.url}" target==_black>${top.title}</a></h1>
            <p class="topnews">${top.description}</p>
            <img src="${top.urlToImage}"/>
            <p class="topnews">${top.publishedAt}</p>
            </div>
            `
        }
        document.getElementById("middle").innerHTML=output;
        //
    }).catch(err => console.log(err))
}).catch(err => console.log(err));




















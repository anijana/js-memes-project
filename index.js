
fetch('https://meme-api.herokuapp.com/gimme').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1 = "";
    completedata.map((values)=>{
        data1+=`<div class="app">
        <h1 class="title">${values.title}</h1>
        <img src="${values.preview}" alt="img" class="images">
        <p>${values.subreddit}</p>
        <p class="category">${values.author}</p>
        <p class="price">${values.postLink}/p>
    </div>`
    });
    document.getElementById("apps").innerHTML=data1;
}).catch((err)=> {
    console.log(err);
})
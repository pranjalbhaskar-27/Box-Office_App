let data;
let movie;

async function  searchMovie(){
    movie=document.getElementById('query').value
    if(movie==''){
        movies_div.innerHTML='';
        document.getElementById('display').innerHTML=''
        document.getElementById('movies').setAttribute('height','0px')
    }
    console.log(movie)
    try{
        
        let res= await fetch(`https://www.omdbapi.com/?apikey=5b5aa029&s=${movie}`);
        data = await res.json();
        console.log(data)
        return data.Search;

        
    }
    catch (err){
        console.log('err:',err)
    }
}
// console.log('111d',data)
async function main(){
    let data = await searchMovie();
     if(data===undefined){
         return false
     }
     appendData(data)
    //  kuchbhi(data)
    console.log('data:',data)
}
let movies_div=document.getElementById('movies')
function appendData(movies){
    // console.log(movies[0])
    // movies_div.innerHTML=''
    movies_div.innerHTML=null;
    movies.forEach(function(el) {
        let p=document.createElement('p')

        p.innerText=el.Title
        
            let div1=document.createElement('div');
            div1.setAttribute('class','div1')
            div1.onclick=function touch(){
            document.getElementById('display').innerHTML=''
            movies_div.innerHTML=null;
            let divd=document.createElement('div')
            let imgd=document.createElement('img')
            imgd.src=el.Poster
            let textdiv=document.createElement('div');
        textdiv.setAttribute('id','textDiv')
            let pd=document.createElement('p')
            pd.innerText=el.Title
            let divtext=document.createElement('div');
        divtext.setAttribute('id','divText')
            let pyrd=document.createElement('p')
            pyrd.innerText=el.Year
            textdiv.append(pd)
            divtext.append(pyrd)
            divd.append(imgd,textdiv,divtext)
            document.getElementById('display').append(divd)
        }

        let div2=document.createElement('div');
        div2.setAttribute('id','div2')
        // div2.setAttribute('onclick',urladd)

        let div3=document.createElement('div');
        div3.setAttribute('id','div3')

        let img1=document.createElement('img')
        img1.setAttribute('id','image')
        img1.src=el.Poster

        div2.append(img1)
        div3.append(p)
        div1.append(div2,div3)
        
        movies_div.append(div1)
    });
}

//Debounce-----------------
//func--main()

let timerId
function debounce(func, delay){

    if(timerId){
        clearTimeout(timerId)
    }
   timerId= setTimeout(function(){
        func();
    },delay);
}
document.addEventListener('onclick', function clearMovie(){
    movies_div.innerHTML=null;
})


// let timerId;
// function debounce(func, delay){
//     if(timerId){
//         clearTimeout(timerId)

//     }
//     setTimeout(function(){
//         func();
//     },delay);
// }
// ------------------done-------------------------


// let url='';
// document.getElementById("query").addEventListener("click", urladd)
// function urladd(event){
//     // event.preventDefault();
//     var u=document.querySelector('#inp').value
    
//     url='http://www.omdbapi.com/?apikey=68a7d082&t='+u;
//     getData()
//     console.log(u);
// }



// let myrequest=fetch(url);


// const cont=document.querySelector('#container');


    // async function getData(){
    //     let data1=[];
        
    //     try{
    //         let res = await fetch(url);
    //         console.log('red',res)
    //         let data = await res.json();
    //         console.log("data:",data)
    //         console.log(data.Error)
    //         if(data.Error=='Movie not found!' ){
    //             errorDisplay()
    //         }else{
    //             data1.push(data)
    //             console.log('d1',data1)
    //             kuchbhi(data1);
    //         }
            
    //     }
    //     catch(err){
    //         console.log("err:", err)
    //     }
    
    // }
    // getData()
    // function errorDisplay(){
    //     cont.innerHTML=''
        
    //     let diverr=document.createElement('div')
    //     diverr.setAttribute('id','error')
    //     let imgerror=document.createElement('img')
    //     imgerror.src='https://i.gifer.com/DKke.gif';
    //     diverr.append(imgerror)
    //     cont.append(diverr)
    // }



    // function kuchbhi(data1){
    //     console.log('d',data1)
    //     data1.forEach(function (element){
    //         cont.innerHTML=''
    //         // console.log("element:", element.Poster);
    //         let divc=document.createElement('div')
    //         divc.setAttribute('id','cont')
    //         let img1=document.createElement('img')
    //         // img1.setAttribute('id','imgp')
    //         img1.src=element.Poster
    //         // console.log(element.Poster);
    //         let title=document.createElement('h3')
    //         // title.setAttribute('id','title')
    //         title.innerText=element.Title
    //         let div2=document.createElement("div")
    //         div2.setAttribute("id", "Div2")
    //          let recom =document.createElement("p")
    //          recom.textContent="Recommended!!!"
    //         div2.append(recom)
    //         let rating=document.createElement('p')
    //         rating.setAttribute('id','rating')
    //         rating.innerText=element.imdbRating
    //         if(element.imdbRating>8.5){
    //             divc.append(div2,img1,title,rating)
    //             cont.append(divc)
    //         }
    //         else{
    //             divc.append(img1,title,rating)
    //             cont.append(divc)
    //         }

            
    //     });
    // }




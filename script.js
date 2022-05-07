async function foo(){
    try{
    var res=await fetch('https://source.unsplash.com/random');
    var res1=res.url;
    console.log(res1);
    var image=document.getElementById('finalimg');
    image.setAttribute('src',`${res1}`);
    var result=document.getElementById('randomimg').innerHTML=image;
    console.log(result);
    }catch(err){
      console.log(err);
    }
  }
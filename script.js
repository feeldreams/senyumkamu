var aa=0,vketik;
  function fmketik1(){
  wallpaper.style="transform: scale(1);";
  mketik1();
}
function mketik1() {if(aa<vketik.length){kalimat.innerHTML += vketik.charAt(aa);aa++;setTimeout(mketik1,55);}}

var ab=0,vketika;
function fmketik2(){
  kalimat.innerHTML="";
  wallpaper.style="transform: scale(1.5);";
  fthilang();ftganti=1;setTimeout(ftmuncul,200);
  mketik2();
}
function mketik2() {if(ab<vketika.length){kalimata.innerHTML += vketika.charAt(ab);ab++;setTimeout(mketik2,55);}}
  
  var ac=0,vketikb;
function fmketik3(){
  wallpaper.style="transform: scale(1);";
  fthilang();ftganti=2;setTimeout(ftmuncul,200);
  mketik3();
}
function mketik3() {if(ac<vketikb.length){kalimatb.innerHTML += vketikb.charAt(ac);ac++;setTimeout(mketik3,55);} if(ac==vketikb.length){setTimeout(tombol,700)}}

  function dilanjut(){wallpaper.style="transform: scale(1.5);";setTimeout(otomatis2,300);fthilang();ftganti=10;setTimeout(ftmuncul,300);Tombol.style="opacity:0;transform: scale(.1);";jikatom=1;setTimeout(tombol,1000);}
  
  function otomatis() {befanimkata();setTimeout(animkata,400);} 
  function befanimkata(){kalimat.style="transform:scale(.3);";kalimatb.style="transform:scale(.3);";kalimatc.style="transform:scale(.3);";} 
  function animkata() {kalimat.style="transform:scale(1);";kalimatb.style="transform:scale(1);";kalimatc.style="transform:scale(1);";}
  
  function otomatis2() {
    kalimat.innerHTML = kalimat2.innerHTML;
    kalimata.innerHTML="";kalimatb.innerHTML="";
  }

  function otomatis3() {befanimkata3();setTimeout(animkata3,700);fthilang();ftganti=1;setTimeout(ftmuncul,300);} 
  function befanimkata3(){kalimat.style="";kalimatb.style="";kalimat.style="opacity:0";kalimatb.style="opacity:0";} 
  function animkata3() {kalimat.innerHTML = kalimat3.innerHTML + balasan;kalimatb.innerHTML = kalimatb3.innerHTML;kalimat.style="opacity:1;font-size:18px;transition:none";kalimatb.style="opacity:1;font-size:17px;font-weight:400;transition:none";}
  
  function ftmuncul(){
    if(ftganti==0){fotoakhir.style="display:inline-flex;transition:all .7s ease;opacity:1;transform:scale(1)";}
    if(ftganti==1){fotoakhir.src = fotoakhir1.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==2){fotoakhir.src = fotoakhir2.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==3){fotoakhir.src = fotoakhir3.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==4){fotoakhir.src = fotoakhir4.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==5){fotoakhir.src = fotoakhir5.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==6){fotoakhir.src = fotoakhir6.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
    if(ftganti==10){fotoakhir.src = fotoAkhir.src;fotoakhir.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(1);";}
  }

  document.getElementById('loveIn').onclick = function(){
    loveIn.style="transition:all .8s ease;transform:scale(15);opacity:0";
    ftAwal.style="opacity:0";
    ket.style="display:none";
    setTimeout(fmulaikonten,300);setTimeout(mulaikonten,300)
  }
  function fmulaikonten(){
    fungsi=1;ftAwal.style="display:none";loveIn.style="display:none";
    Content.style = "opacity:1;margin-top:4vh;";
    bodyblur.style="opacity:.3;animation:none";
    wallpaper.style="transform: scale(1);";
    bq.style = "display:block;margin-top:0;";
    audio.play();ftganti=0;ftmuncul();
  }
  function fthilang(){
    fotoakhir.style="display:inline-flex;opacity:.5;transition:all .7s ease;transform:scale(.1)";
  }
  function jjfoto(){
    fotoakhir.style.animation="rto .8s infinite alternate";
  }
  function tombol(){
  Tombol.style="opacity:1;transform: scale(1);margin-top:15px";
  if(jikatom==0){ftom=1;}
  if(jikatom==1){tmbl.innerHTML=tmbl2.innerHTML;ftom=2;}
}
  
function multifungsi(){
  if(ftom==1){dilanjut();}
  if(ftom==2){dibalas();}
  if(ftom==5){menuju();}
}
  
function stakhir(){tmbl.innerHTML="Kirim";Tombol.style="opacity:1;transform: scale(1)";ftom=5;fungsi=0;}

async function dibalas(){
  setInterval(createHeart,200);
  wallpaper.style="transform: scale(1)";
  Tombol.style="opacity:0;transform: scale(.1);";
  Content.style = "transition:all 1s ease;opacity:1;margin-top:7vh;";
  jawab();
}

let buyingPrice =document.querySelector("input[name=purchasedPrice]"),
stockQnty=document.querySelector("input[name=stockQnt]"),
currentPrice=document.querySelector("input[name=currentPrice]"),
checkbtn=document.querySelector("#check"),
para=document.querySelector("#status");
checkbtn.addEventListener("click",clickHandler);
var fail=document.querySelector("#loss");
var bgcolor=["#4B371A","#598335"];
var gif = document.getElementById("gif");
var audio=document.querySelector("#profit");
    
function clickHandler(event)
{
  if(stockQnty.value==='' || currentPrice.value==='' || buyingPrice.value==="")
  {
    alert("Input cannot be empty !");
  }
  else if(isNaN(stockQnty.value)|| isNaN (currentPrice.value)|| isNaN(buyingPrice.value)  )
  {
    alert("Not a Number Detected !Enter Valid Inputs !!");
  }
  else
  {
   getProfitLoss();
  }
}

function getProfitLoss()
{
    var bPrice=(Number.parseFloat(buyingPrice.value));
    var stck=(Number.parseInt(stockQnty.value));
    var cPrice=(Number.parseFloat(currentPrice.value));
    var total=stck*bPrice;
    var currentTotal=cPrice*stck;
    
    if(currentTotal>=total)
    {
      var absProfit=currentTotal-total;
      var centProfit=(absProfit/total)*100; 
      document.querySelector("body").style.background=bgcolor[1];
      audio.play();
      setTimeout(() => {
        audio.pause();
      },10000);
      
      para.innerHTML=`Absolute Profit = ₹ ${absProfit}  Profit = ${centProfit.toFixed(2)}%` + "👍";
      para.style.display = 'block';
      gif.innerHTML=`<img src="profit.gif" width="400px" height="150px">`;
      }
      else{
        var absLoss=Math.abs(currentTotal-total);
        var centLoss=(absLoss/total)*100;
        fail.play();
        setTimeout(() => {
                          fail.pause();
                          },10000);
        if(centLoss>40)
        { 
          document.querySelector("body").style.background=bgcolor[0];
        }
      
        para.innerHTML=`Absolute Loss =₹ ${absLoss}\n Loss = ${centLoss.toFixed(2)}%` + "👎";
        para.style.display = 'block';
        gif.innerHTML=`<img src=loss.gif width=400px height=150px>`;

      }
}


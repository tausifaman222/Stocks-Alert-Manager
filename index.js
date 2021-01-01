let buyingPrice =document.querySelector("input[name=purchasedPrice]"),
stockQnty=document.querySelector("input[name=stockQnt]"),
currentPrice=document.querySelector("input[name=currentPrice]"),
checkbtn=document.querySelector("#check"),
para=document.querySelector("#status");
checkbtn.addEventListener("click",clickHandler);
var bgcolor=["#4B371A","#598335"];
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
      para.innerHTML=`Absolute Profit(INR )=${absProfit}  Profit %=${centProfit}` + "👍";
      }
      else{
        var absLoss=Math.abs(currentTotal-total);
        var centLoss=(absLoss/total)*100; 
        document.querySelector("body").style.background=bgcolor[0];
        para.innerHTML=`Absolute Loss =${absLoss}\n %-tage Loss=${centLoss}` + "👎";

      }
}

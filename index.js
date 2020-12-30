let buyingPrice =document.querySelector("input[name=purchasedPrice]"),
stockQnty=document.querySelector("input[name=stockQnt]"),
currentPrice=document.querySelector("input[name=currentPrice]"),
checkbtn=document.querySelector("#check"),
para=document.querySelector("#status");
checkbtn.addEventListener("click",clickHandler);

function clickHandler(event)
{
   getProfitLoss();
}
function getProfitLoss()
{
    var bPrice=(Number.parseFloat(buyingPrice.value));
    var stck=(Number.parseInt(stockQnty.value));
    var cPrice=(Number.parseFloat(currentPrice.value));
    var total=stck*bPrice;
    
    if(cPrice>=total)
    {
      var absProfit=cPrice-total;
      var centProfit=(absProfit/total)*100; 
      para.innerHTML=`Absolute Profit =${absProfit}\n%-tage Profit=${centProfit}`;
      }
      else{
        var absLoss=Math.abs(cPrice-total);
        var centLoss=(absLoss/total)*100; 
        para.innerHTML=`Absolute Loss =${absLoss}\n%-tage Loss=${centLoss}`;

      }
}

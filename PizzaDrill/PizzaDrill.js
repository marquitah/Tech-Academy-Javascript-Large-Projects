
       // function order() {
        //    var x = document.getElementById("receipt");
        //    if (x.style.display === "none") {
        //      x.style.display = "none";
        //    } else {
        //      x.style.display = "block";
      //      }
      //    }

      //  function cancel() {
       //     var x = document.getElementById("receipt");
       //     if (x.style.display === "block") {
       //         x.style.display = "none";
       //     } else {
       //         x.style.display = "none";
       //     }
       // } 
    


         <!--Receipt Popup-->

        var getReceipt = 0;
         

         function getReceipt() {
            var text1 = "You Ordered: ";
            var runningTotal = 0;
            var sizeTotal = 0;
            var sizeArray = document.getElementsByClassName("size");
        }
            for (var i = 0; i < sizeArray.length; i++) {
                if (sizeArray[i].checked) {
                    var selectedSize = sizeArray[i].value;
                    text1 = text1 + selectedSize + "<br>";
                }
            }

            if (selectedSize === "Personal") {
                sizeTotal = 6;
            } else if (selectedSize === "Medium") {
                sizeTotal = 10;
            } else if (selectedSize === "Large") {
                sizeTotal = 14;
            } else if (selectedSize === "Extra Large") {
                sizeTotal = 16;
            }

            runningTotal = sizeTotal;
            console.log(selectedSize+" = $" + sizeTotal + ".00");
            console.log("size" + text1);
            console.log("Subtotal: $" + runningTotal + ".00");
            getMeat(runningTotal,text1);

            function getMeat(runningTotal,text1) {
	        var meatTotal = 0;
	        var selectedMeat = [];
            var meatArray = document.getElementsByClassName("meats");
            
            for (var j = 0; j < meatArray.length; j++) {
	            if (meatArray[j].checked) {
		        selectedMeat.push(meatArray[j].value);
		        console.log("Selected meat item: ("+meatArray[j].value+")");
		        text1 = text1+meatArray[j].value+"<br>";
                    }
                }
                var meatCount = selectedmeat.length;
                if (meatCount > 1) {
                    meatTotal = (meatCount - 1);
                } else {
                    meatTotal = 0;
                }	
                
                runningTotal = (runningTotal + meatTotal);
                console.log("total selected meat items: "+ meatCount);
                console.log(meatCount+" meat - 1 free meat = "+"$"+ meatTotal+".00");
                console.log("meat text1: "+text1);
                console.log("Purchase Total: "+"$"+ runningTotal+".00");
                document.getElementById("getReceipt").innerHTML=text1;
                document.getElementById("getReceipt").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
            };		
                    
        
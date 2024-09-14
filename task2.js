let displayStr="";
let points = prompt("Please enter exam points value:")
//(a)
let ifStr="";
if(points>90)
ifStr="A";
else if (points >80)
 ifStr="B"
else if (points >70)
 ifStr="C"
else if (points >60)
ifStr="D"


else
ifStr="F"

document.getElementById("result").textContent = "The grade is (a)" + ifStr;


let switchStr = "";
      switch (true) {
         case points > 90:
            switchStr = "switch: A";
            break;
         case points > 80:
            switchStr = "switch: B";
            break;
         case points > 70:
            switchStr = "switch: C";
            break;
         case points > 60:
            switchStr = "switch: D";
            break;


         default:
            switchStr = "F"
      }
      document.getElementById("result").textContent = `The grade is (a)" + ${ifStr}  ${switchStr}`;
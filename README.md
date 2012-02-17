# Dice roller for ShadowRun

---

### Run in browser on any device. Uses jQuery Mobile. Android APK available.


[![roller-html] (https://github.com/bdelaney/RollerApp/raw/master/Assets/roller.PNG)]

---

```javascript
      function rollDice(){
          rTotal++;
          var inDice=$('#slider-0').val(),
              i=0,
              sixes=0,
              rolls=[];
          while (i<inDice){
              rolls[i]=1 + Math.floor(Math.random() * 6)
              if(rolls[i]==6) {sixes++}; //6
              i++;
              }
          if ($('#flip6').val()=='on') {allRolls=allRolls.concat(rolls)} else {allRolls=rolls};
          i=0;
          var outDice = '',
              hits = 0,
              ones = 0;
          for (i=0; i < allRolls.length; i++) {
          if (allRolls[i]==6 || allRolls[i]==5) {hits++};
          if (allRolls[i]==1) {ones++};
          }
          outDice = allRolls.join(',');
          if ($('#flipX').val()=='on') {hTotal=hTotal+hits};
          $('#diceResults').val(outDice);
          $('#hitCount').val(hits);
          $('#oneCount').val(ones);
          $('#rollCount').val(rTotal);
          if ($('#flipX').val()=='on') {$('#hitTotal').val(hTotal)};
          if ($('#flip6').val()=='on' && sixes>0 ) {$('#slider-0').val(sixes).slider('disable')};   //6
          if ($('#flip6').val()=='on' && sixes==0 ) {$('#slider-0').val(0).slider('disable')};
        }
        ```
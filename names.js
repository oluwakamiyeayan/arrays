
       
      let liist = [" Niniola", "Bello", "Tello","Seunfunmi"]  // array
      let container = document.getElementById('list-container')
      container.innerHTML = liist
      let liist2 = liist
       // thisn will display  array on screen
      let list = document.getElementById('list') // declare input
      let firstInput = document.getElementById('first')
      let thirdInput = document.getElementById('third')
      let forthInput = document.getElementById('forth')
      let fifthInput = document.getElementById('fifth')
      let start = document.getElementById('start')
      let dcount = document.getElementById('dcount')
      
      function unshift(){
      liist.unshift(firstInput.value)
      container.innerHTML = liist 
      }
      function sliceHere(){
      container.innerHTML = liist 
      // container.innerHTML = liist.slice(0, -1) //if statement should be able to give me variety of function of continious removal of arrays
      let ssplice = liist.slice(0, -1)
      liist = ssplice // yeah  finally 🙌😂😊
      }
      function pushHere(){
      // liist.push('Olawumi', 'Ope')
      // console.log(liist)
      // container.innerHTML = liist2 // this is a way when there is no input

      // when you input
      liist.push(thirdInput.value)
      container.innerHTML = liist 

      console.log(liist)
     }
     function spliceHere(){
        console.log(liist)
        let ssplice = liist.splice(Number(start.value),Number(dcount.value), forthInput.value)
        container.innerHTML = liist 
        ssplice =  liist
        console.log(liist) // there might be a need for an if else statement
      }
    function extract(){
      liist.shift(fifthInput.value)
      // console.log(liist)
      container.innerHTML = liist 
      // console.log(liist)
    }
   
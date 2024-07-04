  //store url, page_no, container, loadercontainer in diffrent variable 
  let page = 1;
  let url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
  let container = document.getElementById("div")

  let loader_cointainer = document.getElementById("loader_cointainer")

  //create class name loader
  let loader = document.createElement("div")
  loader.className = "loader"



  window.addEventListener("scroll", function () {
      //store varibale client height, scrool height, scroll top
      let clheight = document.documentElement.clientHeight;
      let scroll_height = document.documentElement.scrollHeight;
      let scroll_top = document.documentElement.scrollTop

      // scrollheight - clientHeight <= scroll_top this is true then call fetch data and pass aurgment url + page no
      if (scroll_height - clheight <= Math.ceil(scroll_top)) {
          console.log("we are on bottom")
          //if condition is true then show loader untill fetch data in not call
          loader_cointainer.append(loader)
          console.log(page);
          page++;
          fetchdata(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=6`)


      }
  })
  // if fetchdata is called then loader is remove
  loader.remove()

  //if untill window is not scroll then call global fetch data and pass url and page no 1
  fetchdata(url)

  async function fetchdata(url1) {
      try {
          let response = await fetch(url1)
          let result = await response.json()

          // get data and console data and call displaydata in pass data variable result 

          console.log(result);
          displaydata(result)


      } catch (error) {
          console.log(error)
      }
  }

  // Display data and append data here

  function displaydata(arrrr) {
      arrrr.forEach(element => {
          var card = document.createElement("div");
          card.id = "card"

          var img = document.createElement("img")
          img.src = element.url

          var title = document.createElement("h2")
          title.textContent = element.title

          var id1 = document.createElement("h4")
          id1.textContent = `S.NO - ${element.id}`


          card.append(img, title, id1)
          container.append(card)
      });
  }
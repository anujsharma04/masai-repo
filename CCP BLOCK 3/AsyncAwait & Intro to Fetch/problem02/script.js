

async function getdata() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")  
  const result = await response.json()
  result.map((ele)=>console.log(ele.name))
}


getdata()

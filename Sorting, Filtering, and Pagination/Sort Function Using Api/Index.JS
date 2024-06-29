var url = "https://jsonplaceholder.typicode.com/users"

var container = document.getElementById("container")

let short = document.querySelector("select")
short.addEventListener("change", function () {
    let shortval = short.value;
    let shorturl = `${url}?_sort=name&_order=${shortval}`
    getdata(shorturl)

})

getdata(url)

async function getdata(recurl) {
    try {
        let res = await fetch(recurl)
        let response = await res.json()
        // console.log(response)
        displaydata(response)

    } catch (error) {
        console.log(error)
    }

}

function displaydata(Arr) {
    container.innerHTML = "";
    Arr.forEach(element => {
        let card = document.createElement("div")
        card.id = "card"

        let name = document.createElement("h2")
        name.textContent = element.name

        let username = document.createElement("h3")
        username.textContent = `UserName : ${element.username}`

        let email = document.createElement("p")
        email.textContent = `Email : ${element.email}`

        let phone = document.createElement("p")
        phone.textContent = `Phone : ${element.phone}`

        let website = document.createElement("p")
        website.textContent = `Website : ${element.website}`

        let btn = document.createElement("button")
        btn.textContent = "View Detail"

        btn.addEventListener("click", function () {
            btn.remove()

            let minicard = document.createElement("div")
            minicard.id = "minicard"

            let head1 = document.createElement("h2")
            head1.textContent = "Address:-"

            let street = document.createElement("p")
            street.textContent = `Street : ${element.address.street}`

            let suite = document.createElement("p")
            suite.textContent = `Suit : ${element.address.suite}`

            let city = document.createElement("p")
            city.textContent = `City : ${element.address.city}`

            let zipcode = document.createElement("p")
            zipcode.textContent = `Zipcode : ${element.address.zipcode}`

            let close = document.createElement("button")
            close.textContent = "Close"

            let head2 = document.createElement("h2")
            head2.textContent = "Company:-"

            let cname = document.createElement("p")
            cname.textContent = `Name : ${element.company.name}`

            let catchPhrase = document.createElement("p")
            catchPhrase.textContent = `Catchphrase : ${element.company.catchPhrase}`

            let bs = document.createElement("p")
            bs.textContent = `Bs : ${element.company.bs}`

            close.addEventListener("click", function () {
                minicard.innerHTML = "";
                card.append(name, username, email, phone, website, btn)
            })

            minicard.append(head1, street, suite, city, zipcode, head2, cname, catchPhrase, bs, close)
            card.append(minicard)

        })


        card.append(name, username, email, phone, website, btn)
        container.append(card)
    });
}
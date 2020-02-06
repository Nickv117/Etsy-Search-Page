let Eitems = items.results
  .map(function(item) {
    return `<div class="item">
            <img src=${item.Images[0].url_170x135}>
            <p class="title">${item.title}</p>
            <p class="rating"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
            <p class="price">${
              item.currency_code === "GBP" ? "&pound" : "$"
            }${item.price}</p></div>`
  })
  .join("")

document.querySelector("#contents").innerHTML = Eitems

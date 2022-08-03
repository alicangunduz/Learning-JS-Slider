// Slider item
let significant = [

    {
        words : "Türk, öğün, çalış, güven.",
        name : "Mustafa Kemal ATATÜRK",
        img : "img/img1.jpg"
    } ,
    {
        words : "Doğruyu söylemekten korkmayınız. ",
        name : "Mustafa Kemal ATATÜRK",
        img : "img/img2.jpg"
    },
    {
        words : "Yüzüstü yere serilseniz bile, hala ileriye doğru hareket ediyorsunuzdur.",
        name : "Victor Kiam",
        img : "img/img3.jpg"
    },
    {
        words : "Durmadığın sürece ne kadar yavaş gittiğin önemli değil.",
        name : "Konfiçyüs",
        img : "img/img4.jpg"
    }
]
// Button varibles
let index = 0
let next = document.getElementById("next")
let prev = document.getElementById("previous")
let random = document.getElementById("random")
// Start slider
document.querySelector(".card-text").innerText = significant[index].words
document.querySelector(".card-author").innerText = significant[index].name
document.querySelector(".card-img-top").src = significant[index].img
// Next slider item
next.addEventListener("click", function(){
    index++
    if(index >= significant.length){
        index = 0
    }
    document.querySelector(".card-text").innerText = significant[index].words
    document.querySelector(".card-author").innerText = significant[index].name
    document.querySelector(".card-img-top").src = significant[index].img
    console.log(index + "Next")
})
// Previous slider item
prev.addEventListener("click", function(){
    index--
    if(index < 0){
        index = significant.length - 1
    }
    document.querySelector(".card-text").innerText = significant[index].words
    document.querySelector(".card-author").innerText = significant[index].name
    document.querySelector(".card-img-top").src = significant[index].img
    console.log(index + "Previous")
})
// Random slider item
random.addEventListener("click", function(){
    index = Math.floor(Math.random() * (significant.length - 0) )
    document.querySelector(".card-text").innerText = significant[index].words
    document.querySelector(".card-author").innerText = significant[index].name
    document.querySelector(".card-img-top").src = significant[index].img
    console.log(index + "Random")
    return index
})


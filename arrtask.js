const cars = [
  {id: 0, car: "lexus",model:"rx 350",country:"japan",price:50000,year:2015},
  {id: 1, car: "audi",model:"a4",country:"german",price:20000,year:2018},
  {id: 2, car: "bmw",model:"x5",country:"german",price:35000,year:2017},
  {id:3,car:"opel" ,country:"german",model:"astra",price:6500,year:2013},
  {id:4,car:"volkswagen" ,model:"jetta_se",country:"german",price:11000,year:2010},
  {id:5,car:"mersedes" ,country:"german",model:"GlE_450",price:60000,year:2017},
  {id:6,car:"fiat" ,model:"ducato",country:"italy",price:8000,year:2015},
  {id:7,car:"mitsubishi" ,model:"lancer",country:"japan",price:12000,year:2014},
  {id:9,car:"ferarri",model:"Scaglietti ",country:"italy",price:100000,year:2008},
  {id:10,car:"ZAZ",model:"slavuta",country:"ukraine",price:1500,year:2010}
];
const germanpriceList=[]

 const Germanmodels = cars.filter(item => item.country =="german")
 const japanModels = cars.filter(item => item.country =="japan")
 const italianModels =cars.filter(item=>item.country=="italy")

const priceList= Germanmodels.map(carprice =>{
  return carprice.price 
})
germanpriceList.push(priceList)

const amountGermanPrices =Germanmodels.reduce((amount,auto)=>amount+auto.price,0)
console.log(germanpriceList)
console.log( amountGermanPrices )
console.log(Germanmodels)
console.log(japanModels)
console.log(italianModels)



  
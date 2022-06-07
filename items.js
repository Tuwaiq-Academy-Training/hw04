const items = {Milk : 8,
    Papers:17,
    Egg:null,
    Cheese:null,
    Tissues:null,
    Biscuits:null,
    Banana:null,
    water:null,
    Bakery:null,
    Bread:null,
    Meat :null,
    Seafood:null,
    Pasta :null,
    Rice:null,
    Oil:null,
    Sauces:null,
    Salad:null,
    Cereals:null,
    Soups :null,
    Canned_Goods:null,
    Frozen_Foods:null,
    Dairy:null}


    function result() {
        for (var i in items) {
// console.log(i.length*2)
   if (i.endsWith(searchvalue = "s" , true )  ) { 
    console.log(i.length*2+3)
 } else { 
    console.log(i.length*2)
 }
 
        }   
    }
  
result()


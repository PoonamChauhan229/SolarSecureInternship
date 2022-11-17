$.ajax({
    type:"get",
    url:"https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
    success:function(response){
        console.log(response.meals)
        var meals=response.meals
        meals.map((element)=>{
            var newItem=`
                <div class='col-md-3 m-2'>
                <p>${element.strMeal}</p>
                <img src="${element.strMealThumb}" class='img-fluid'/>
                <p>${element.idMeal}</p>
                </div>           
            `
            $('#myItems').append(newItem)
        })


    },
    error:function(error){
        console.log(error)
    }
})
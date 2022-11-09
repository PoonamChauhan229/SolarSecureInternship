// async function getData(){
//     tbody=document.getElementById('tbody')
//     let data=await fetch('https://api.covid19api.com/summary')
//     let res=await data.json()
//     console.log(res.Countries)
//     res.Countries.map((element)=>{
//         tbody.innerHTML+=`
//         <tr>
//         <td>${element.Country}</td>
//         <td>${element.TotalConfirmed}</td>
//         <td>${element.TotalConfirmed-element.TotalRecovered}</td>
//         <td>${element.TotalRecovered}</td>
//         <td>${element.TotalDeaths}</td>

//     </tr>
        
//         `
//     })

// }

// getData()

// $(document).ready( function () {
//     $('#covidTable').DataTable();
// } );


$(document).ready( async function (){
    tbody=document.getElementById('tbody')
    let data=await fetch('https://api.covid19api.com/summary')
    let res=await data.json()
    console.log(res.Countries)
    res.Countries.map((element)=>{
        tbody.innerHTML+=`
        <tr>
        <td>${element.Country}</td>
        <td>${element.TotalConfirmed}</td>
        <td>${element.TotalConfirmed-element.TotalRecovered}</td>
        <td>${element.TotalRecovered}</td>
        <td>${element.TotalDeaths}</td>

    </tr>
        
        `
    })


    $('#covidTable').DataTable();
} );
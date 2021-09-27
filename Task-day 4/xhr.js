
//Task day-4

// 2 Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

//Use the same rest countries and print all countries name, region, sub region and population




const getCountries = () => {
   const xhr = new XMLHttpRequest();
   xhr.open("GET" , "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

   xhr.responseType = "json";

   xhr.onload = () => {
    //  console.log(xhr.response);
      const blogs = xhr.response;
      for (let blog of blogs) {
         console.log(blog.flag);
         console.log(blog.name);
         console.log(blog.region);
         console.log(blog.subregion);
         console.log(blog.population);
      }
   }
   xhr.send()
}

getCountries();


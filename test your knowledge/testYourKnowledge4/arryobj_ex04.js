




// convert comma-separated values into an array
let countries = csv.split(',');

// convert array into delimited string
countries.join(',');


// check if these are arrays
document.write(Array.isArray(csv));
document.write("<br>");
document.write(Array.isArray(countries));

//  sort a simple array 
countries.sort();

// reverse the sort
countries.reverse();

// remove the first element
countries.shift();

// remove the last element
countries.pop();

// add new elements to the front of the array
countries.unshift("Belize");
countries.unshift("El Salvador");

// search for element
document.write(`<p>${countries.includes("Germany")}, the array contains "Germany"</p>`);

// search for element index
document.write(`<p>${countries.indexOf("Germany")}, is the index of "Germany"</p>`);

// make a new array by extracting from another array
let newArray = countries.splice(1,2);

for (let i = 0; i < countries.length; i++)
{
   document.write(countries[i]);
   document.write("<br>");
}

document.write("<br>");

for (let i = 0; i < newArray.length; i++)
{
   document.write(newArray[i]);
   document.write("<br>");
}
document.write("<br>");
// there are other array methods which you will learn in Ch 10 */



// use a loop to output all cities whose continent=="NA"


for (let c of cities)
{
   if (c.continent == "NA")
   {
      document.write(c.city);
      document.write("<br>");
   }
   document.write("<br>");
}

// use a loop to output gallery names whose country=="USA"

for(let g of galleries)
{
   if(g.location.country == "USA")
   {
      document.write(g.name);
      document.write("<br>");
   }
}

// convert JSON colorsAsString to js object
const colors = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
document.write("<br>");
for(let color of colors)
{
   if(color.luminance < 75)
   {
      document.write(color.name);
      document.write("<br>");
   }
}

// use two nested loops - outer: loop thru colors

document.write("<br>");
for (let color of colors)
{
   document.write(color.name);
   document.write("<br>");
   let sumOfRgb = 0;
   for (let rgb of color.rgb)
   {
      sumOfRgb += rgb;
   }
   document.write(sumOfRgb);
   document.write("</br>");

}


/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */

document.write("<ul>");

for(let g of galleries)
{
   document.write("<li>");
   document.write("<a href=" + g.url + ">" + g.name + "</a>");
   document.write("</li>");
}
document.write("</ul>");



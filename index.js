

// function timeFunction() {
//     setTimeout(() => {
// d3.select();
// d3.selectAll();
// d3.select('h1').text('new something');
// //style('color', 'red').attr('class', 'heading').
// //console.log(h2);
// d3.select('body').append('p').text('First Paragraph');
// d3.select('p').style('color', 'blue');
//     }, 1000)
// };

// timeFunction();

const dataset = [1,2,3,4,5];
d3.selectAll('p');

d3.select('h1').text('new something').style('color', 'red');
//style('color', 'red').attr('class', 'heading').
//console.log(h2);
d3.select('body').append('p').text('First Paragraph');
d3.select('p').style('color', 'blue');
d3
    .select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    .text('D3 is awesome');
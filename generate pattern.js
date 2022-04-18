//pattern 1

function getpattern() 
{
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) 
    {
        for (var j = 1; j <= i; j++) {
            output += j + ' ';
        }
        console.log(output);
        output = '';
    }
}


//pattern 2


function getpattern1() 
{
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) 
    {
        for (var j = 0; j <= i; j++) 
        {
            output += j + ' ';
        }
        console.log(output);
        output = '';
    }
    
}


//pattern 3


function getpattern2() 
{
    var totalNumberofRows = 5;
    var output = '';
    for (var i = 1; i <= totalNumberofRows; i++) 
    {
        for (var j = 0; j <= i; j++) {
            output += '*';
        }
        console.log(output);
        output = '';
    }
}







getpattern();
console.log("\n");
generatePattern1();
console.log("\n");
generatePattern2();



function getpattern(n,pattern_no)
{
 if(pattern_no=1)
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

else if(pattern_no=2)
{
    var totalNumberofRows = 5;
    
    var output = '';
   
    for (var i = 1; i <= totalNumberofRows; i++) {
        
        for (var j = 0; j <= i; j++) {
            
            output += j + ' ';
        }
        
        console.log(output);
        
        output = '';
    }

    
}
else if(pattern_no=3)
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
else
{
    console.log("enter number between 1 to 3"); 
}
   //driver code
}
n=5;pattern_no=2;
   getpattern(n,pattern_no);
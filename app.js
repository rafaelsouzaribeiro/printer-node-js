var exec = require('child_process').exec;
exec('printhtml.exe file=ticket.html', function(err, data) {  
    console.log(data.toString());                       
});
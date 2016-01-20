var fs = require('fs'),
  fsTimeout,
  date;

console.log('Listening for Changes to "' + __dirname + '\\app"');

fs.watch(__dirname + '/app', function(event, filename) {
  if (!fsTimeout) {
    require('child_process').exec('cmd /c "' + __dirname + '\\nwjsPack.bat"', function(error, stdout, stderr) {
      date = new Date();
      console.log(date.getHours()+":"+date.getMinutes()+":"+(date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds()) + ' - App packed successfully.');
    });
    fsTimeout = setTimeout(function() {
        fsTimeout = null;
      }, 5000);
  }
});

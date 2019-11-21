var fs = require("fs");
var csv = require("csv-parser");
var parser = require("./parser");
var path = require("path");
var formidable = require("formidable");

function CSVtoData(filePath)
{
  var file = path.parse(filePath);
  var fileName = file.name+Date.now()+file.ext;
  console.log(fileName);
  fs.rename(filePath, file.dir+"/accepted/"+fileName, function (err)
  {
    if (err) throw err;
    console.log('File Renamed!');
  });
  if(file.ext == ".csv")
  {
    var csvData=[];
    fs.createReadStream(file.dir+"/accepted/"+fileName)
    .pipe(csv())
    .on('data', (row) => {
      csvData.push(row);
      //console.log(row);
    })
    .on('end', () => {
      console.log('Completed data: '+csvData);
      console.log('CSV file successfully processed');

    });
    return csvData;
  }
  else
  {
    console.log("not a csv file!")
  }

};

function DataToCSV(data)
{

  //TODO: Take input data and convert to CSV
};

exports.Upload = function(req)
{
  var result="";
  new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
        file.path = __dirname + '/uploads/' + file.name
        result = file.path.toString();
    })
    .on('field', (name, field) => {
      console.log('Field', name, field)
    })
    .on('file', (name, file) => {
      //console.log('Uploaded file', name, file)
    })
    .on('aborted', () => {
      console.error('Request aborted by the user')
      result = "fail";
    })
    .on('error', (err) => {
      console.error('Error', err)
      throw err
      result = "fail";
    })
    .on('end', (name, file) => {
      var readCsv = CSVtoData(result);
      //console.log('read csv data:'+readCsv);
    })
};

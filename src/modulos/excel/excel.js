import excel from 'excel4node';

const format = '.xlsx';

export default function generateExcel(headers, data, {cb, outputFile = 'output', sheetName = 'Sheet'} = {

}){
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet(sheetName);
  
    const rows = [
        ...data
    ]
  
    headers.map((header, j) => {
        const currentColumn = j + 1;
        worksheet.cell(1, currentColumn).string(header);
    })
  
    rows.map( (row, i) => {
        const currentRow = i+2;
        headers.map((header, j) => {
          const currentColumn = j+1;
          const currentValue = row[j];
        if(!currentValue){
          worksheet.cell(currentRow, currentColumn).string('');
          return
        }
        const typeOfRow = typeof currentValue;
        if(typeOfRow !== 'string' || typeOfRow !== 'number'){
            worksheet.cell(currentRow, currentColumn).string(currentValue.toString());
        }else{
            worksheet.cell(currentRow, currentColumn)[typeOfRow](currentValue);
        }
      })
    })
  
    return workbook.write(`${outputFile}${format}`, cb)
  }

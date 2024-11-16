import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Typography, TextField, Box } from '@mui/material';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import SearchIcon from '@mui/icons-material/Search';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GetAppIcon from '@mui/icons-material/GetApp';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const PdfTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchInfo, setSearchInfo] = useState('');

  const pdfs = [
    { name: 'Sample PDF', info: 'Sample info' },
    { name: 'addnane', info: 'youyoou' },
    { name: 'wayoud', info: 'wayoooud info' },
    // Add more sample data
  ];

  const filteredPdfs = pdfs.filter(pdf =>
    pdf.name.toLowerCase().includes(searchName.toLowerCase()) &&
    pdf.info.toLowerCase().includes(searchInfo.toLowerCase())
  );

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('PDF Table', 20, 10);
    doc.autoTable({
      head: [['Name', 'Information']],
      body: filteredPdfs.map(pdf => [pdf.name, pdf.info]),
    });
    doc.save('table.pdf');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        PDF Table
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          label="Search All"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSearchName(e.target.value);
            setSearchInfo(e.target.value);
          }}
          style={{ marginRight: '10px' }}
        />
        <Box>
          <IconButton onClick={exportPDF} color="primary" style={{ marginRight: '10px' }}>
            <PictureAsPdfIcon />
          </IconButton>
          <DownloadTableExcel
            filename="pdfs_table"
            sheet="pdfs"
            currentTableRef={() => document.getElementById('pdf-table')}
          >
            <IconButton color="primary">
              <SaveAltIcon />
            </IconButton>
          </DownloadTableExcel>
        </Box>
      </Box>
      <Table id="pdf-table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                label="Search Name"
                variant="outlined"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Search Info"
                variant="outlined"
                value={searchInfo}
                onChange={(e) => setSearchInfo(e.target.value)}
                size="small"
              />
            </TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Information</TableCell>
            <TableCell>Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPdfs.map((pdf, index) => (
            <TableRow key={index}>
              <TableCell>{pdf.name}</TableCell>
              <TableCell>{pdf.info}</TableCell>
              <TableCell>
                <IconButton variant="contained" color="primary">
                  <GetAppIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default PdfTable;

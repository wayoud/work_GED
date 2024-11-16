import React, { useState } from 'react';
import { Container, Button, TextField, Typography, Grid, Paper, Box } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
});

const PdfReader = () => {
  const [files, setFiles] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const handlePdfClick = (pdf) => {
    const fileURL = URL.createObjectURL(pdf);
    setSelectedPdf(fileURL);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        PDF Reader
      </Typography>
      <Box mb={2}>
        <input
          type="file"
          multiple
          accept="application/pdf"
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="upload-pdf"
        />
        <label htmlFor="upload-pdf">
          <Button variant="contained" color="primary" component="span">
            Upload PDF
          </Button>
        </label>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h6">Uploaded PDFs</Typography>
            <Box mt={2} sx={{ maxHeight: '400px', overflowY: 'auto' }}>
              {files.map((file, index) => (
                <StyledButton
                  key={index}
                  onClick={() => handlePdfClick(file)}
                  fullWidth
                  style={{ marginBottom: '10px' }}
                >
                  {file.name}
                </StyledButton>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: '20px', height: '100%' }}>
            {selectedPdf ? (
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Box sx={{ height: '400px', overflowY: 'auto' }}>
                  <Viewer fileUrl={selectedPdf} />
                </Box>
              </Worker>
            ) : (
              <Typography variant="body1">No PDF selected</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Paper style={{ padding: '20px' }}>
          <form>
            <TextField label="PDF Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Date" type="date" variant="outlined" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
            <TextField label="Declaration" variant="outlined" fullWidth margin="normal" />
            <TextField label="Responsible" variant="outlined" fullWidth margin="normal" />
            <TextField label="Date of Occurrence" type="date" variant="outlined" fullWidth margin="normal" InputLabelProps={{ shrink: true }} />
            <TextField label="Type of PDF" variant="outlined" fullWidth margin="normal" />
            <TextField label="Source" variant="outlined" fullWidth margin="normal" />
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Save
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default PdfReader;

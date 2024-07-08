import { useState } from 'react';
import Papa from 'papaparse';

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.moe.gov.ae/SchoolsMap/api/SchoolsMap/GetAllSchools');
      const jsonData = await response.json();
      setData(jsonData);

      // Convert data to CSV format
      const csvData = Papa.unparse(jsonData);

      // Create a Blob object with the CSV data
      const blob = new Blob([csvData], { type: 'text/csv' });

      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = 'schools_data.csv';

      // Trigger the download
      downloadLink.click();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Download CSV</button>
    </div>
  );
}

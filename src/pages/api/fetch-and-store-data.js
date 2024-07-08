// pages/api/fetch-and-store-data.js
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import Papa from 'papaparse';

export default async function handler(req, res) {
    try {
        // Fetch data from the API
        const response = await fetch('https://www.moe.gov.ae/SchoolsMap/api/SchoolsMap/GetAllSchools');
        const data = await response.json();

        // Convert data to CSV
        const csv = Papa.unparse(data);

        // Write CSV data to file
        const filePath = path.join(process.cwd(), 'schools.csv');
        fs.writeFileSync(filePath, csv);

        res.status(200).json({ message: 'Data fetched and stored as CSV.' });
    } catch (error) {
        console.error('Error fetching and storing data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

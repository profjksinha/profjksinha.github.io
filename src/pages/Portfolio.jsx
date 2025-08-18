import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function Portfolio() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Starting fetch...");
    fetch("/CV/Publications.xlsx")
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.arrayBuffer();
      })
      .then((data) => {
        console.log("Received data, parsing...");
        const workbook = XLSX.read(data, { type: "array" });
        console.log("Workbook sheets:", workbook.SheetNames);
        
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        console.log("Raw Excel data:", jsonData);
        
        // Skip header and filter out empty rows
        const rows = jsonData.slice(1).filter(row => row.some(cell => cell !== null && cell !== undefined && cell !== ''));
        
        const formattedData = rows.map((row) => ({
          title: row[0] || "Untitled Publication",
          journal: row[1] || "",
          authors: row[2] || "Anonymous",
          year: row[3] || "",
          link: row[4] || "#",
        }));
        
        console.log("Formatted data:", formattedData);
        setTimelineData(formattedData);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  // Loading and error states
  if (loading) {
    return (
      <article className="portfolio" data-page="portfolio" style={{ display: "block", color: "black", padding: "20px" }}>
        <h2 className="h2 article-title">Publications</h2>
        <p>Loading publications...</p>
      </article>
    );
  }

  if (error) {
    return (
      <article className="portfolio" data-page="portfolio" style={{ display: "block", color: "black", padding: "20px" }}>
        <h2 className="h2 article-title">Publications</h2>
        <div style={{ color: "red" }}>
          Error: {error}
          <br />
          Please ensure:
          <ul>
            <li>The file "Publications.xlsx" exists in the /CV folder</li>
            <li>The file contains data in the correct format</li>
          </ul>
        </div>
      </article>
    );
  }

  if (timelineData.length === 0) {
    return (
      <article className="portfolio" data-page="portfolio" style={{ display: "block", color: "black", padding: "20px" }}>
        <h2 className="h2 article-title">Publications</h2>
        <p>No publications found in the Excel file.</p>
      </article>
    );
  }

  return (
    <article
      className="portfolio"
      data-page="portfolio"
      style={{ display: "block", color: "black" }}
    >
      <br />
      <br />
      <header>
        <div style={{ display: "flex" }}>
          <h2 className="h2 article-title">Publications</h2>
        </div>
      </header>

      <section className="timeline">
        <ol className="timeline-list force-left">
          {timelineData.map((item, index) => (
            <li className="timeline-item" key={index} style={{ marginBottom: "15px" }}>
              <h4 className="h4 timeline-item-title">
                {item.link !== "#" ? (
                  <a
                    className="anchor-text"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0066cc" }}
                  >
                    {item.title}
                  </a>
                ) : (
                  item.title
                )}
              </h4>
              {item.journal && <p className="timeline-text">{item.journal}</p>}
              {item.authors && (
                <p className="timeline-text" style={{ fontStyle: "italic" }}>
                  {item.authors}
                </p>
              )}
              {item.year && <span style={{ display: "block", marginTop: "5px" }}>{item.year}</span>}
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
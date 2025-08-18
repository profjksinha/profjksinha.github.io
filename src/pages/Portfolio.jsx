import React, { useEffect, useState, useMemo } from "react";
import * as XLSX from "xlsx";

// Memoized publication item component
const PublicationItem = React.memo(({ item }) => (
  <li className="timeline-item" style={{ marginBottom: "15px" }}>
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
));

export default function Portfolio() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize the formatted data processing
  const processExcelData = useMemo(() => {
    return (data) => {
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      return jsonData.slice(1)
        .filter(row => row.some(cell => cell != null && cell !== ''))
        .map((row) => ({
          title: row[0] || "Untitled Publication",
          journal: row[1] || "",
          authors: row[2] || "Anonymous",
          year: row[3] || "",
          link: row[4] || "#",
        }));
    };
  }, []);

  useEffect(() => {
    console.log("Starting fetch...");
    fetch("/CV/Publications.xlsx")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.arrayBuffer();
      })
      .then((data) => {
        const processedData = processExcelData(data);
        console.log("Processed data:", processedData);
        setTimelineData(processedData);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [processExcelData]);

  // Memoize the rendered list
  const renderedPublications = useMemo(() => (
    <ol className="timeline-list force-left">
      {timelineData.map((item, index) => (
        <PublicationItem key={`${index}-${item.title}`} item={item} />
      ))}
    </ol>
  ), [timelineData]);

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
        </div>
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
        {renderedPublications}
      </section>
    </article>
  );
}
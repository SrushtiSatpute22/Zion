import React, { useState, useEffect } from "react";
import "./DropDown.css";
const DropDown = ({
  countries,
  setCountries,
  selectedCountry,
  setSelectedCountry,
  documents,
  setDocuments,
  selectedDocument,
  setSelectedDocument,
}) => {
  // Fetch the list of countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch documents for the selected country
  useEffect(() => {
    const fetchDocuments = async () => {
      if (selectedCountry) {
        // Replace 'your-api-endpoint' with the actual endpoint to fetch documents for a country
        try {
          const response = await fetch(
            `your-api-endpoint?country=${selectedCountry}`
          );
          const data = await response.json();
          setDocuments(data);
        } catch (error) {
          console.error("Error fetching documents:", error);
        }
      }
    };

    fetchDocuments();
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedDocument("");
  };

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  return (
    <div className="dropDownContainer">
      <label style={{ fontSize: 18, fontWeight: "100" }}>Select Country:</label>
      <select
        className="select"
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">-- Select Country --</option>
        {countries.map((country) => (
          <option className="option">{country.name.common}</option>
        ))}
      </select>

      <div className="dropDownContainer">
        <label style={{ fontSize: 18, fontWeight: "100" }}>Select State:</label>
        <select
          className="select"
          id="document"
          value={selectedDocument}
          onChange={handleDocumentChange}
        >
          <option className="option" value="">
            -- Select State --
          </option>
          {documents.map((document) => (
            <option className="option" key={document.id} value={document.id}>
              {document.name}
            </option>
          ))}
        </select>
      </div>

      {selectedDocument && (
        <div>
          <h2>Details for {selectedDocument}:</h2>
          {/* Display details for the selected document here */}
        </div>
      )}
    </div>
  );
};

export default DropDown;

import React, { useState } from "react";
import axios from "axios";
import Papa from 'papaparse';

function DataTransformation() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [showFileNameInput, setShowFileNameInput] = useState(false);
    const [showFileNameInput2, setShowFileNameInput2] = useState(false);
    const [showFileNameInput3, setShowFileNameInput3] = useState(false);
    const [showFileNameInput4, setShowFileNameInput4] = useState(false);
    const [showFileNameInput5, setShowFileNameInput5] = useState(false); // New state for removing duplicates
    const [renameColumnFrom, setRenameColumnFrom] = useState('');
    const [renameColumnTo, setRenameColumnTo] = useState('');
    const [removeColumnName, setRemoveColumnName] = useState('');
    const [mergeColumnName1, setMergeColumnName1] = useState('');
    const [mergeColumnName2, setMergeColumnName2] = useState('');
    const [mergeColumnName3, setMergeColumnName3] = useState('');
    const [newTableName, setNewTableName] = useState('');
    const [removeDuplicatesKey, setRemoveDuplicatesKey] = useState(''); // New state for duplicate key fields

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
  
      if (file) {
          const reader = new FileReader();
  
          reader.onload = (event) => {
              Papa.parse(event.target.result, {
                  complete: (result) => {
                      // Merge duplicate columns
                      const mergedData = mergeDuplicateColumns(result.data);
                      setTableData(mergedData);
                  },
                  header: true,
              });
          };
  
          reader.readAsText(file);
      }
  };
  
  const mergeDuplicateColumns = (data) => {
      // Find duplicate column names
      const duplicateColumns = Object.keys(data[0]).reduce((acc, key, index, array) => {
          if (array.indexOf(key) !== index) {
              acc[key] = true;
          }
          return acc;
      }, {});
  
      // Merge duplicate columns by concatenating values
      return data.map(row => {
          Object.keys(row).forEach(key => {
              if (duplicateColumns[key]) {
                  const mergedKey = key;
                  row[mergedKey] = row[key];  // Merge values into one column
                  delete row[key];  // Delete duplicate column
              }
          });
          return row;
      });
  };    




    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', selectedFile);

        if (renameColumnFrom && renameColumnTo) {
            formData.append('rename_column_old', renameColumnFrom);
            formData.append('rename_column_new', renameColumnTo);
        }

        if (removeColumnName) {
            formData.append('remove_column_name', removeColumnName);
        }

        if (mergeColumnName1 && mergeColumnName2 && mergeColumnName3) {
            formData.append('table1_name', mergeColumnName1);
            formData.append('table2_name', mergeColumnName2);
            formData.append('merge_key', mergeColumnName3);

        }

        if (showFileNameInput4 && newTableName.trim() !== '') {
            formData.append('table_name', newTableName);
        }

        if (showFileNameInput5 && removeDuplicatesKey.trim() !== '') { // Check if showFileNameInput5 is checked and removeDuplicatesKey is not empty
            formData.append('remove_duplicates_key', removeDuplicatesKey); // Use remove_duplicates_key as the parameter name
        }

        try {
            const response = await axios.post('http://localhost:8000/cleanData', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                alert("Data cleaned successfully!");
            } else {
                alert("Data cleaning failed!");
            }
        } catch (error) {
            alert("An error occurred while cleaning data!");
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded'>
                <h1 style={{ color: 'Tomato' }}>Data Transformation</h1><br />
                <h2>File Table</h2>
                <input type="file" onChange={handleFileChange} />
                {selectedFile && (
                    <div>
                        <h2>Table Contents:</h2>
                        <table>
                            <thead>
                                {tableData.length > 0 && (
                                    <tr>
                                        {Object.keys(tableData[0]).map((header, index) => (
                                            <th key={index}>{header}</th>
                                        ))}
                                    </tr>
                                )}
                            </thead>
                            <tbody>
                                {tableData.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Object.values(row).map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <br />
                <form action="" onSubmit={handleSubmit}>
                    <label>
                        <input type="checkbox" onChange={() => setShowFileNameInput(!showFileNameInput)} />
                        Do you want to RENAME any column?
                    </label>
                    {showFileNameInput && (
                        <div>
                            <label>
                                From:
                                <input type="text" value={renameColumnFrom} onChange={(e) => setRenameColumnFrom(e.target.value)} />
                            </label>
                            <label>
                                To:
                                <input type="text" value={renameColumnTo} onChange={(e) => setRenameColumnTo(e.target.value)} />
                            </label>
                        </div>
                    )}
                    <br />
                    <label>
                        <input type="checkbox" onChange={() => setShowFileNameInput2(!showFileNameInput2)} />
                        Do you want to REMOVE any column?
                    </label>
                    {showFileNameInput2 && (
                        <div>
                            <label>
                                Name of the Column to be removed from table:
                                <input type="text" value={removeColumnName} onChange={(e) => setRemoveColumnName(e.target.value)} />
                            </label>
                        </div>
                    )}
                    <br />
                    <label>
                        <input type="checkbox" onChange={() => setShowFileNameInput3(!showFileNameInput3)} />
                        Do you want to MERGE tables?
                    </label>
                    {showFileNameInput3 && (
                        <div align="text-center">
                            <label>
                                Name of First Table:
                                <input type="text" value={mergeColumnName1} onChange={(e) => setMergeColumnName1(e.target.value)} />
                            </label>
                            <br></br>
                            <label>
                                Name of Second Table:
                                <input type="text" value={mergeColumnName2} onChange={(e) => setMergeColumnName2(e.target.value)} />
                            </label>

                            <label>
                                Name of Key Value:
                                <input type="text" value={mergeColumnName3} onChange={(e) => setMergeColumnName3(e.target.value)} />
                            </label>
                        </div>
                    )}
                    <br />
                    <label>
                        <input type="checkbox" onChange={() => setShowFileNameInput4(!showFileNameInput4)} />
                        Name of New Table to be created in Database?
                    </label>
                    {showFileNameInput4 && (
                        <div>
                            <label>
                                Name of Table:
                                <input type="text" value={newTableName} onChange={(e) => setNewTableName(e.target.value)} />
                            </label>
                        </div>
                    )}
                    <br />
                    <label>
                        <input type="checkbox" onChange={() => setShowFileNameInput5(!showFileNameInput5)} />
                        Do you want to REMOVE DUPLICATE fields?
                    </label>
                    {showFileNameInput5 && (
                        <div>
                            <label>
                                Key fields for identifying duplicates:
                                <input type="text" value={removeDuplicatesKey} onChange={(e) => setRemoveDuplicatesKey(e.target.value)} />
                            </label>
                        </div>
                    )}
                    <br />
                    <button className='btn btn-success w-100 rounded-0'>Finish</button>
                </form>
            </div>
        </div>
    );
}

export default DataTransformation;

"use client";
import { useState } from 'react';
import '../styles/main.css';

export default function Home() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];
  const [selectedPages, setSelectedPages] = useState([]);

  const handleAllCheck = () => {
    if (selectedPages.length === pages.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages);
    }
  };

  const handlePageCheck = (page) => {
    if (selectedPages.includes(page)) {
      setSelectedPages(selectedPages.filter((p) => p !== page));
    } else {
      setSelectedPages([...selectedPages, page]);
    }
  };

  return (
    <div className="main">
      <div className="form">
        <div className="elements">
          <div className="all__pages">
            <label className="all__main">
              <p>All Pages</p>
              <input
                type="checkbox"
                name="Allpages"
                className="large-checkbox"
                checked={selectedPages.length === pages.length}
                onChange={handleAllCheck}
              />
            </label>
          </div>
          <div className="List__of__pages">
            {pages.map((page, index) => (
              <label key={index} className="pages__main">
                <p>{page}</p>
                <input
                  type="checkbox"
                  name="page"
                  value={page.toLowerCase().replace(' ', '')}
                  className="large-checkbox"
                  checked={selectedPages.includes(page)}
                  onChange={() => handlePageCheck(page)}
                />
              </label>
            ))}
          </div>
          <div className="button">
            <button>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

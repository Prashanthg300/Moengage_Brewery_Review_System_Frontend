import React, { useState} from "react";
import styled from "styled-components";
import { Card, Pagination } from "antd";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import axios from "axios";


const Homepage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageContent, setPageContent] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [rating, setRating] = useState(5);
  


  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  const onPageChange = (page) => {
    setPageNumber(page);
  };

  return (
    <StyledDiv>
      <div className="search">
        <SearchBar onSearchResultsUpdate={updateSearchResults} />
      </div>
      <div className="details">
        {searchResults &&
          searchResults
            .slice((pageNumber - 1) * pageContent, pageNumber * pageContent)
            .map((item) => {
            //   <Link key={item.id} to={`/details/${item.id}`}>
                // handleRatingFunc(item.id);
                return <Card
                  title={item.name}
                  extra={
                    <Link to={`/details/${item.id}`}>More</Link>

                  }
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p>
                    <span style={{ fontWeight: "600" }}>Brewery Address: </span>
                    {item.address_1}
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Phone No: </span>
                    {item.phone}
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Website: </span>
                    {item.website_url}
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Current Rating: </span>
                    {rating}
                    
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>State: </span>
                    {item.state}
                  </p>
                </Card>
            //   </Link>
                })}
      </div>
      <div className="page">
        <Pagination
          current={pageNumber}
          pageSize={pageContent}
          total={searchResults.length}
          onChange={onPageChange}
        />
      </div>
    </StyledDiv>
  );
};

export default Homepage;

const StyledDiv = styled.div`
  background-color: hsl(0, 0%, 98%);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .search {
    background-color: #f1f1f1;
    border-bottom: 2px dashed #ff2e63;
    padding: 20px;
    box-sizing: border-box;
  }

  .details {
    display: grid;
    gap: 25px 10px;
    padding: 40px 20px;
    box-sizing: border-box;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ff2e63;
      border-radius: 30px 0px 0px 30px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: hsl(345, 100%, 50%);
    }
  }

  .page {
    box-shadow: 0px -10px 10px -10px rgba(0, 0, 0, 0.2);
    padding-top: 10px;
  }
`;
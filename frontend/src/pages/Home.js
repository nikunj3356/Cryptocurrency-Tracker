import React, { useState } from "react";
import CryptoList from "../components/CryptoList";
import CryptoDetails from "../components/CryptoDetails";

const Home = () => {
  const [selectedUrl, setSelectedUrl] = useState(null);

  return (
    <div className="font-roboto">
      {selectedUrl ? (
        <CryptoDetails
          selectedUrl={selectedUrl}
          setSelectedUrl={setSelectedUrl}
        />
      ) : (
        <CryptoList setSelectedUrl={setSelectedUrl} />
      )}
    </div>
  );
};

export default Home;

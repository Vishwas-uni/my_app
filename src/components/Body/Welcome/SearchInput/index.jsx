import React, { useEffect, useState } from "react";

function SearchInput() {
  const [searchText, setSearchText] = useState("");
  
  useEffect(()=>{
    console.log('Use effect on update')
  },[searchText])

  return (
    <div>
      <input
        type={"text"}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </div>
  );
}

export default SearchInput;

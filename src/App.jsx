import React from "react";
import RegularList from "./components/list/Regular";
import { authors } from "./data/authors";
import LargeAuthorListItem from "./components/authors/LargeListItem";
import SmallAuthorListItem from "./components/authors/SmallListItem";

const App = () => {
  return (
    <>
      <RegularList
        items={authors}
        sourceName={"authors"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"authors"}
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
};

export default App;

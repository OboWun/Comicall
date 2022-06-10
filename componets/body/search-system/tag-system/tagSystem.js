import React from "react";
import TagContainer from "./tag-container/tagContainer";
import TagSelector from "./tag-selector/tagSelector";

const TagSystem = ({ constatTags, searchTags }) => {

  return (
    <>
      <TagSelector tags = {constatTags}></TagSelector>
      <TagContainer tags = {searchTags}></TagContainer>
    </>
  );
};

export default TagSystem;

import React from "react";
import TagContainer from "./tag-container/tagContainer";
import TagSelector from "./tag-selector/tagSelector";

const TagSystem = ({ constatTags, searchTags }) => {

  //Тэги  комиксах хваним как ID, в mutateData как объект
    // const testTags = [
    //     {id: 0, title: 'Детектив'},
    //     {id: 1, title: 'Драма'},
    //     {id: 2, title: 'Приключение'},
    //     {id: 3, title: 'Супергероика'},
    //     {id: 4, title: 'Триллер'},
    // ]

  return (
    <>
      <TagSelector tags = {constatTags}></TagSelector>
      <TagContainer tags = {searchTags}></TagContainer>
    </>
  );
};

export default TagSystem;

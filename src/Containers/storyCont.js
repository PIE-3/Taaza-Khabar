import React, { useEffect, useState } from "react";
import { getStoryIDs , getStory } from "../Services/hacknApi";

export const StoriesContainer = () => {
    const [storyIDs, setStoryIDs] = useState([]);
  
    useEffect(() => {
      try {
        getStoryIDs().then((data) => setStoryIDs(data));
      } 
      catch (e) {
        console.log("error ", e);
      }
    }, []);
  
    return storyIDs;
  };




  
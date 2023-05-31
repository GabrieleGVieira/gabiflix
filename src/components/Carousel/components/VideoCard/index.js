import React from "react";
import { VideoCardContainer } from "./styles";

function getVideoId(videoURL) {
  return videoURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getVideoId(
    videoURL
  )}/hqdefault.jpg`;
  return (
    <div>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || "red" }}
        title={videoTitle}
      />
    </div>
  );
}


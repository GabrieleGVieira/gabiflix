import React from "react"
import VideoIframeResponsive from "./components/VideoIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from "./styles";

function getVideoId(videoURL) {
    return videoURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


export default function BannerMain({
    videoTitle,
    videoDescription,
    url
}) {
    
    const videoId = getVideoId(url);
    const bgURL = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    return (
      <BannerMainContainer backgroundImage={bgURL}>
        <ContentAreaContainer>
          <ContentAreaContainer.Item>
            <ContentAreaContainer.Title>
              {videoTitle}
            </ContentAreaContainer.Title>

            <ContentAreaContainer.Description>
              {videoDescription}
            </ContentAreaContainer.Description>
          </ContentAreaContainer.Item>

          <ContentAreaContainer.Item>
            <VideoIframeResponsive videoID={videoId} />
            <WatchButton>Assistir</WatchButton>
          </ContentAreaContainer.Item>
        </ContentAreaContainer>
      </BannerMainContainer>
    );
}
import { nextButton, videoContainer, videosIdList } from './constants.js';
import { generateYoutubeIframe } from './utils.js';

let videoIndex = -1;

function nextVideo() {
  // Increment to refer to next video
  videoIndex += 1;

  // Validate videoIndex is not higher than the video's array
  if (videoIndex > videosIdList.length - 1) {
    videoIndex = 0;
  }

  // Get the video url
  const videoId = videosIdList[videoIndex];
  const videoElement = generateYoutubeIframe(videoId);

  // Remove videoContainer content
  videoContainer.innerHTML = '';

  // Insert new video
  videoContainer.appendChild(videoElement);
}

// Execute nextVideo when page is loaded
document.addEventListener('DOMContentLoaded', nextVideo);

// Execute nextVideo when next Button is clicked
nextButton.addEventListener('click', nextVideo);

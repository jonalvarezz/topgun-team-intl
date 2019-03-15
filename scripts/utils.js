const defaultOptions = {
  width: '560',
  height: '315'
};

export function generateYoutubeIframe(youtubeId, options = {}) {
  const configuration = { ...defaultOptions, ...options };
  const iframe = document.createElement('iframe');
  iframe.width = '560';
  iframe.height = '315';
  iframe.src = `https://www.youtube.com/embed/${youtubeId}`;
  iframe.frameborder = 0;
  iframe.allow =
    'accelerometer; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowfullscreen = true;

  return iframe;
}

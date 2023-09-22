interface videosStorage {
  id: string
  category: string
  imgSrc: string
  videoSrc: string
  title: string
  description: string
  user: string
}

interface videoBody {
  category: string
  imgSrc: string
  videoSrc: string
  title: string
  description: string
  user: string
}

export const getVideos = async () => {
  const res = localStorage.getItem('videos')
  const data: videosStorage[] = await JSON.parse(res!)
  const videos = data.map((video) => ({
    ...video,
    id: parseInt(video.id),
  }))
  return videos
}

export const postVideo = async (videoBody: videoBody) => {
  const videos = JSON.parse(localStorage.getItem('videos')!)
  const currentHighestId = parseInt(localStorage.getItem('videoHighestId')!)
  videos.push({ ...videoBody, id: currentHighestId + 1 })
  localStorage.setItem('videos', JSON.stringify(videos))
  localStorage.setItem('videoHighestId', JSON.stringify(currentHighestId + 1))
  return videos
}

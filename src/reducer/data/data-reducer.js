const videoReducer = (state, action) => {
  switch (action.type) {
    case 'INITVIDEOS':
      return {
        ...state,
        videos: [
          ...action.payload.map((video) => ({
            ...video,
            isInHistory: false,
            isInLiked: false,
          })),
        ],
      }

    case 'DATA':
      return {
        ...state,
        videoData: [{ ...action.payload }],
      }

    default:
      return state
  }
}

export { videoReducer }

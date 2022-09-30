const videoReducer = (state, action) => {
  switch (action.type) {
    case 'INITVIDEOS':
      return {
        ...state,
        videos: [
          ...action.payload.map((video) => ({
            ...video,
            isInHistory: false,
            isInWatchlist: false,
          })),
        ],
      }

    case 'DATA':
      return {
        ...state,
        videoData: [{ ...action.payload }],
        history: [...state.history, { ...action.payload }],
      }

    case 'ADD_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload],
      }

    case 'CLEAR_WATCHLIST':
      return {
        ...state,
        watchlist: [],
      }

    case 'CLEAR_HISTORY':
      return {
        ...state,
        history: [],
      }

    default:
      return state
  }
}

export { videoReducer }

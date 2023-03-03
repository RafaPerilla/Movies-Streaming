const firebase = require('firebase/app')
const { getStorage, uploadBytes, ref, getDownloadURL } = require('firebase/storage')

const config = require('../../config').api.firebase

const firebaseApp = firebase.initializeApp(config)

const storage = getStorage(firebaseApp)

//? peliculas

const addToFirebaseMovieVideo = async (file) => {
    const movieRef = ref(storage, `movie-videos/${Date.now()}-${file.originalname}`)

    await uploadBytes(movieRef, file.buffer)
    const movieUrl = await getDownloadURL(movieRef)
    return movieUrl
}

//? cover pelicula `

const addToFirebaseMovieCover = async () => {
    const movieCoverRef = ref(
        storage,
        `movie-covers/${Date.now()}-${file.originalname}`
    );
    await uploadBytes(movieCoverRef, file.buffer);
    const movieCoverUrl = await getDownloadURL(movieCoverRef);
    return movieCoverUrl;
};

//? Serie - Name - Temporada - Cover
//? Serie - Name - Temporada - Capitulo

module.exports = {
    addToFirebaseMovieVideo,
    addToFirebaseMovieCover
}
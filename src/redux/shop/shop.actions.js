import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: 'FETCH_COLLECTIONS_START'
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: 'FETCHING_COLLECTIONS_SUCCESS',
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: 'FETCHING_COLLECTIONS_FAILURE',
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapShot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.Message)));
  };
};

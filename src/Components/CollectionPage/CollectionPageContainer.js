import { connect } from 'react-redux';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithSpinner from '../WithSpinner/WithSpinner';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = state => ({
  isLoading: !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(
  WithSpinner(CollectionPage)
);

export default CollectionPageContainer;

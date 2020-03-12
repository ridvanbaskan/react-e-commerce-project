import { connect } from 'react-redux';
import CollectionsOverview from './CollectionsOverview';
import WithSpinner from '../WithSpinner/WithSpinner';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

const mapStateToProps = state => ({
  isLoading: selectIsCollectionFetching(state)
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverview)
);

export default CollectionsOverviewContainer;

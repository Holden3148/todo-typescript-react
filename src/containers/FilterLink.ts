import { connect, MapStateToProps, MapDispatchToProps, Dispatch } from 'react-redux';
import { FilterValue } from '../models/filter';
import { AppState } from '../reducers';
import { createSetVisibilityFilter } from '../actions';
import Link from '../components/Link';

interface StateFromProps {
    active: boolean;
}

interface FilterLinkProps {
    filter: FilterValue;
}

interface DispatchFromProps {
    onClick: () => void;
}

const mapStateToProps: MapStateToProps<StateFromProps, FilterLinkProps> = 
    (state: AppState, ownProps: FilterLinkProps): StateFromProps => {
        return {
            active: ownProps.filter === state.visibilityFilter
        };
    };

const mapDispatchToProps: MapDispatchToProps<DispatchFromProps, FilterLinkProps> = (
    dispatch: Dispatch<any>, ownProps: FilterLinkProps): DispatchFromProps => {
        return {
            onClick: () => {
                dispatch(createSetVisibilityFilter(ownProps.filter));
            }
        };
    };

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
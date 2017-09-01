import { connect, MapStateToProps, MapDispatchToProps, Dispatch } from 'react-redux';
import TextFieldWithButton from '../components/TextFieldWithButton';
import { createAddTodo } from '../actions';
import { AppState } from '../reducers';

interface DispatchFromProps {
    onSubmit: (input: string) => void;
}
interface StateFromProps {
    buttonText: string;
}

const mapStateToProps: MapStateToProps<StateFromProps, void> = 
    (state: AppState) => {
        return {
            buttonText: 'Add Todo'
        };
    };

const mapDispatchToProps: MapDispatchToProps<DispatchFromProps, void> = 
    (dispatch: Dispatch<any>): DispatchFromProps => {
        return {
            onSubmit: (input: string) => {
                dispatch(createAddTodo(input));
            }
        };
    };

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(TextFieldWithButton);

export default AddTodo;
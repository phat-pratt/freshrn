import AppNavigator from './navigation/AppNavigator';
import { store } from './store/setup';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Profile from '../Profile/screens/Profile';
//import TodoDetails from '../todos/screens/TodoDetails';


const MainNavigator = createStackNavigator({
    
    /*login :{
        screen: Login,
        navigationOptions: () => ({
            title: 'Login'
        })
    },*/
    profile:{
        screen: Profile,
        navigationOptions: () => ({
            title: 'Profile'
        })
    }/*,
    home :{
        screen: Home,
        navigationOptions: () => ({
            title: 'Home'
        })
    },
    game :{
        screen: Game,
        navigationOptions: () => ({
            title: 'Game'
        })
    },*/
    
})
const Rootnavigation = createAppContainer(MainNavigator);
export default Rootnavigation;

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Profile from '../profile/screens/Profile';
import Home from '../home/screens/Home';
import LoginScreen from '../login/loginScreen';



const MainNavigator = createStackNavigator({
    
    loginScreen :{
        screen: LoginScreen,
        navigationOptions: () => ({
            title: 'Login'
        }),
        headerStyle: {
            backgroundColor: '#303030',
            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    },
    home :{
        screen: Home,
        navigationOptions: () => ({
            title: 'Home',
            headerStyle: {
                backgroundColor: '#303030',
                
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
        }),
        
      
    },
    profile:{
        screen: Profile,
        navigationOptions: () => ({
            title: 'Profile',
            headerStyle: {
                backgroundColor: '#303030',
                
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
        })
    }
    /*,
    game :{
        screen: Game,
        navigationOptions: () => ({
            title: 'Game'
        }),
        headerStyle: {
            backgroundColor: '#303030',
            
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    },*/
    
})
const Rootnavigation = createAppContainer(MainNavigator);
export default Rootnavigation;

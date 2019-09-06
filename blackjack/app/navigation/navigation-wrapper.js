import React from 'react';
import RootNavigation from './root-navigation';
import {ProfileProvider} from '../profile/profile-context';

export default function NavigationWrapper() {
    return (
        <ProfileProvider>
            <RootNavigation/>
        </ProfileProvider>
    )
}
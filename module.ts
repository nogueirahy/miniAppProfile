import React from 'react';
import {Alert} from 'react-native';

const Profile = React.lazy(() => import('./src/Profile'));

interface IMethods {
  id: string;
  fn: () => void;
}

interface IComponent {
  id: string;
  Component: React.LazyExoticComponent<(navigation: any) => JSX.Element>;
  methods?: IMethods[];
}

interface IModule {
  prefix: string;
  components: IComponent[];
}

const Container: IModule = {
  prefix: 'miniAppProfile',
  components: [
    {
      id: 'Profile',
      Component: Profile,
      methods: [
        {
          id: 'Profile.exampleFunc',
          fn: () => Alert.alert('miniAppProfile', 'Called from miniAppProfile'),
        },
      ],
    },
  ],
};

export default Container;

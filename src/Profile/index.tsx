import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'green',
      }}>
      <TouchableOpacity
        style={{backgroundColor: 'orange'}}
        onPress={() => undefined}>
        <Text>MODULE PROFILE SCREEN </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{marginTop: 70, backgroundColor: 'orange'}}
        onPress={() => navigation.pop()}>
        <Text>GO TO HOME </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

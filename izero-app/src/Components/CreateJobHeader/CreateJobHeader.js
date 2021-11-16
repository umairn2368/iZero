import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

function CreateJobHeader({children, backButton}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.over}>
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttons}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {CreateJobHeader};

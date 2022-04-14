import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Button, Image,  StyleSheet, Text, View } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import * as React from 'react';

export default class Map extends React.Component {
render(){
    return(
        <View style={styles.container}>
            <Text>
                Hello From Map Page
            </Text>
            <Text>
                Hello From Map Page
            </Text>
            <Text>
                Hello From Map Page
            </Text>
            <Text>
                Hello From Map Page
            </Text>
            <Text>
                Hello From Map Page
            </Text>
            <Text>
                Hello From Map Page
            </Text>
            <Text>
                {global.foo}
            </Text>

        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
});

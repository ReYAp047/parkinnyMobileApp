import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function Chat() {
  const [chatUser] = useState({
    name: 'Parkinny',
  });

  const [currentUser] = useState({
    name: 'Foulen',
  });

  const [messages, setMessages] = useState([
    { sender: 'Foulen', message: 'Lorem ipsum dolor sit amet', time: '6:01 PM' },
    {
      sender: 'Parkinny',
      message: 'Lorem ipsum dolor sit amet?',
      time: '6:02 PM',
    },
    {
      sender: 'Foulen',
      message: 'Lorem ipsum dolor sit amet?',
      time: '6:02 PM',
    },
    {
      sender: 'Foulen',
      message: `😊😇`,
      time: '6:02 PM',
    },
    {
      sender: 'Parkinny',
      message: `Lorem ipsum dolor sit amet.`,
      time: '6:03 PM',
    },
    {
      sender: 'Foulen',
      message: `Lorem ipsum dolor sit ametLorem ipsum dolor sit amet?`,
      time: '6:03 PM',
    },
    {
      sender: 'Parkinny',
      message: `Lorem ipsum dolor sit amet.`,
      time: '6:03 PM',
    },
    {
      sender: 'Parkinny',
      message: `Lorem ipsum dolor sit amet.`,
      time: '6:04 PM',
    },
    {
      sender: 'Foulen',
      message: `Lorem ipsum dolor sit ametLorem ipsum dolor sit amet.`,
      time: '6:05 PM',
    },
    {
      sender: 'Parkinny',
      message: `Lorem ipsum dolor sit amet!`,
      time: '6:05 PM',
    },
  ]);

  const [inputMessage, setInputMessage] = useState('');

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function sendMessage() {
    if (inputMessage === '') {
      return setInputMessage('');
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
    setInputMessage('');
  }

 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: '#f2f2ff' }}
          inverted={true}
          data={JSON.parse(JSON.stringify(messages)).reverse()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={{ marginTop: 6 }}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor: '#3a6ee8',
                    alignSelf:
                      item.sender === currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === currentUser.name ? 0 : 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: '#dfe4ea',
                      fontSize: 14,
                      alignSelf: 'flex-end',
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{ paddingVertical: 10 }}>
          <View style={styles.messageInputView}>
            <TextInput
              defaultValue={inputMessage}
              style={styles.messageInput}
              placeholder='Message'
              onChangeText={(text) => setInputMessage(text)}
              onSubmitEditing={() => {
                sendMessage();
              }}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={() => {
                sendMessage();
              }}
            >
              <Icon name='send' type='material' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
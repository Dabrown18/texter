import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import globalStyles from  '../../util/globalStyles';
import Header from '../../components/Header';
import Messenger from './components/Conversation'
import AdditionButton from './components/AdditionButton';
import ConversationInput from './components/ConversationInput';


const MessageView = (props) => {
  const {
    sender,
    message,
    response
  } = props.navigation.state.params;

  return (
    <View style={[globalStyles.COMMON_STYLES.pageContainer, {flex: 1}]}>
      <Header
        headerTitle={sender}
        isBackButtonRequired={true}
        navigation={props.navigation}
        customHeaderStyle={{
          height: globalStyles.SCREEN_SIZE.height / 8.5,
          width: globalStyles.SCREEN_SIZE.width,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: globalStyles.COLORS.PRIMARY,
          marginBottom: 5
        }}
      />
      <View style={{flex: 8}}>
        <Messenger message={message}/>
        <Messenger
          message={response}
          customStyle={{
            marginTop: 15,
            left: globalStyles.SCREEN_SIZE.width * .33,
            backgroundColor: globalStyles.COLORS.SECONDARY
          }}
          customTextStyle={{
            padding: 15,
            fontSize: globalStyles.SCREEN_SIZE.width * .05,
            color: globalStyles.COLORS.WHITE
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row'
        }}
      >
        <AdditionButton/>
        <ConversationInput/>
      </View>

    </View>
  );
};


export default MessageView;

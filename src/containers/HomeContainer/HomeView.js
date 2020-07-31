import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '../../components/Header';
import globalStyles from '../../util/globalStyles';
import Message from '../../components/Message';
import {messages} from '../../util/data';
import {mutateMessage} from '../../util/functions';

const HomeView = (props) => {
  const onViewMessage = (message) => {
    props.navigation.navigate('Message',message)
  };

  return (
    <View style={globalStyles.COMMON_STYLES.pageContainer}>
      <Header
        isLogoRequired={true}
        navigation={props.navigation}
        customHeaderStyle={{
          height: globalStyles.SCREEN_SIZE.height / 8.5,
          width: globalStyles.SCREEN_SIZE.width,
          justify: 'flex-end',
          alignItems: 'center',
          backgroundColor: globalStyles.COLORS.PRIMARY,
          marginBottom: 5
        }}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <FlatList
          data={messages}
          contentContainerStyle={{paddingBottom: 225}}
          renderItem={({item}) => {
            let preview = mutateMessage(item.message);

            return (
              <Message
                onViewMessage={() => onViewMessage(item)}
                senderName={item.sender}
                date={item.date}
                title={item.title}
                messagePreview={preview}
              />
            )
          }}
        />
      </View>
    </View>
  );
};

export default HomeView;

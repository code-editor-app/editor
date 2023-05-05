import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import CodeEditor, {
  CodeEditorSyntaxStyles,
} from '@rivascva/react-native-code-editor';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Editor = () => {
  const height = Dimensions.get('window').height;

  const shortcutSymbols = [
    '<',
    '>',
    '(',
    ')',
    '{',
    '}',
    '[',
    ']',
    ';',
    ',',
    '=',
    '.',
    '+',
    '-',
    '*',
    '/',
    ':',
    '%',
    '!',
    '?',
    '&',
    '|',
    '^',
    '~',
    '_',
    '\\n',
    '\\t',
  ];
  const editorIcons = [
    'copy-outline',
    'ios-clipboard-outline',
    'trash-outline',
    'return-up-back-outline',
    'return-up-forward-outline',
    'ios-code',
    'file-tray-full-outline',
    'share-outline',
  ];

  return (
    <View
      style={{
        backgroundColor: '#363636',
        height: height,
      }}>
      {/* <CodeEditor
        style={{
          fontSize: 10,
          inputLineHeight: 13,
          highlighterLineHeight: 13,
        }}
        language="cpp"
        syntaxStyle={CodeEditorSyntaxStyles.androidstudio}
        showLineNumbers
    /> */}
      <ScrollView
        horizontal={true}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
    >
        {editorIcons.map((symbol, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#404040',
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems:'center',
                borderRadius: 3,
                marginHorizontal:1
              }}
              key={index}>
              <Ionicons
                name={symbol}
                size={20}
                color="white"
                backgroundColor="#404040"
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ScrollView
        horizontal={true}
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        {shortcutSymbols.map((symbol, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#404040',
                width: 30,
                height: 30,
                justifyContent: 'center',
                borderRadius: 3,
                marginHorizontal: 1,
              }}
              key={index}>
              <Text
                key={index}
                style={{
                  color: 'white',
                  margin: 0,
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  fontSize: 17,
                  marginBottom: 2,
                }}>
                {symbol}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Editor;

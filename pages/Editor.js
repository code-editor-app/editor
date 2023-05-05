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

  const numbers = ['0','1','2','3','4','5','6','7','8','9'];
  
  const line1 = [{lower: 'q', upper: 'Q'},{lower: 'w', upper: 'W'},{lower: 'e', upper: 'E'},{lower: 'r', upper: 'R'},{lower: 't', upper: 'T'},{lower: 'y', upper: 'Y'},{lower: 'u', upper: 'U'},{lower: 'i', upper: 'I'},{lower: 'o', upper: 'O'},{lower: 'p', upper: 'P'}]; 
  const line2 = [{lower: 'a', upper: 'A'},{lower: 's', upper: 'S'},{lower: 'd', upper: 'D'},{lower: 'f', upper: 'F'},{lower: 'g', upper: 'G'},{lower: 'h', upper: 'H'},{lower: 'j', upper: 'J'},{lower: 'k', upper: 'K'},{lower: 'l', upper: 'L'}];
  const line3 = [{lower: 'z', upper: 'Z'},{lower: 'x', upper: 'X'},{lower: 'c', upper: 'C'},{lower: 'v', upper: 'V'},{lower: 'b', upper: 'B'},{lower: 'n', upper: 'N'},{lower: 'm', upper: 'M'},{lower: '<=', upper: '<='}];
  return (
    <View
      style={{
        backgroundColor: '#363636',
        height: height,
      }}>
      <CodeEditor
        style={{
          height: 200,
          fontSize: 10,
          inputLineHeight: 13,
          highlighterLineHeight: 13,
        }}
        language="cpp"
        syntaxStyle={CodeEditorSyntaxStyles.androidstudio}
        showLineNumbers
      />
      <View style={{
        height: 38,
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {editorIcons.map((symbol, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#404040',
                flex: 1,
                height: 35,
                justifyContent: 'center',
                alignItems:'center',
                borderRadius: 5,
                marginHorizontal: 2,
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
      </View>
      <View style={{
        height: 38,
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 30,
          }}>
          {shortcutSymbols.map((symbol, index) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: '#404040',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  borderRadius: 5,
                  marginHorizontal: 2,
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
      <View style={{
        height: 38,
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {numbers.map((symbol, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#404040',
                
                height: 35,
                width: 30,
                justifyContent: 'center',
                alignItems:'center',
                borderRadius: 5,
                marginHorizontal: 2,
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
      <View style={{
        height: 38,
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {line1.map((symbol, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#404040',
                
                height: 35,
                width: 30,
                justifyContent: 'center',
                alignItems:'center',
                borderRadius: 5,
                marginHorizontal: 2,
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
                  {symbol.lower}
                </Text>
            </TouchableOpacity>
          );
          })}
        </ScrollView>
      </View>
      <View style={{
        height: 38,
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {line2.map((symbol, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#404040',
                
                height: 35,
                width: 30,
                justifyContent: 'center',
                alignItems:'center',
                borderRadius: 5,
                marginHorizontal: 2,
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
                  {symbol.lower}
                </Text>
            </TouchableOpacity>
          );
          })}
        </ScrollView>
      </View>
      <View style={{
        height: 38,
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            width: '100%',
            justifyContent: 'space-between',
          }}>
          {line3.map((symbol, index) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: '#404040',
                
                height: 35,
                width: 30,
                justifyContent: 'center',
                alignItems:'center',
                borderRadius: 5,
                marginHorizontal: 2,
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
                  {symbol.lower}
                </Text>
            </TouchableOpacity>
          );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Editor;

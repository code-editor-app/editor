import { View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import CodeEditor, { CodeEditorSyntaxStyles } from '@rivascva/react-native-code-editor';
const Editor = () => {
  const height = Dimensions.get('window').height;

  const shortcutSymbols = ['<', '>', '(', ')', '{', '}', '[', ']', ';', ',', '=', '.', '+', '-', '*', '/', ':', '%', '!', '?', '&', '|', '^', '~', '_', '\\n', '\\t'];

  return (
    <View style={{
      backgroundColor: '#363636',
      height: height
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
      }}>
      {shortcutSymbols.map((symbol, index) => {
        return (
          <TouchableOpacity style={{
            backgroundColor: '#404040',
            width: 30,
            height: 30,
            justifyContent: 'center',
            borderRadius: 3,
            marginHorizontal:1,
          }}>
            <Text key={index} style={{color: 'white', margin: 0, textAlign: 'center', fontFamily: 'monospace' , fontSize: 17, marginBottom: 2}}>{symbol}</Text>
          </TouchableOpacity>
        )
      })
      }
    </ScrollView>
    </View>
  )
}

export default Editor
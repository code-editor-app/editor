import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import Programs from './pages/Programs'
import Editor from './pages/Editor'
const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#363636',
      padding: 10,
    }}>
      {/* <Programs /> */}
      <Editor />
    </ScrollView>
  )
}

export default App
import { View, Text } from 'react-native'
import React from 'react'
import CodeEditor, {
    CodeEditorSyntaxStyles,
  } from '@rivascva/react-native-code-editor';

const Programs = () => {
    const programs = [{ name: 'Program 1', code: `class Solution {
        public:
         int reverse(int x) {
           long ans = 0;
       
           while (x) {
             ans = ans * 10 + x % 10;
             x /= 10;
           }
       
           return (ans < INT_MIN || ans > INT_MAX) ? 0 : ans;
         }
       };` }, { name: 'Program 2', code: `class Solution {
        public:
         int reverse(int x) {
           long ans = 0;
       
           while (x) {
             ans = ans * 10 + x % 10;
             x /= 10;
           }
       
           return (ans < INT_MIN || ans > INT_MAX) ? 0 : ans;
         }
       };` }, { name: 'Program 3', code: `class Solution {
        public:
            int reverse(int x) {
                long ans = 0;
            
                while (x) {
                    ans = ans * 10 + x % 10;
                    x /= 10;
                }
            
                return (ans < INT_MIN || ans > INT_MAX) ? 0 : ans;
            }
        };`
    }, { name: 'Program 1', code: `class Solution {
        public:
         int reverse(int x) {
           long ans = 0;
       
           while (x) {
             ans = ans * 10 + x % 10;
             x /= 10;
           }
       
           return (ans < INT_MIN || ans > INT_MAX) ? 0 : ans;
         }
       };` }, { name: 'Program 2', code: `class Solution {
        public:
         int reverse(int x) {
           long ans = 0;
       
           while (x) {
             ans = ans * 10 + x % 10;
             x /= 10;
           }
       
           return (ans < INT_MIN || ans > INT_MAX) ? 0 : ans;
         }
       };` }, { name: 'Program 3', code: `class Solution {
        public:
            int reverse(int x) {
                long ans = 0;
            
                while (x) {
                    ans = ans * 10 + x % 10;
                    x /= 10;
                }
            
                return (ans < INT_MIN || ans > INT_MAX) ? 0 : ans;
            }
        };`
    }];

    getAllPrograms = () => {
        return programs.map((program, index) => {
            return (
                <View key={index} style={{
                    backgroundColor: '#404040',
                    borderRadius: 10,
                    padding: 10,
                    marginVertical: 5,
                    boxShadow: '5px 5px 10px #000',
                }} >
                    <Text style={{
                        color: '#ccc',
                        marginBottom: 5,
                        fontSize: 14,
                        lineHeight: 16,
                        // fontFamily: 'monospace'
                    }}>{program.name}</Text>
                    
                    
                    <View style={{
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}> 
                    {/* <Text style={{
                        color: '#ff375f',
                        fontWeight: 'bold',
                        fontSize: 14,
                        paddingVertical: 2,
                        paddingHorizontal: 10,
                        backgroundColor: '#ff375f50',
                        borderRadius: 10,
                        textAlign: 'center',
                        zIndex: 1,
                        alignSelf: 'flex-end',
                        position: 'absolute',
                    }}>Run 
                    </Text> */}
                    <CodeEditor 
                        style={{
                            fontSize: 10,
                            width: '100%',
                            height: 400,
                        }}
                        language="cpp"
                        syntaxStyle={CodeEditorSyntaxStyles.androidstudio}
                        initialValue={program.code}
                        readOnly
                    />
                    </View>
                    {/* <Text style={{
                        color: '#ccc',
                        margin: 0,
                        fontSize: 9,
                        fontFamily: 'monospace'
                    }}>{program.code}</Text> */}
                </View>
            )
        })
    }

    return (
        <View style={{
            marginBottom: 20
        }}>
            <Text style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
                // fontFamily: 'monospace'
            }}>All Programs</Text>
            {getAllPrograms()}
        </View>
    )
}

export default Programs
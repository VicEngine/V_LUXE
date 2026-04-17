import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function accountlog() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>Log into {'\n'}your account</Text>

                {/* Username*/}
                <View style={styles.usercontainer}>
                    <TextInput
                        placeholder='Username/Email'
                        placeholderTextColor={"white"}
                        style={styles.inputuser} />
                </View>

                {/* Password*/}
                <View style={styles.passwordcontainer}>
                    <View>
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={"white"}
                            secureTextEntry
                            style={styles.inputpassword}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, color: "White" }}>Forget?</Text>
                    </View>
                </View>
                {/*Forget*/}

                <View>
                    <Text>Remember me</Text>
                </View>
                {/* SignButton*/}
                <View style={styles.SignButton}>
                    <TouchableOpacity>
                        <Text style={styles.SignInText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.fb}>
                    <TouchableOpacity>
                        <Text style={styles.fbText}> Log in with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 28,
        color: "fff",
        marginRight: 150,

    },
    usercontainer: {
        marginBottom: 30,
        marginTop: 30,
        paddingRight: 150,
    },
    inputuser: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.5)',
        paddingVertical: 15,
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
        paddingHorizontal: 20
    },
    inputpassword: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.5)',
        
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,

    },

    passwordcontainer: {
        marginBottom: 30,
        flexDirection: "row",
        marginRight: 150,
        alignItems: "center",
        justifyContent: "center",
    },
    SignButton: {
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 28,
        marginTop: 10,
        height: 50,
        width: 250,
        justifyContent: 'center',

    },


    fb: {
        alignItems: 'center',
        backgroundColor: "white",
        borderRadius: 28,
        marginTop: 10,
        height: 50,
        width: 250,
        justifyContent: 'center',
    },

    SignInText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
    },
    fbText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
    },
})
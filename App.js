import React, { Component } from 'react';
import { /*Platform*/ StyleSheet, WebView, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

import { FormLabel, FormInput, FormValidationMessage, Input } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const BG_IMAGE = require('./assets/images/bg_screen1.jpg');


export default class App extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  };

  submitLoginCredentials() {
    const { showLoading } = this.state;

    this.setState({
      showLoading: !showLoading,
    });
  }

  login = async () => {
    const { email, password } = this.state;

    try {

      const user = await firebase.auth()
        .signInWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true });
      console.log(user);

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.contentContainer}>

          <View style={styles.loginView}>

            <View style={styles.welcomeContainer}>
              <Image
                source={
                  __DEV__
                    ? require('./assets/images/PersonalClub_Logo2-300x97.png')
                    : require('./assets/images/PersonalClub_Logo2-300x97.png')
                }
                style={styles.welcomeImage}
              />
            </View>

            <View style={styles.loginTitle}>
              <Text style={styles.getStartedText}>Login</Text>
            </View>

            <View style={styles.loginInput}>

              <FormLabel>Name</FormLabel>
              <FormInput onChangeText={someFunction} />
              <FormValidationMessage>Error message</FormValidationMessage>

              {/* E-Mail */}
              <FormInput
                leftIcon={
                  <Icon
                    name="user-o"
                    color="rgba(171, 189, 219, 1)"
                    size={26}
                  />
                }
                placeholder="E-mail"
                value={this.state.email}
                containerStyle={{ paddingVertical: 1, paddingHorizontal: 20 }}
                onChangeText={email => this.setState({ email })}
                inputStyle={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}
                keyboardAppearance="light"
                placeholder="E-mail"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="white"
                keyboardType="email-address"
                returnKeyType="next"
                ref={input => (this.emailInput = input)}
                blurOnSubmit={false}
                placeholderTextColor="#FFF"
              />
            </View>

            <View style={styles.loginInput}>

              {/* CPF */}
              <FormInput
                leftIcon={
                  <Icon
                    name="lock"
                    color="rgba(171, 189, 219, 1)"
                    size={25}
                  />
                }
                value={this.state.password}
                containerStyle={{ paddingVertical: 1, paddingHorizontal: 20 }}
                onChangeText={password => this.setState({ password })}
                inputStyle={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}
                secureTextEntry={false}
                keyboardAppearance="light"
                placeholder="CPF"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="done"
                ref={input => (this.passwordInput = input)}
                blurOnSubmit={true}
                placeholderTextColor="white"
              />

            </View>


            <View style={styles.helpContainer}>
              <Text style={styles.termos}>Ao prosseguir você estará de acordo com nossos</Text>
              <TouchableOpacity onPress={this._handleHelpPress}/** style={styles.helpLink}*/>
                <Text style={styles.helpLinkText}>Termos de Uso e Política de Privacidade</Text>
              </TouchableOpacity>
            </View>


            <TouchableOpacity style={styles.button} onPress={this.login}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            {this.state.isAuthenticated ? <alert>Logado com sucesso</alert> : null}

            {/* <Text style={styles.instructions}>{instructions}</Text> */}

          </View>
        </View>
      </View>
    );
  }

  _handleHelpPress = () => {
    WebView.openBrowserAsync(
      'https://www.google.com.br'
    );
  };

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#525252',
    flex: 1,
  },
  loginView: {
    backgroundColor: 'transparent',
  },
  contentContainer: {
    paddingTop: -10,
  },
  welcomeContainer: {
    alignItems: 'center',
    // marginTop: 10,

  },
  welcomeImage: {
    resizeMode: 'contain',
    marginBottom: 30,
  },
  loginTitle: {
    alignItems: 'center',
    marginHorizontal: 25,
  },
  getStartedText: {
    fontSize: 36,
    color: '#FFF',
    lineHeight: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  loginInput: {
    marginBottom: 1,
  },
  termos: {
    color: '#FFF',
    fontSize: 15,
  },
  helpLinkText: {
    fontSize: 15,
    color: '#F38433',
  },
  helpContainer: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    height: 55,
    backgroundColor: '#F38433',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

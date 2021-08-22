import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../../components";
import { Images, argonTheme } from "../../constants";

const { width, height } = Dimensions.get("screen");

class DeleteService extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block safe flex middle>
            <Block style={styles.registerContainer}>
              <Block flex>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block middle>
                      <Text size={28} color={argonTheme.COLORS.BLACK}>
                        Deseja processeguir ?
                      </Text>
                    </Block>
                    <Block row space="evenly">
                        <Block flex left>
                        <Button color="black" style={styles.createButton} onPress={() => navigation.navigate("Home")}>
                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            DELETAR
                            </Text>
                        </Button>
                        </Block>
                        <Block flex right>
                        <Button color="black" style={styles.createButton} onPress={() => navigation.navigate("Fornecedores")}>
                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            VOLTAR
                            </Text>
                        </Button>
                        </Block>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.25,
    backgroundColor: "#F5F5A4",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.30,
    marginTop: 25
  }
});

export default DeleteService;

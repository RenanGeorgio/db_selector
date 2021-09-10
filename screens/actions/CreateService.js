import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  View,
  Platform,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Block, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../../components";
import { Images, argonTheme } from "../../constants";

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input as ComboInput } from 'react-native-elements';
import { API_PLACES_KEY } from '../../keys';

const { width, height } = Dimensions.get("screen");

const CreateSupplyEntryService = () => {
  const navigation = useNavigation();
  return (
      <Block flex middle>
        <View style={styles.headerbox}>
            <Text style={styles.headerTitle}>Novo fornecedor</Text>
        </View>
        <Block safe flex middle>
            <Block flex center style={styles.registerContainer}>
                <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled
                >
                <Block width={width * 0.8}>
                    <Input
                    borderless
                    placeholder="Nome do Fornecedor"
                    iconContent={
                        <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="hat-3"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                        />
                    }
                    />
                </Block>
                <Block row space='evenly' width={width * 0.8}>
                      <Input
                      style={{flex: 0, paddingRight: width * 0.1, flexDirection: 'row', width: width * 0.39}}
                      borderless
                      placeholder="Telefone"
                      iconContent={
                          <Icon
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="hat-3"
                          family="ArgonExtra"
                          style={styles.inputIcons}
                          />
                      }
                      />
                      <Input
                      style={{flex: 0, paddingLeft: width * 0.1, flexDirection: 'row', width: width * 0.39}}
                      borderless
                      placeholder="email"
                      iconContent={
                          <Icon
                          size={16}
                          color={argonTheme.COLORS.ICON}
                          name="hat-3"
                          family="ArgonExtra"
                          style={styles.inputIcons}
                          />
                      }
                      />
                </Block>
                <Block width={width * 0.8}>
                  <Input
                  borderless
                  placeholder="Outras informações de contato"
                  iconContent={
                      <Icon
                      size={16}
                      color={argonTheme.COLORS.ICON}
                      name="hat-3"
                      family="ArgonExtra"
                      style={styles.inputIcons}
                      />
                  }
                  />
                </Block>
                <Block middle style={{paddingTop:10}}>
                  <GooglePlacesAutocomplete
                    query={{
                      key: API_PLACES_KEY,
                      language: 'pt-br', 
                    }}
                    fetchDetails={true}
                    placeholder='Localização do fornecedor'
                    isRowScrollable={false}
                    
                    styles={{
                      container: {
                        flex: 1,
                        width: width *0.8,
                        maxHeight: height * 0.25,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      },
                      textInputContainer: {
                       width: width *0.85,
                       height: 44,
                       maxHeight: height * 0.2,
                       flexDirection: 'row',
                      },
                      textInput: {
                        width: width * 0.8,
                        borderRadius: 4,
                        borderColor: argonTheme.COLORS.BORDER,
                        backgroundColor: '#FFFFFF',
                        flex: 1,
                       },
                       row: {
                        backgroundColor: '#FFFFFF',
                        width: width * 0.8,
                        height: 30,
                        flexDirection: 'row',
                      },
                      listView: {
                        width: width * 0.8,
                        height: 30,
                        maxHeight: height,
                        flexDirection: 'row',
                      },
                    }}
                    onPress={(data, details) => console.log(data, details)} 
                    textInputProps={{
                      InputComp: ComboInput,
                      errorStyle: { color: 'red' },
                    }}        
                  />
                </Block>
                <Block row space="evenly" >
                  <Block flex left style={{marginRight:10}}>
                    <Button color="black" style={styles.createButton}>
                    <TouchableHighlight
                        onPress={() => navigation.goBack()}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            CANCELAR
                        </Text>
                    </TouchableHighlight>
                    </Button>
                  </Block>
                  <Block flex right style={{marginLeft:10}}>
                    <Button color="black" style={styles.createButton}>
                    <TouchableHighlight
                        onPress={() => onOpenCreator()}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                            CRIAR
                        </Text>
                    </TouchableHighlight>
                    </Button>
                  </Block> 
                </Block>
                </KeyboardAvoidingView>
            </Block>
        </Block>
      </Block>
    );
};

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.85,
    marginBottom: 20,
    backgroundColor: "#F5F5A4",
    borderRadius: 8,
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
  createButton: {
    width: width * 0.35,
    marginTop: height * 0.15,
  },
  headerbox: {
    width: width * 0.9,
    height: height * 0.1,
    alignItems: 'center',
    paddingVertical: 5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    borderLeftWidth: 3,
    paddingLeft: 10,
    borderLeftColor: "#FB8C00",
  },
});

export default CreateSupplyEntryService;
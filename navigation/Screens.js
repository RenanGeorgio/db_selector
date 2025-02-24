import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Block } from "galio-framework";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Register from "../screens/Register";
import PurchasesTable from "../screens/PurchasesTable";
import InventoryTable from "../screens/InventoryTable";
import SuppliersTable from "../screens/SuppliersTable";
import DeleteService from "../screens/actions/DeleteService";

import CreateInventoryEntryService from "../screens/actions/inventory/CreateInventoryService"; 
import EditInventoryEntryService from "../screens/actions/inventory/EditInventoryService";
import CreatePurchaseEntryService from "../screens/actions/purchase/CreatePurchaseService"; 
import EditPurchaseEntryService from "../screens/actions/purchase/EditPurchaseService"; 
import CreateSupplyEntryService from "../screens/actions/supplier/CreateSupplyService"; 
import EditSupplyEntryService from "../screens/actions/supplier/EditSupplyService"; 


// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              search
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function PurchasesTableStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Pedidos"
        component={PurchasesTable}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Menu"
              search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function InventoryTableStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Estoque"
        component={InventoryTable}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Menu"
              search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

function SuppliersTableStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Fornecedores"
        component={SuppliersTable}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Menu"
              search
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Account"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Account" component={Register} />
      <Drawer.Screen name="Pedidos" component={PurchasesTableStack} />
      <Drawer.Screen name="Estoque" component={InventoryTableStack} />
      <Drawer.Screen name="Fornecedores" component={SuppliersTableStack} />
      <Drawer.Screen name="Delete" component={DeleteService} />
      <Drawer.Screen name="Adicionar produto ao estoque" component={CreateInventoryEntryService} />
      <Drawer.Screen name="Editar produto no estoque" component={EditInventoryEntryService} />
      <Drawer.Screen name="Adicionar pedido" component={CreatePurchaseEntryService} />
      <Drawer.Screen name="Editar pedido" component={EditPurchaseEntryService} />
      <Drawer.Screen name="Adicionar fornecedor" component={CreateSupplyEntryService} />
      <Drawer.Screen name="Editar fornecedor" component={EditSupplyEntryService} />
    </Drawer.Navigator>
  );
}


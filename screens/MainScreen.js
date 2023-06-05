import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import useData from "../components/api";
import WeatherSearch from "../components/search";
import { useState, useEffect } from "react";

export default function MainScreen() {
  const navigation = useNavigation();
  const { loading, weather, error } = useData("Brisbane");
  const [search, setSearch] = useState("");

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    <Text>error...</Text>;
  }

  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Log In"
          color="black"
          onPress={() => {
            navigation.push("Log In");
          }}
        />
      </View>

      <WeatherSearch onSubmit={setSearch} />

      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{weather.location.name}</Text>
      </View>
      <Text>{search}</Text>
      <View style={styles.containerInfo}>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.icon}
              source={require("../assets/description.png")}
            />
            <Text style={styles.infoText}>Weather:</Text>
            <Text style={styles.infoAPI}>{weather.current.condition.text}</Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.icon}
              source={require("../assets/temperature.png")}
            />
            <Text style={styles.infoText}>Temperature:</Text>
            <Text style={styles.infoAPI}>{weather.current.temp_c} °C</Text>
          </View>
        </View>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image style={styles.icon} source={require("../assets/wind.png")} />
            <Text style={styles.infoText}>Wind Speed:</Text>
            <Text style={styles.infoAPI}>{weather.current.wind_mph} mph</Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.icon}
              source={require("../assets/humidity.png")}
            />
            <Text style={styles.infoText}>Humidity:</Text>
            <Text style={styles.infoAPI}>{weather.current.humidity} %</Text>
          </View>
        </View>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Image
              style={styles.icon}
              source={require("../assets/precipitation.png")}
            />
            <Text style={styles.infoText}>Precipitation:</Text>
            <Text style={styles.infoAPI}>{weather.current.precip_mm} mm</Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.icon}
              source={require("../assets/cloud.png")}
            />
            <Text style={styles.infoText}>Cloud:</Text>
            <Text style={styles.infoAPI}>{weather.current.cloud} %</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.update}>{weather.current.last_updated}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: "gray",
  },

  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    textDecorationLine: "underline",
  },
  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 7,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
  },
  infoAPI: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerInfo: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 20,
  },
  update: {
    margin: 5,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 50,
  },
});

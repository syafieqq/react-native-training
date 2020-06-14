import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

export default function PokeCard({ name }, { url }) {
  return (
    <TouchableOpacity>
      <View style={styles.listItemContainer}>
        <View style={styles.title}>
          <Text style={styles.pokeItemName}>{name}</Text>
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg",
            }}
            style={styles.pokeImage}
          />
        </View>

        <Text style={styles.pokeItemName}>{url}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: "solid",
    borderColor: "lightgrey",
    borderBottomWidth: 1,

    padding: 16,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pokeItemName: {
    color: "#000",
    fontSize: 17,
  },
  pokeImage: {
    backgroundColor: "transparent",
    height: 30,
    width: 30,
  },
});

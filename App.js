import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  ScrollView,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        style={{
          resizeMode: "stretch",
          width: "100%",
          height: 200,
          marginBottom: 10,
        }}
        source={{ uri: props.musica.capa }}
      />
      <Text style={{ fontSize: 20, color: "#fff" }}>
        {" "}
        {props.musica.titulo}
      </Text>
      <Text style={{ fontSize: 20, color: "#fff" }}>
        {" "}
        {props.musica.estilo}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "#FFFFFF" }}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  const musicas = [
    {
      estilo: "Trap",
      capa: "https://i.scdn.co/image/ab67616d0000b273da3afe80c5c5de708815824a",
      titulo: "Coracao de Gelo",
    },
    {
      estilo: "Hip-Hop",
      capa: "https://i.ytimg.com/vi/MQ-WgFAp23k/maxresdefault.jpg",
      titulo: "Quem é o boss",
    },
    {
      estilo: "POP",
      capa: "https://i.scdn.co/image/ab6761610000e5eb667019b2e17bb680ccd76622",
      titulo: "Nota de Voz 8",
    },
    {
      estilo: "kPOP",
      capa: "https://m.media-amazon.com/images/I/41s8NCZUMvL._AC_SX425_.jpg",
      titulo: "friends",
    },
    {
      estilo: "Funk",
      capa: "https://i.ytimg.com/vi/G6lmTPZ_WqM/maxresdefault.jpg",
      titulo: "Final do Ano",
    },
    {
      estilo: "Sertanejo",
      capa: "https://i.scdn.co/image/ab67616d0000b27373f4ae9b522045c56003eb9f",
      titulo: "2050",
    },
    {
      estilo: "Hip-Hop",
      capa: "https://akamai.sscdn.co/uploadfile/letras/albuns/6/2/8/b/01649940650.jpg",
      titulo: "Insonia 2",
    },
    {
      estilo: "Poesia Acustica",
      capa: "https://i.scdn.co/image/ab67616d0000b2732b85e88f99d75b20833ff516",
      titulo: "Sobre Nos",
    },
    {
      estilo: "Country",
      capa: "https://akamai.sscdn.co/uploadfile/letras/fotos/1/9/e/2/19e2e41a9af538778ca6e14878c4a2ba.jpg",
      titulo: "fazendinha 2",
    },
    {
      estilo: "Funk",
      capa: "https://i.ytimg.com/vi/rauWFYwErdI/maxresdefault.jpg",
      titulo: "Coraçao Amoleceu",
    },
  ];

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>Albuns</Text>
        <View style={styles.content}>
          <ScrollView>
            {musicas.map((item, index) => (
              <Card musica={item} key={index} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      alignContent: "center",
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      top: 40,
      width: "100%",
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: "#fff",
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 40,
    },
    card: {
      alignSelf: "center",
      borderRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: "#000",
      width: "50%",
      margin: 30,
      height: 270,
      alignItems: "center",
    },
    button: {
      alignSelf: "center",
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: "red",
      width: "100%",
      alignItems: "center",
      margin: 10,
      height: 20,
      borderRadius: 10,
    },
  });


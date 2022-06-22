import { StyleSheet, Dimensions } from 'react-native'; 

// Tamanho da largura da tela
var width = Dimensions.get('window').width;

// Estilização do componente Header
const header = StyleSheet.create({
  background: {
    width: width,
    height: 80,
    backgroundColor: "#772ea2"
  },
  container: {
    left: 16
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500"
  },
  logo: {
    width: 80,
    height: 80,
    right: 20,
    position: "absolute",
  }  
});

// Para que nosso arquivo possa ser importado, temos que exportar ele 
// Utilizamos 'export default grupo1' se quisermos exportar um grupo de estil
// Utilizarmos 'export { grupo1, grupo2, grupo3 }' para exportarmos mais de u
export default header;
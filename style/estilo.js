import {StyleSheet} from 'react-native';

const estilo=StyleSheet.create({

corpo:{
    backgroundColor: '#696969',
},

container:{
    alignItems: 'center',
    marginTop: 40,
},

header:{
    alignItems: 'center',
    backgroundColor: '#808080',
    shadowColor: "white",
    shadowOffset:{
    width: 0,
    height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 11.14,
    elevation: 15,
},

titulo:{
    fontSize: 40,
},

contador:{
    fontSize: 35,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 22,
},

botao:{
    marginTop: 15,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
},

textoBotao:{
    alignSelf: 'center',
    fontSize: 20
},

voltas:{
    fontSize: 18,
    color: 'white'
}

});


export default estilo;
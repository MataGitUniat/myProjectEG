import {Platform,StyleSheet,StatusBar} from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      ...Platform.select({
          ios: {paddingTop: 42},
          android: {paddingTop: StatusBar.currentHeight}
      })
    },

    box: {
        width:100,
        //height:100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'stretch',
        borderBottomWidth: 1,
        backgroundColor: 'lightgray',
    },
    
    boxText: {
        color:"darkslategray",
        fontWeight : "bold",
    }
});

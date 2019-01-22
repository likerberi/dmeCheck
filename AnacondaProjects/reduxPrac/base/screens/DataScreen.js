import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { ButtonGroup } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Data',
  };

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Price', 'Change', 'Vivaldi'],
      tableData: [
      ['Sample1', '23755.10',	'-0.51 %', 	 'Winter'],
      ['Sample2', '2569.08', 	'-0.61%', 	 'Winter'],
      ['Sample3', '6896.73', 	'-0.87%', 	 'Winter'],
      ['Sample4', '51.59', 	    '-1.47%', 	 'Fall'],
      ['Sample5', '1292.60', 	'+0.05%', 	 'Spring',],
      ['Sample6', '15.69', 	    '-0.05%', 	 'Spring',],
      ['Sample7', '1.1518', 	'-1.10%', 	 'Summer',],
      ['Sample8', '2.698', 	    '-1.10%', 	 'Summer',],
      ['Sample9', '21.08', 	    '6.41 %', 	 'Summer',],
      ],
      selectedIndex: 2,
    }
    this.updatedIndex = this.updatedIndex.bind(this)
  }

  updatedIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const {selectedIndex} = this.state;
    const buttons = ["Edit", "Add Items", "Sort"];

    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Which Season?</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      
      <View style={styles.container}>  
        <ButtonGroup 
        onPress = {this.updatedIndex}
        selectedIndex = {selectedIndex}
        buttons = {buttons}
        containerStyle={{height:40}}
        underlayColor='blue'
        />
        
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        
      </View>

    )
  }
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' },
    index: {
      fontSize: 25,
    },
    btnContainer: {
      width: '50',
    }
});
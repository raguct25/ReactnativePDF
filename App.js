import React, { Component } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import RNHTMLtoPDF from "react-native-html-to-pdf";

const title = "Salzer - Charging History";
const result = [
  {
    sno: "1",
    name: "RAGU",
    date: "12-07-2019",
    time: "12:10:45 pm",
    energy: "1000.00",
    cost: "5444.12",
    charging: "24 hrs 50 min",
    amount: "9999999"
  },
  {
    sno: "2",
    name: "GANDHI",
    date: "12-07-2019",
    time: "12:10:45 pm",
    energy: "1000.00",
    cost: "5444.12",
    charging: "24 hrs 50 min",
    amount: "9999999"
  },
  {
    sno: "3",
    name: "DANIEL",
    date: "12-07-2019",
    time: "12:10:45 pm",
    energy: "1000.00",
    cost: "5444.12",
    charging: "24 hrs 50 min",
    amount: "9999999"
  }
];

const repeatStyle = () => {
  return result
    .map(result => {
      return `<tr><td>${result.sno}</td><td>${result.name}</td><td>${
        result.date
      }</td><td>${result.time}</td><td>${result.energy}</td><td>₹&nbsp;${
        result.cost
      }</td><td>${result.charging}</td><td>₹&nbsp;${result.amount}</td></tr>`;
    })
    .join("");
};

const downloadData = () => {
  return `<!DOCTYPE html><html><style>  table,th,td{border: 1px solid black;}  th,td{padding: 5px; text-align: left;}  table {border-collapse: collapse;width: 100%;}
  </style><center><h1>${title}</h1></center><table style="width:100%"><tr><th>S.No</th><th>RFID</th><th>Date</th><th>Time</th><th>Energy</th><th>Cost</th><th>Charging</th><th>Amount</th></tr><tr>${repeatStyle()}</tr></table></html>`;
};

export default class App extends Component {
  async createPDF() {
    let options = {
      html: downloadData(),
      fileName: "test",
      directory: "Salzer"
    };
    let file = await RNHTMLtoPDF.convert(options);
  }

  render() {
    console.log("result", repeatStyle());
    return (
      <View>
        <TouchableHighlight onPress={this.createPDF}>
          <Text>Create PDF</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

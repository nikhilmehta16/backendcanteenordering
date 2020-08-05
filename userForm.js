import React, { Component } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Button,
} from "react-native";

class CustomerForm extends Component {
  state = {
    hall: "",
    id: "",
    title: "",
    image: "",
    price: "",
    subtitle: "",
    cust: [],
  };

  renderTextfield(options) {
    return (
      <TextInput
        style={styles.textField}
        onChangeText={(value) => this.setState({ [options.name]: value })}
        placeholder={options.label}
        value={this.state[options.name]}
        keyboardType={options.keyboard || "default"}
      />
    );
  }

  async postData(c){
    try{
      let result = await fetch("http://192.168.0.175:3000/menu",{
        method : 'post',
        headers : {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'

        },
        body : JSON.stringify(c)
      });
    } catch(e) {
      console.log(e)
    }
  };


  onPressButton = () => {
    const { hall, id, title, image, subtitle } = this.state;
    if (hall === "") {
      return Alert.alert("enter 2");
    }
    if (id === "") {
      return Alert.alert("enter id");
    }
    if (title === "") {
      return Alert.alert("enter title");
    }
    if (image === "") {
      return Alert.alert("enter image");
    }
    if (subtitle === "") {
      return Alert.alert("enter subtighgvhgtle");
    }
    this.setState({ hall: "" });
    this.setState({ id: "" });
    this.setState({ title: "" });
    this.setState({ image: "" });
    this.setState({ subtitle: "" });
    let customer = {
      hall: this.state.hall,
      id: this.state.id,
      title: this.state.title,
      image: this.state.image,
      subtitle: this.state.subtitle,
    };

    this.state.cust.push(customer),

    console.log(this.state.cust);
    //console.log(customer);
    this.postData(customer);


  };

  renderButton() {
    return (
      <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
        <Text style={styles.btnText}>proceed</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.panel}>
        {this.renderTextfield({ name: "hall", label: "Your Hall" })}
        {this.renderTextfield({
          name: "id",
          label: "Id",
        })}
        {this.renderTextfield({
          name: "title",
          label: "Your Title",
        })}
        {this.renderTextfield({ name: "image", label: "Your Image" })}
        {this.renderTextfield({ name: "subtitle", label: "Your Subtitle" })}
        {this.renderButton()}
        {/* <View>
          <Button title="click" onPress={console.log(this.state.cust)} />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: "#fff",
    borderRadius: 3,
    padding: 10,
    margin: 10,
  },
  textField: {
    height: 40,
    margin: 8,
  },
  btn: {
    backgroundColor: "#34495e",
    borderRadius: 3,
    padding: 12,
    flex: 1,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
});

export default CustomerForm;

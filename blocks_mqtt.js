module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["mqtt_block"] = {
    init: function() {

      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(
          "https://image.flaticon.com/icons/svg/1932/1932998.svg",
          24,
          24,
          "*"))
        .appendField("MQTT");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("HOST")
        .appendField(new Blockly.FieldTextInput("mqtt.cmmc.io"),
          "MQTT_HOST");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("USERNAME")
        .appendField(new Blockly.FieldTextInput(""), "MQTT_USERNAME");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("PASSWORD")
        .appendField(new Blockly.FieldTextInput(""), "MQTT_PASSWORD");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("PORT")
        .appendField(new Blockly.FieldTextInput("1883"), "MQTT_PORT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mqtt_connect_block"] = {
    init: function() {

      let clientId = "CLIENT-" +
        Math.random().toString(36).substring(5).toUpperCase();

      this.appendDummyInput()
        .appendField("CONNECT")
        .appendField(new Blockly.FieldTextInput(clientId), "MQTT_CLIENT_ID");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mqtt_publish_block"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("MQTT PUBLISH");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TOPIC")
        .appendField(new Blockly.FieldTextInput(""), "MQTT_TOPIC");
      this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("DATA");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mqtt_subscribe_block"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("MQTT SUBSCRIBE")
        .appendField(new Blockly.FieldTextInput(""), "MQTT_SUB_TOPIC");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mqtt_callback_block"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("MQTT CALLBACK");
      this.appendStatementInput("MQTT_STATEMENT")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mqtt_condition_block"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(
          "https://image.flaticon.com/icons/svg/234/234158.svg",
          32,
          32,
          "*"))
        .appendField("MQTT CONDITION TOPIC")
        .appendField(new Blockly.FieldTextInput(""), "MQTT_CONDITION_TOPIC");
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PAYLOAD STORE IN")
        .appendField(new Blockly.FieldVariable(null), "MQTT_STORE");
      this.appendStatementInput("NAME")
        .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["mqtt_loop_block"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("MQTT LOOP");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

};

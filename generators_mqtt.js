module.exports = function(Blockly) {
  "use strict";

  let clientId;
  let mqtt_username = "";
  let mqtt_password = "";

  Blockly.JavaScript["mqtt_block"] = function(block) {
    var text_mqtt_host = block.getFieldValue("MQTT_HOST");
    var text_mqtt_username = block.getFieldValue("MQTT_USERNAME");
    var text_mqtt_password = block.getFieldValue("MQTT_PASSWORD");
    var text_mqtt_port = block.getFieldValue("MQTT_PORT");
    //var text_mqtt_client_id = block.getFieldValue("MQTT_CLIENT_ID");

    mqtt_username = text_mqtt_username;
    mqtt_password = text_mqtt_password;

    // TODO: Assemble JavaScript into code variable.
    var code = `
    #EXTINC #include <WiFi.h> #END
    #EXTINC #include <PubSubClient.h> #END
    #FUNCTION
    WiFiClient client;
    PubSubClient mqtt(client, "${text_mqtt_host}", ${text_mqtt_port});
    #END
    `;
    return code;
  };

  Blockly.JavaScript["mqtt_connect_block"] = function(block) {
    var text_mqtt_client_id = block.getFieldValue("MQTT_CLIENT_ID");
    clientId = text_mqtt_client_id;
    // TODO: Assemble JavaScript into code variable.
    var code = `
    mqtt.set_callback(callback);
    mqtt.connect(MQTT::Connect("${text_mqtt_client_id}").set_auth("${mqtt_username}", "${mqtt_password}"));
    `;
    return code;
  };

  Blockly.JavaScript["mqtt_publish_block"] = function(block) {
    var text_mqtt_topic = block.getFieldValue("MQTT_TOPIC");
    var value_name = Blockly.JavaScript.valueToCode(block,
      "NAME",
      Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `
    mqtt.publish("${text_mqtt_topic}",String(${value_name}));
    `;
    return code;
  };

  Blockly.JavaScript["mqtt_subscribe_block"] = function(block) {
    var text_mqtt_sub_topic = block.getFieldValue("MQTT_SUB_TOPIC");
    // TODO: Assemble JavaScript into code variable.
    var code = `
    mqtt.subscribe("${text_mqtt_sub_topic}");
    `;
    return code;
  };

  Blockly.JavaScript["mqtt_callback_block"] = function(block) {
    var statements_mqtt_statement = Blockly.JavaScript.statementToCode(block,
      "MQTT_STATEMENT");
    // TODO: Assemble JavaScript into code variable.
    var code = `
    #FUNCTION
    
    typedef struct Node Node;

    struct Node
    {
        String topic;
        String payload;
    };
    
    Node rootNode;
    
    void callback(const MQTT::Publish& pub) {
      rootNode.topic = pub.topic();
      rootNode.payload = pub.payload_string();
      //Serial.print(pub.topic());
      //Serial.print(" => ");
      //Serial.println(pub.payload_string());
      ${statements_mqtt_statement}
    }
    #END
    `;
    return code;
  };

  Blockly.JavaScript["mqtt_condition_block"] = function(block) {
    var text_mqtt_condition_topic = block.getFieldValue("MQTT_CONDITION_TOPIC");
    var variable_mqtt_store = Blockly.JavaScript.variableDB_.getName(block.getFieldValue(
      "MQTT_STORE"), Blockly.Variables.NAME_TYPE);
    var statements_name = Blockly.JavaScript.statementToCode(block, "NAME");
    // TODO: Assemble JavaScript into code variable.
    var code = `
      ${variable_mqtt_store} = rootNode.payload;
      if (rootNode.topic == "${text_mqtt_condition_topic}") {
        ${statements_name}
      }
    `;
    return code;
  };

  Blockly.JavaScript["mqtt_loop_block"] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = `
    mqtt.loop();
    `;
    return code;
  };

};

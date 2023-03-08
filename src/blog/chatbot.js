import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const dialogflow = window.dialogflow;

class Chatbot extends Component {
  componentDidMount() {
    this.widget = window.document.querySelector('.rcw-widget-container');
    this.initializeDialogflow();
  }

  initializeDialogflow() {
    const { REACT_APP_DIALOGFLOW_CLIENT_ACCESS_TOKEN } = process.env;
    this.sessionClient = new dialogflow.SessionsClient();
    this.sessionPath = this.sessionClient.sessionPath(
      process.env.REACT_APP_DIALOGFLOW_PROJECT_ID,
      this.props.userId
    );
    const request = {
      session: this.sessionPath,
      queryInput: {
        text: {
          text: '',
          languageCode: 'en-US',
        },
      },
    };
    this.sessionClient
      .detectIntent(request)
      .then((responses) => {
        const result = responses[0].queryResult;
        addResponseMessage(result.fulfillmentText);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleNewUserMessage = (newMessage) => {
    const request = {
      session: this.sessionPath,
      queryInput: {
        text: {
          text: newMessage,
          languageCode: 'en-US',
        },
      },
    };
    this.sessionClient
      .detectIntent(request)
      .then((responses) => {
        const result = responses[0].queryResult;
        addResponseMessage(result.fulfillmentText);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <Widget
        handleNewUserMessage={this.handleNewUserMessage}
        title="KL University Chatbot"
        subtitle="Ask me anything!"
        senderPlaceHolder="Type a message..."
        profileAvatar="https://klh.edu.in/admissions/img/banner-1.jpg"
      />
    );
  }
}

export default Chatbot;

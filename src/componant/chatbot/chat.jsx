import { Component, Fragment } from "react";
import "./chatbot.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: {
        question: "",
        reponse: "",
      },
      input: "",
      affiche: false,
      conversation: [],
    };

    this.ques = ["hello", "how are you", "what is your name"];

    this.rep = [
      "hi !",
      "i am fine what about you",
      "i am a chat boot name sara",
    ];
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { input, chat, conversation } = this.state;
    chat.question = input;
    for (let index = 0; index < this.ques.length; index++) {
      const element = this.ques[index];
      if (element === input) {
        chat.reponse = this.rep[index];
        break;
      } else {
        chat.reponse = "i don't understand";
      }
    }
    conversation.push(chat);
    this.setState({
      input: "",
      chat: {
        reponse: chat.reponse,
      },
      conversation: conversation,
    });
  };
  render() {
    let { conversation, affiche } = this.state;
    return (
      <>
      
        <div className={affiche === true ? "chat affiche card" : "chat card"}>
          <div className="card-header header">
            <i className="bi bi-person-circle fs-5"></i>
            <h5 className="d-inline m-2">Chat Bot</h5>
            <button
              className=" float-end  retour"
              onClick={() => {
                this.setState({ affiche: !affiche });
              }}
            >
              <i className="bi bi-chevron-right text-white"></i>
            </button>
            <div className="ligne">
              <p className="d-inline">En ligne</p>
              <i className="bi bi-circle-fill enligne"></i>
            </div>
          </div>
          <div className="scroll">
            {conversation.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div className="qst">{item.question}</div>
                  <div className="rep">{item.reponse}</div>
                </Fragment>
              );
            })}
          </div>

          <div className="form">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="put">
                <input
                  type="text"
                  onChange={this.handleChange}
                  className="putIn"
                  value={this.state.input}
                  placeholder="Noveau Message"
                />
                <button className="send">
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* button externe */}
        <div>
          <button
            className="lance"
            onClick={() => {
              this.setState({ affiche: !affiche });
            }}
          >
            <i className="bi bi-chat-right-dots-fill"></i>
          </button>
        </div>
      </>
    );
  }
}
export default Chat;

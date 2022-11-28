import "./conversation.css"

export default function Conversation() {
  return (
    <div className="conversation">
        <img className="conversationImg" src="/avatar.png" alt="" />
        <div className="conversationContent">
          <div className="topContent">
            <span className="messageName">Joe Moore</span>
            <span className="messageTime">13 hours ago</span>
          </div>
          <span className="messageContent">Lorem Ipsum bottom. This is a test message, and it's cool! I'm going to duplicate this message!</span>
        </div>
    </div>
  );
};

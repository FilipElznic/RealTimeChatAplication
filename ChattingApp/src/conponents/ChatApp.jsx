import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "messages"), orderBy("createdAt"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const messagesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesData);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "" || !user) return;
    try {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
      });
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (!user) {
    return (
      <div className="app">
        <div className="chat-app">
          <div className="chat-container">
            <div className="chat-header">
              <h1 className="chat-title">CYBER CHAT</h1>
              <p className="chat-subtitle">
                {"/// SECURE NEURAL LINK REQUIRED ///"}
              </p>
            </div>
            <div className="auth-container">
              <button onClick={signInWithGoogle} className="google-signin">
                INITIALIZE NEURAL LINK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="chat-app">
        <div className="chat-container">
          <div className="chat-header">
            <h1 className="chat-title">CYBER CHAT</h1>
            <p className="chat-subtitle">{"/// NEURAL LINK ESTABLISHED ///"}</p>
            <button onClick={handleSignOut} className="signout-button">
              DISCONNECT
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message) => (
              <div key={message.id} className="message">
                <div className="message-header">
                  {message.photoURL && (
                    <img
                      src={message.photoURL}
                      alt="User"
                      className="user-avatar"
                    />
                  )}
                  <span className="user-name">{message.user}</span>
                  <span className="timestamp">
                    {message.createdAt?.toDate().toLocaleTimeString()}
                  </span>
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="input-container">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Transmit neural data..."
              className="message-input"
            />
            <button type="submit" className="send-button">
              TRANSMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;

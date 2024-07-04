const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const userName = document.getElementById('user-name');
const otherUserName = document.getElementById('other-user-name');

let messages = [];
let currentUser = 'User 1';
let otherUser = 'User 2';

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message !== '') {
        messages.push({ text: message, timestamp: new Date().toLocaleTimeString(), user: currentUser });
        renderChatLog();
        messageInput.value = '';
        simulateOtherUserResponse();
    }
});

function renderChatLog() {
    chatLog.innerHTML = '';
    messages.forEach((message) => {
        const li = document.createElement('li');
        li.className = message.user === currentUser ? 'me' : 'other';
        li.innerHTML = `
            <span>${message.text}</span>
            <span class="timestamp">${message.timestamp}</span>
        `;
        chatLog.appendChild(li);
    });
}

function simulateOtherUserResponse() {
    setTimeout(() => {
        const response = `Hello, ${currentUser}!`;
        messages.push({ text: response, timestamp: new Date().toLocaleTimeString(), user: otherUser });
        renderChatLog();
    }, 1000);
}

renderChatLog();
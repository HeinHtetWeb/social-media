// Sidebar
const menuItems = document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages  = document.querySelector('.messages');
const messageList = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//  =================== Messages ==================
//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
messageList.forEach(user => {
    let name = user.querySelector('h5').textContent.toLocaleLowerCase();
    if(name.indexOf(val) != -1){
        user.style.display = 'flex';
    }else{
        user.style.display = 'none';
    }
})
}
//search chat
messageSearch.addEventListener('keyup', searchMessage)

//highlight message card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000)
})
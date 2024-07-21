/* this script includes everything client side related to chat,
example: chat report, opening and closing chat, sending messages
*/

"use strict";

const chat = (function(){
    
    // Variables

    let chat_open = false;

    const chat_popup = document.getElementById("chatpopup")


    // Functions

    function update_chat(update_type){
        if (update_type == "toggle") {update_chat(!chat_open); return}
        if (update_chat) open_chat();else close_chat()

    }

    function open_chat(){
        chat_open = true
    }

    function close_chat(){
        chat_open = false
    }

    function get_chat_open(){
        return chat
    }

    function send_message(){

    }

    return Object.freeze({
        update_chat,
        get_chat_open,
        send_message
    })

})();
import { EventEmitter } from "events";

const emmiter = new EventEmitter();
emmiter.on('send_email', ) (email_address)=>{
    console.info('Email Berhasil dikirim ke alamat: ' + email_address);
});


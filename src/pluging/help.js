import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
 

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";


const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let ethix = {
    public: true // or false
};

let mode = ethix.public ? 'public' : 'private';

        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `╭─────────────━┈#       
| 🤖DEXTER-MD whatsapp bot
| 👑version- 0.0.2
| 💻owner 
╰─────────────━┈>>
╭━❮ 𝙰𝙸 ❯━╮
┃✰ ${prefix}A i 
┃✰ ${prefix}G t p 
┃✰ ${prefix}r e m i n
╰━━━━━━━━━━━━━━>>
╭━❮ O W A N ❯━╮
┃✰ ${prefix}a l w s o n l I n e 
┃✰ ${prefix}a u t o r e c t 
┃✰ ${prefix}a n t i c a l l 
┃✰ ${prefix}l e a v e 
┃✰ ${prefix}a u t o s v i e w
╰━━━━━━━━━━━━━━━>>
╭━❮ D O W N L O A D ❯━╮
┃✰ ${prefix}f b 
┃✰ ${prefix}t I k t o k 
┃✰ ${prefix}y t m p 4 
┃✰ ${prefix}y t m p 3 
┃✰ ${prefix}a p k 
┃✰ ${prefix}m e d i a f i r e 
┃✰ ${prefix}p l a y 
┃✰ ${prefix}v i d e o 
╰━━━━━━━━━━━━━━━>>
╭━❮ S E A R C H ❯━╮
┃✰ ${prefix}p l a y 
┃✰ ${prefix}y t s 
┃✰ ${prefix}g o o g l e
╰━━━━━━━━━━━━━━━>>
╭━❮ T O O L ❯━╮
┃✰ ${prefix}c a l c u l e t e r 
┃✰ ${prefix}t r t
╰━━━━━━━━━━━━━━━>>`  
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "© Powered By DEXTER-MD"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/Al.jpg')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false 
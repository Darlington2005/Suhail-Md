const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347036042859";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_18_49_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyR29oQWE3NEdoM2ZSclN2TU5IRFpOR245MkhRVGl0YXUwLzVLT01mMFFFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzYwNDI4NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjIwRjI4Mzg0REEyN0NBRDg5OERGRTAxOEVFQzlCQkM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM3ODE4OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhU1dGN0Jtc1I4dUg2RlFoa1BaX21nXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ1NDFlYzk2LThjZGYtNDFiZC1iYjRkLTFjOWM3NTE2Mjk3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxNTIsXG4gICAgICA0MyxcbiAgICAgIDE5MyxcbiAgICAgIDE3LFxuICAgICAgOTcsXG4gICAgICAxNjAsXG4gICAgICA0MCxcbiAgICAgIDExOCxcbiAgICAgIDE5OSxcbiAgICAgIDIyNyxcbiAgICAgIDE1NyxcbiAgICAgIDI1MCxcbiAgICAgIDE3OSxcbiAgICAgIDE3OSxcbiAgICAgIDY0LFxuICAgICAgMTM3LFxuICAgICAgNDcsXG4gICAgICAxMDUsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDQwLFxuICAgICAgMjQsXG4gICAgICAxODQsXG4gICAgICAyMjksXG4gICAgICAxNTYsXG4gICAgICA0NyxcbiAgICAgIDYyLFxuICAgICAgMTI0LFxuICAgICAgMjI5LFxuICAgICAgMjUzLFxuICAgICAgMTE1LFxuICAgICAgNDEsXG4gICAgICA1MCxcbiAgICAgIDU1LFxuICAgICAgMTI4LFxuICAgICAgMTI3LFxuICAgICAgMTI3LFxuICAgICAgNjIsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFBFNTlNRFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzYwNDI4NTk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY0MzI1NzkyMzAxMDY1OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ056cjBic0hFTVhHcTdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYlJQdndwUC9XSytTR2RxMTRacEd0OWphbjVmWTZYaFNhV0tDa2oxaHdUdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVdlBuYm1yRytwc2VXMjBPbEpOUmxHSVpMb2Jjb3RQVlB0V1JnOUxFMVZOdjUvcjMvU2lVMnZDRVorM2c2NFlna3gvUy90ZGRpbHFVeitRQzBGOWVBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmZ3BJR3FuWlVRZUltTytqRGNKT1U2SlpCWitwWG5mNjNyZ1RUSWF4ZU00QjcxT2dYZVdwNmZ2UlRqNmp2dnVvVlZaK2hNNzdYUzMwWWt2N1BIRUpoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM2MDQyODU5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzc4MTg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjgvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGOC8uanNvbiI6IHt9Cn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

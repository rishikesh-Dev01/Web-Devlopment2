const mongoose = require('mongoose');
const chatModel = require('./Models/chat');
const dotenv = require('dotenv');
dotenv.config();

main()
    .then(() => {
        console.log('Connection successful');
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURL);
}

let allChats = [
    {
      from: 'Alisha',
      to: 'Kajal',
      message: 'send me your exam sheet',
      created_at: new Date()
    },
    {
      from: 'kajal',
      to: 'Neha',
      message: 'send me your insta id',
      created_at: new Date()
    },
    {
      from: 'Amit',
      to: 'vickey',
      message: 'give me your persnol data',
      created_at: new Date()
    },
    {
      from: 'Sandip',
      to: 'Kajal',
      message: 'send me your exam sheet',
      created_at: new Date()
    },
    {
      from: 'Rohit',
      to: 'rahul',
      message: 'kya hal hai bhai',
      created_at: new Date()
    },
    {
      from: 'gulgul',
      to: 'munna',
      message: 'send me your gf insta id',
      created_at: new Date()
    },
    {
      from: 'anand',
      to: 'Alisha',
      message: 'I went your phone number',
      created_at: new Date()
    },
];

 chatModel.insertMany(allChats);

// Chat1.save()
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


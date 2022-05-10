const db=require('../connections/db')
const Sequelize=require('sequelize')
const User=db.define("imployees",{
    imployeeId:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
      },
    Name:{
        type:Sequelize.STRING},
    lastName:{
        type:Sequelize.STRING},
        
    Email:{
        type:Sequelize.STRING},
    phoneNumber:{
        type:Sequelize.STRING},
    password:{
        type:Sequelize.STRING},
        
})

module.exports =User

// becrypt joi express json morgan 

// Sequelize एक वादा-आधारित Node. पोस्टग्रेज, MySQL, MariaDB, SQLite और Microsoft SQL
//  सर्वर के लिए js ORM। इसकी विशेषताएं ठोस लेनदेन समर्थन, संबंध, उत्सुक और आलसी लोडिंग, प्रतिकृति पढ़ना और
//   बहुत कुछ हैं
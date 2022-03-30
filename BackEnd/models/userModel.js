import  Sequelize  from "sequelize"
import { connection } from "../database/db.js";

const User = connection.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        min:{
            args:[6],
            msg: 'Please enter a valid name'
        },
        allowNull: false,
    },
    email:{
        type: Sequelize.TEXT,
        min:{
            args:[6],
            msg: 'Please enter a valid email'
        },
        allowNull: false,
        unique: true,
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false,
        min:{
            args:[6],
            msg: 'Please provide a valid password'
        }
    },
    deleted_at:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

User.sync({force: false})

export default  User
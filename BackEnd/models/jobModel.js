import  Sequelize  from "sequelize"
import { connection } from "../database/db.js";

const Job = connection.define('job', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        min:{
            args:[5],
            msg: 'Please enter a bigger title'
        },
        allowNull: false,
    },
    description:{
        type: Sequelize.TEXT,
        min:{
            args:[5],
            msg: 'Please enter a bigger description'
        },
        allowNull: false,
    },
    company:{
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    location:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: true
    },
    deleted_at:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

Job.sync({force: false})

export default  Job
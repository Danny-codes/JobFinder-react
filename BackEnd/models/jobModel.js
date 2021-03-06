import  Sequelize  from "sequelize"
import { connection } from "../database/db.js";

const Job = connection.define('job', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    recruiter: {
        type: Sequelize.INTEGER,
        allowNul: false,
        references:{model: 'users', key: 'id'}
    },
    role:{
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
    state:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    contract: {
        type: Sequelize.STRING,
        allowNull: true
    },
    category : {
        type: Sequelize.STRING,
        allowNull: false
    },
    deleted_at:{
        type: Sequelize.DATE,
        allowNull: true
    },
    completed_at:{
        type: Sequelize.DATE,
        allowNull: true
    }
})

Job.sync({force: false})

export default  Job
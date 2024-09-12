import db from "../db.js"

const Schema = db.Schema;

const studentSchema = new Schema({
    nome : {
        type: String,
        required : true
    }, 
    birthDate : {
        type: Date,
        required: true
    },
    zipCode : {
        type: String, //porque pode começar com zero
        required: true,
        minLength : 8,
        maxLength : 8,
    },
    email : {
        type : String,
        validator : {
            validator : function(v) {
                return /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
        },
        required: true
    }
})

const Student = db.model("Student", studentSchema)

export default Student
const mongoose = require("mongoose")

const foodschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
       type: String,
       required: true 
    },
    time: {
        type: Date,
        default:Date.now()
    },
    recipe: {
        type: Array,
        required:true
    }
},{
    timestamps:true

}
)

const Food = mongoose.model("Food", foodschema)
module.exports=Food
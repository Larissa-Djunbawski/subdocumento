import mongoose from "mongoose"

const mongoDB = "mongodb://localhost:27017"
const database = "armario" //nome do banco de dados

const main = async () => {
    mongoose.connect(mongoDB + database)
}

main()
   .then(() => console.log(`Conectado com sucesso ${database}`))
   .catch(err => console.log(err))

export default mongoose  


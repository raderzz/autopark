import mongoose = require('mongoose');

class ConexaoMongo {
  abrir(str: string) {
    mongoose.connect(str, {useNewUrlParser: true});
  }
}

export default ConexaoMongo;
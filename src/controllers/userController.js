import Users from "../models/UserModel";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getUserByToken from "../utils/getUserByToken";

const dualGet = async (req,res) =>{ 
  try{
    let { id } = req.params

    id = id ? id.toString().replace(/\D/g, '') :null

    if(!id){
      return await getAll(req, res)
    }else{
      return await getById(id, req, res)
    }
  }catch(error){
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}

const getByToken = async (req, res) => {
  try{
    const user = await getUserByToken.getUserByToken(req.headers.authorization)
    
    if(user) {
      return res.status(200).send({
        type: 'success',
        message: 'Usuario encontrado',
        data: user
      });
    }

  }catch(error){
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error.message
    });
  }
}

const getAll = async (req, res) => {
  try {
    const response = await Users.findAll({
      order: [['id', 'ASC']]
    });
    return res.status(200).send({
      type: 'sucess', // sucess, error, warning, info
      message: 'Registros recuperados com sucesso', // mensagem para o front exibir
      data: response // json com informações de resposta
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}


const getById = async (id, req, res) =>{
  try {
    let response = await Users.findOne({
      where:{
        id
      }
    })

    if (!response) {
      return res.status(200).send({
        type: 'warning',
        message: 'Não foi encontrado usuario com este ID',
      });
    }
    
    return res.status(200).send({
      type: 'sucess',
      message: 'Usuario encontrado',
      data: response
    });

  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}

const validate = async (req, res) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(' ')[1]
      let funcao = jwt.verify(token, process.env.TOKEN_KEY);
      return res.status(200).send({role: funcao.role});
    }
  } catch (error) {
    res.status(400).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro',
      data: error.message
    })
  }
}

const persist = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      return await register(req.body, res)
    }
    return await update(id, req.body, res)

  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error.message
    });
  }
}

const register = async (data, res) => {
  try {
    let { username, name, phone, password, role, cpf,email } = data;

    let userExists = await Users.findOne({
      where: {
        username
      }
    });

    if (userExists) {
      return res.status(200).send({
        type: 'error',
        message: 'Já existe um usuário cadastrado com esse username!'
      });
    }

    let passwordHash = await bcrypt.hash(password, 10);

    let response = await Users.create({
      username,
      name,
      phone,
      passwordHash,
      role,
      cpf,
      email
    });

    return res.status(200).send({
      type: 'sucess',
      message: 'Usuário cadastrastado com sucesso!',
      data: response
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error.message
    });
  }
}

const update = async (id, data, res) => {
  try {
    let response = await Users.findOne({
      where: {
        id
      }
    })
    // console.log(response);
    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Não foi encontrado categorias com o id ${id}`
      });
    }
    let usernameForget = false;
    Object.keys(data).forEach(datas => {
      response[datas] = data[datas]
      if (datas == "username") {
        usernameForget = true
      }
    })
    
    // console.log(response);
    await response.save()

    return res.status(200).send({
      type: 'sucess', // sucess, error, warning, info
      message: 'Registros atualizados com sucesso, logue novamente!', // mensagem para o front exibir
      usernameForget,
      data: response // json com informações de resposta
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error,
    });
  }
}

const login = async (req, res) => {
  try {
    let { username, password } = req.body;

    let user = await Users.findOne({
      where: {
        username
      }
    });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(200).send({
        type: 'error',
        message: 'Usuário ou senha incorretos!'
      });
    }

    let token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role }, //payload - dados utilizados na criacao do token
      process.env.TOKEN_KEY, //chave PRIVADA da aplicação 
      { expiresIn: '1h' } //options ... em quanto tempo ele expira...
    );

    user.token = token;
    await user.save();

    return res.status(200).send({
      type: 'success',
      message: 'Bem-vindo! Login realizado com sucesso!',
      data: user,
      token
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}

const delet = async (req, res) => {
  try {
    let { id } = req.params
    id = id.toString()
    id = id ? id.replace(/\D/g, '') : null
    if (!id) {
      return res.status(200).send({
        type: 'warning',
        message: 'Informe um id válido para deletar o usuário',
      });
    }

    let response = await Users.findOne({
      where: {
        id: id
      }
    })

    if (!response) {
      return res.status(200).send({
        type: 'warning',
        message: `Não foi encontrado um usuário com o id ${id}`,
      });
    }


    await response.destroy()
    return res.status(200).send({
      type: 'sucess',
      message: `registro com o id ${id} deletado com sucesso`,
    });

  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}


export default {
  dualGet,
  persist,
  login,
  delet,
  getByToken,
  getAll,
  validate
}
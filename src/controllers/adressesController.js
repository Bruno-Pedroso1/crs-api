import Adresses from "../models/AdressesModel";
import Jwt from "jsonwebtoken";
import Util from "../utils/getUserByToken"

const getAll = async (req, res) => {
  try {
    let user = await Util.getUserByToken(req.headers.authorization)

    const response = await Adresses.findAll({
      where: {
        idUser: user.id
      }
    })

    return res.status(200).send({
      type: 'success', // success, error, warning, info
      message: 'Registros recuperados com sucesso', // mensagem para o front exibir
      data: response // json com informações de resposta
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error.message 
    });
  }
}
const persist = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    
    if (!id) {
      return await create(req.body, res)
    }

    return await update(id, req.body, res)
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: `Ops! Ocorreu um erro`,
      error: error
    });
  }
}

const create = async (dados, res) => {
  let { id, zipCode, state, city, street, district, numberForget, idUser } = dados;

  let response = await Adresses.create({
    id,
    zipCode,
    state,
    city,
    street,
    district,
    numberForget,
    idUser
  });

  return res.status(200).send({
    type: 'success',
    message: `Cadastro realizado com sucesso`,
    data: response 
  });
}

const update = async (id, dados, res) => {
  let response = await Adresses.findOne({ where: { id } });

  if (!response) {
    return res.status(200).send({
      type: 'error',
      message: `Nenhum registro com id ${id} para atualizar`,
      data: [] 
    });
  }

  Object.keys(dados).forEach(field => response[field] = dados[field]);

  await response.save();
  return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response
  });
}

const destroy = async (req, res) => {
  try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    if (!id) {
      return res.status(200).send({
        type: 'error',
        message: `Informe um id para deletar o registro`,
        data: [] 
      });
    }

    let response = await Adresses.findOne({ where: { id } });

    if (!response) {
      return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id} para deletar`,
        data: [] 
      });
    }

    await response.destroy();
    return res.status(200).send({
      type: 'success',
      message: `Registro id ${id} deletado com sucesso`,
      data: [] 
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: `Ops! Ocorreu um erro`,
      error: error.message 
    });
  }
}

export default {
  getAll,
  persist,
  destroy
}
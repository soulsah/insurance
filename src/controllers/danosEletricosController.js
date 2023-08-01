import danosEletricos from "../models/DanosEletricos";

class DanosEletricosController {
    static taxaRisco = async (req,res) => {
        let string = "idzmaxlimvlr02=7500;eqpmrc=1;eqpmrc=2"
        const parametros = string.split(';');
        const filtro = {};
      
        for (const param of parametros) {
            const [chave, valor] = param.split('=');
            filtro[`${chave}`] = valor;
        }

        try {
            const resultado = await danosEletricos.findOne(filtro);
      
            if (!resultado || resultado.length === 0) {
              return res.status(404).send(filtro);
            }
            res.status(200).send(resultado);
        } catch (error) {
            console.error('Erro ao buscar ajuste:', error);
            res.status(500).send("erro");
        }
    }
}

export default DanosEletricosController
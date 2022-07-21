const { addOrdemCompraService, addOrdemVendaService } = require('../service/investimentos')

const addOrdemCompra = async (req, res, next) => {
    try {
        const { code, message } = await addOrdemCompraService(req);
        res.status(code).json({ message });
        
    } catch (err) {
        next(err);
    }
}

const addOrdemVenda = async (req, res, next) => {
    try {
        const { code, message } = await addOrdemVendaService(req);
        res.status(code).json({ message });        
    } catch (error) {
        next(err)
    }
}

module.exports = { addOrdemCompra, addOrdemVenda };
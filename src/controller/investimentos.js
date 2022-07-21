const { addOrdemCompraService } = require('../service/investimentos')

const addOrdemCompra = async (req, res, next) => {
    try {
        const { code, message } = await addOrdemCompraService(req);
        res.status(code).json({ message });
        
    } catch (err) {
        next(err);
    }
}

const addOrdemVenda = async (req, res) => {
    const ordemVendaService = await addOrdemVendaService(req);
    res.status(200).json({ message: 'OK' });
}

module.exports = { addOrdemCompra, addOrdemVenda };
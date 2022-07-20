const { addOrdemCompraService } = require('../service/investimentos');

const addOrdemCompra = async (req, res) => {
    try {
        const ordemCompraService = await addOrdemCompraService(req);    
        res.status(200).json(ordemCompraService);
        
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const addOrdemVenda = async (req, res) => {
    const ordemVendaService = await addOrdemVendaService(req);

    res.status(200).json({ message: 'OK' });
}

module.exports = { addOrdemCompra, addOrdemVenda };
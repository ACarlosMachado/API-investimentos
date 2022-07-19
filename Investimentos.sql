DROP DATABASE IF EXISTS Investimentos;

CREATE DATABASE Investimentos;

USE Investimentos;

CREATE TABLE ativos (
    ativo_id INT NOT NULL auto_increment,
    codAtivo VARCHAR(5) NOT NULL,
    qtdeAtivo INT NOT NULL,
    valor DECIMAL(7,2) NOT NULL,
    PRIMARY KEY(ativo_id)
) ENGINE=INNODB;

CREATE TABLE clientes (
    cliente_id INT NOT NULL auto_increment,
    codCliente INT NOT NULL,
    PRIMARY KEY(cliente_id)
) ENGINE=INNODB;

CREATE TABLE carteira_ativos (
    carteira_ativos_id INT NOT NULL auto_increment,
    cliente_id INT NOT NULL,
    ativo_id INT NOT NULL,
    qtdeAtivo INT NOT NULL,
    PRIMARY KEY(carteira_ativos_id),
    FOREIGN KEY (cliente_id)
        REFERENCES clientes (cliente_id)
        ON DELETE CASCADE,
    FOREIGN KEY (ativo_id)
        REFERENCES ativos (ativo_id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE carteiras (
    carteira_id INT NOT NULL auto_increment,
    cliente_id INT NOT NULL,
    saldo DECIMAL(7,2) NOT NULL,
    PRIMARY KEY(carteira_id),
    FOREIGN KEY (cliente_id)
        REFERENCES clientes (cliente_id)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO Investimentos.ativos (codAtivo, qtdeAtivo, valor) VALUES
    ("PETR4", 1500, 28.48 ),
    ("VALE3", 2500, 68.73),
    ("XPTO", 1800, 350),
    ("AZUL4", 1000, 12.26);

INSERT INTO Investimentos.clientes (codCliente) VALUES
    (1515),
    (2515),
    (7890),
    (4510);

INSERT INTO Investimentos.carteira_ativos (ativo_id, cliente_id, qtdeAtivo) VALUES
    (1, 1, 50),
    (2, 1, 100),
    (3, 2, 100),
    (1, 3, 20),
    (3, 3, 80),
    (2, 4, 120),
    (4, 4, 10),
    (3, 4, 50);

INSERT INTO Investimentos.carteiras (cliente_id, saldo) VALUE 
    (1, 1595.89),
    (2, 3250),
    (3, 1895.50),
    (4, 1798);
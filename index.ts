/*
ATIVIDADE 1 POO: Modelagem bikes
NOMES:
Aline Nataly Lima de Moura- 164905
Renata Moura Barreto- 163983
Isaque Ribeiro Carneiro- 163810
Guilherme Arujo Mendes de Sousa- 156437
*/

import { SistemaLocacao } from "./sistema";

const sistema = new SistemaLocacao();
sistema.cadastrarBicicleta("Bike A", 100);
sistema.cadastrarCliente("João", "123.456.789-00", "12 999998888", 25);

const bicicleta = sistema.bicicletas[0];
const cliente = sistema.clientes[0];

sistema.realizarAluguel(cliente, bicicleta, 3);
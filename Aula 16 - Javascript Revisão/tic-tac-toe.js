function TicTacToe() {
	this.jogadas = 0;
	this.vez = "X";
	this.tabuleiro = [ "", "", "",
					   "", "", "",
					   "", "", "" ];
	this.vencedor = "";
}

TicTacToe.prototype.trocaVez = function () {
	if (this.vez == "X") {
		this.vez = "O";
	}
	else {
		this.vez = "X";
	}
};

TicTacToe.prototype.jogada = function (pos) {
	if (!this.tabuleiro[pos] && !this.vencedor) {
		this.tabuleiro[pos] = this.vez;
		this.jogadas++;
		this.trocaVez();
		this.verificaVencedor();
	}
};

TicTacToe.prototype.verificaVencedor = function() {
	if (this.tabuleiro[0] == this.tabuleiro[1] &&
		this.tabuleiro[0] == this.tabuleiro[2] &&
		this.tabuleiro[0]) {
			this.vencedor = this.tabuleiro[0];
	}
	else if (this.tabuleiro[3] == this.tabuleiro[4] &&
		this.tabuleiro[3] == this.tabuleiro[5] &&
		this.tabuleiro[3]) {
			this.vencedor = this.tabuleiro[3];
	}
	else if (this.tabuleiro[6] == this.tabuleiro[7] &&
		this.tabuleiro[6] == this.tabuleiro[8] &&
		this.tabuleiro[6]) {
			this.vencedor = this.tabuleiro[6];
	}
	else if (this.tabuleiro[0] == this.tabuleiro[3] &&
		this.tabuleiro[0] == this.tabuleiro[6] &&
		this.tabuleiro[0]) {
			this.vencedor = this.tabuleiro[0];
	}
	else if (this.tabuleiro[1] == this.tabuleiro[4] &&
		this.tabuleiro[1] == this.tabuleiro[7] &&
		this.tabuleiro[1]) {
			this.vencedor = this.tabuleiro[1];
	}
	else if (this.tabuleiro[2] == this.tabuleiro[5] &&
		this.tabuleiro[2] == this.tabuleiro[8] &&
		this.tabuleiro[2]) {
			this.vencedor = this.tabuleiro[2];
	}
	else if (this.tabuleiro[0] == this.tabuleiro[4] &&
		this.tabuleiro[0] == this.tabuleiro[8] &&
		this.tabuleiro[0]) {
			this.vencedor = this.tabuleiro[0];
	}
	else if (this.tabuleiro[2] == this.tabuleiro[4] &&
		this.tabuleiro[2] == this.tabuleiro[6] &&
		this.tabuleiro[2]) {
			this.vencedor = this.tabuleiro[2];
	}
};
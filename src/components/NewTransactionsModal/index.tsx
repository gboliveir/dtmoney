import Modal from 'react-modal';

import { Container, TransactionTypeContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface NewTransactionsModalProps {
    isOpen: boolean,
    onRequestClose: () => void,
}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button"  
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Nova transação</h2>
                
                <input placeholder="Título" type="text" />
                <input placeholder="Valor" type="number" />
                <TransactionTypeContainer>
                    <button type="button">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type="button">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder="Categoria" type="text" />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
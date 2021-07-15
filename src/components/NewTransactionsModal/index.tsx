import Modal from 'react-modal';
import { Container } from './styles';

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
            <Container>
                <h2>Nova transação</h2>
                
                <input placeholder="Título" type="text" />
                <input placeholder="Valor" type="number" />
                <input placeholder="Categoria" type="text" />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void,
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={logo} alt="dtmoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Iniciar transação
                </button>
            </Content>
        </Container>
    );
}
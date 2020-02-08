import * as React from 'react';
import { RimacBanner } from '../../../../../common/components/RimacBanner';
import './styled.scss';
import * as shieldIcon from '../../../../../../assets/img/ic_shield.png';
import * as mobileIcon from '../../../../../../assets/img/ic_mobile.png';
import * as moneyIcon from '../../../../../../assets/img/ic_money.png';
import * as clinicIcon from '../../../../../../assets/img/ic_clinic.png';

export const Banner: React.FC = () => (
    <RimacBanner>
        <div className="rimacBanner">
            <h1 className="rimacBanner__title">Seguro de <span>Salud</span></h1>
            <p className="rimacBanner__information">
                <img src={shieldIcon} />
                <span>Cómpralo de manera fácil y rápida</span>
            </p>
            <p className="rimacBanner__information">
                <img src={mobileIcon} />
                <span>Cotiza y compra tu seguro 100% digital</span>
            </p>
            <p className="rimacBanner__information">
                <img src={moneyIcon} />
                <span>Hasta S/.12 millones de cobertura anual</span>
            </p>
            <p className="rimacBanner__information">
                <img src={clinicIcon} />
                <span>Más de 300 clínicas en todo el Perú</span>
            </p>
        </div>
    </RimacBanner>
);
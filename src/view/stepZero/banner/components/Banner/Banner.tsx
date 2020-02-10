import * as React from 'react';
import { RimacBanner } from '../../../../../common/components/RimacBanner';
import './styled.scss';
import * as shieldIcon from '../../../../../../assets/img/ic_shield.png';
import * as mobileIcon from '../../../../../../assets/img/ic_mobile.png';
import * as moneyIcon from '../../../../../../assets/img/ic_money.png';
import * as clinicIcon from '../../../../../../assets/img/ic_clinic.png';

export const Banner: React.FC = () => {

  const actualYear = new Date().getFullYear();

  return(
    <div className="container">
      <RimacBanner>
        <div className="rimacBanner">
          <h1 className="rimacBanner__title">Seguro de <span>Salud</span></h1>
          <div className="rimacBanner__information">
            <div className="rimacBanner__icon">
              <img src={shieldIcon} />
            </div>
          <span>Cómpralo de manera fácil y rápida</span>
          </div>
          <div className="rimacBanner__information">
            <div className="rimacBanner__icon">
              <img src={mobileIcon} />
            </div>
            <span>Cotiza y compra tu seguro 100% digital</span>
          </div>
          <div className="rimacBanner__information">
            <div className="rimacBanner__icon">
              <img src={moneyIcon} />
            </div>
            <span>Hasta S/.12 millones de cobertura anual</span>
          </div>
          <div className="rimacBanner__information">
            <div className="rimacBanner__icon">
              <img src={clinicIcon} />
            </div>
            <span>Más de 300 clínicas en todo el Perú</span>
          </div>
          <p className="rimacBanner__footer">© {actualYear} RIMAC Seguros y Reaseguros</p>
        </div>
      </RimacBanner>
    </div>
  )
};

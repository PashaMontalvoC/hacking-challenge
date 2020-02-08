import * as React from 'react';
import { BannerFeature } from './banner';
import { LoginFeature } from './login';
import './styled.scss';

export const StepZero: React.FC = () => (
    <div className="stepZero">
        <BannerFeature />
        <LoginFeature />
    </div>
);